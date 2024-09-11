import { client, publicClient } from '../client'
import { getWallet } from './wallet'
import { chains, type ClientOptions } from '../types/networks'
import { Address, erc20Abi, erc721Abi, WriteContractReturnType } from 'viem'
import { Asset, ERC20, Nft } from '../types/requests'
import { abis } from '../abis'
import { addresses } from '../addresses'
import { fulfilledValue } from '../helpers'

/**
 * @description Withdraw ERC20 or NFTs from the Unlockd wallet
 *
 * @param provider EIP-1193 provider
 * @param {Asset[]} args.assets - An array of ERC20 or NFT
 * @param {Address} args.recipient - The address to send to
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const withdrawAssets = async ({
  provider,
  args,
  options
}: {
  provider: unknown
  args: {
    assets: Asset[]
    recipient: Address
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { assets, recipient } = args
  const chain = chains(options)
  const basicWalletVaultAddress = addresses(chain).basicWalletVault

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()

  const assetTransfers = assets.map(asset => {
    if ('collection' in asset) {
      return {
        contractAddress: asset.collection,
        value: asset.tokenId,
        isERC20: false
      }
    } else {
      return {
        contractAddress: asset.contractAddress,
        value: asset.amount,
        isERC20: true
      }
    }
  })

  const { request } = await pubCli.simulateContract({
    address: basicWalletVaultAddress,
    abi: abis.basicWalletVault,
    functionName: 'withdrawAssets',
    args: [assetTransfers, recipient],
    account
  })
  return walletCli.writeContract(request)
}

/** SEND ERC20 TO WALLET */

/**
 * @description Send ERC20 to the Unlockd user wallet
 *
 * @param provider EIP-1193 provider
 * @param {Address} args.tokenAddress - The asset to send
 * @param {bigint} args.amount - The amount to send
 * @param {Address} args.recipient - The address to send to
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const sendERC20ToWallet = async ({
  provider,
  asset,
  options
}: {
  provider: unknown
  asset: ERC20
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { contractAddress, amount } = asset
  const chain = chains(options)

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()
  const unlockdWallet = await getWallet({ provider, options })

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: erc20Abi,
    functionName: 'transfer',
    args: [unlockdWallet, amount],
    account
  })
  return walletCli.writeContract(request)
}

/** SEND NFTS TO WALLET */

/**
 * @description Get approval status for a list of NFTs
 *
 * @param provider EIP-1193 provider
 * @param {Nft[]} nfts - The NFTs to check approval status
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const approvalStatusNfts = async ({
  provider,
  nfts,
  options
}: {
  provider: unknown
  nfts: Nft[]
  options?: ClientOptions
}): Promise<{
  approved: Nft[]
  notApproved: Nft[]
}> => {
  const chain = chains(options)
  const nftBatchTransferAddress = addresses(chain).nftBatchTransfer

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()

  const collections = [...new Set(nfts.map(nft => nft.collection))]
  const requestContracts = collections.map(
    address =>
      ({
        abi: erc721Abi,
        functionName: 'isApprovedForAll',
        args: [account, nftBatchTransferAddress],
        address
      }) as const
  )

  const results = await pubCli.multicall({
    contracts: requestContracts
  })

  const addressApprovalMap = new Map(
    collections.map((address, index) => {
      const callResult = results[index]
      const isApproved = callResult.status === 'success' && callResult.result === true
      return [address, isApproved]
    })
  )

  return {
    approved: nfts.filter(nft => addressApprovalMap.get(nft.collection)),
    notApproved: nfts.filter(nft => !addressApprovalMap.get(nft.collection))
  }
}

/**
 * @description Approve NFTs for transfer
 *
 * @param provider EIP-1193 provider
 * @param {Nft[]} nfts - The NFTs to approve
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const approveNfts = async ({
  provider,
  nfts,
  options
}: {
  provider: unknown
  nfts: Nft[]
  options?: ClientOptions
}): Promise<WriteContractReturnType[]> => {
  const chain = chains(options)
  const nftBatchTransferAddress = addresses(chain).nftBatchTransfer

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()

  const collections = [...new Set(nfts.map(nft => nft.collection))]
  const simulatePromises = collections.map(async address => {
    try {
      const { request } = await pubCli.simulateContract({
        abi: erc721Abi,
        functionName: 'setApprovalForAll',
        args: [nftBatchTransferAddress, true],
        address,
        account
      })
      return { success: true, request, address }
    } catch (err) {
      return { success: false, err, address }
    }
  })
  const simulateResults = await Promise.allSettled(simulatePromises)

  const writePromises = simulateResults
    .filter(result => result.status === 'fulfilled' && result.value.success)
    .map(result => {
      const fulfilledResult = fulfilledValue(result)
      if (fulfilledResult?.request) return walletCli.writeContract(fulfilledResult.request)
    })
    .filter(request => request !== undefined)

  return await Promise.all(writePromises)
}

/**
 * @description Send NFTs to the Unlockd user wallet
 *
 * @param provider EIP-1193 provider
 * @param {Nft[]} nfts - The NFTs to send
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const sendNftsToWallet = async ({
  provider,
  nfts,
  options
}: {
  provider: unknown
  nfts: Nft[]
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const chain = chains(options)
  const contractAddress = addresses(chain).nftBatchTransfer

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()
  const unlockdWallet = await getWallet({ provider, options })

  const nftsArg = nfts.map(nft => ({
    contractAddress: nft.collection,
    tokenId: nft.tokenId
  }))

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.nftBatchTransfer,
    functionName: 'batchTransferFrom',
    args: [nftsArg, unlockdWallet],
    account
  })
  return walletCli.writeContract(request)
}
