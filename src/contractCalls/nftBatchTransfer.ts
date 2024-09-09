import { addresses } from '../addresses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { getWallet } from './wallet'
import { chains, type ClientOptions } from '../types/networks'
import { Address, WriteContractReturnType } from 'viem'

/**
 * @description Send NFTs to the Unlockd user wallet
 *
 * @param provider EIP-1193 provider
 * @param {Nft[]} nfts - The assets to send [{ collection: Address, tokenId: bigint }]
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
  nfts: {
    contractAddress: Address
    tokenId: bigint
  }[]
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const chain = chains(options)
  const contractAddress = addresses(chain).nftBatchTransfer

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()
  const unlockdWallet = await getWallet({ provider, options })

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.nftBatchTransfer,
    functionName: 'batchTransferFrom',
    args: [nfts, unlockdWallet],
    account
  })
  return walletCli.writeContract(request)
}
