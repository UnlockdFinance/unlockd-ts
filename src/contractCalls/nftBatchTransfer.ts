import { addresses } from '../addresses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { getWallet } from './wallet'
import { ClientOptions } from '../types/networks'
import { Address } from 'viem'

/**
 * @description Send NFTs to the unlockd user wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const sendNftsToWallet = async (
  provider: unknown,
  nfts: {
    contractAddress: string
    tokenId: string
  }[],
  options?: ClientOptions
): Promise<Address> => {
  const contractAddress = addresses(options).nftBatchTransfer

  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])
  const [account] = await walletCli.requestAddresses()
  const unlockdWallet = await getWallet(options)

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.nftBatchTransfer,
    functionName: 'batchTransferFrom',
    args: [nfts, unlockdWallet],
    account
  })
  return walletCli.writeContract(request)
}
