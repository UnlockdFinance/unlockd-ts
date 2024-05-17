import { Address, addresses, ModuleId } from '../addresses'
import { client, ClientOptions, publicClient } from '../client'
import { abis } from '../abis'
import { getWallet } from './wallet'

/**
 * @description Send NFTs to the unlockd user wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const sendNftsToWallet = async (nfts: {
  contractAddress: string,
  tokenId: string
}[], options?: ClientOptions): Promise<void> => {

  const contractAddress = addresses(options).nftBatchTransfer
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()
  const unlockdWallet = await getWallet(options)

  await walletCli.writeContract({
    address: contractAddress,
    abi: abis.nftBatchTransfer,
    functionName: 'batchTransferFrom',
    args: [nfts, unlockdWallet],
    account
  })
}
