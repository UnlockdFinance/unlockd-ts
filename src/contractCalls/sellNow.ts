import { addresses, ModuleId } from '../addresses'
import { Signature } from '../types/responses'
import { client, ClientOptions } from '../client'
import { abis } from '../abis'
import { Nft } from '../types/requests'

/**
 * @returns The transaction hash of the sell operation.
 * @param {Nft} asset - The asset to sell.
 * @param {Signature} signature - The signature of the sell operation.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const sell = async (asset: Nft, signature: Signature, options?: ClientOptions) => {
  const contractAddress = addresses(options)[ModuleId.SellNow]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.sellNow,
    functionName: 'sell',
    args: [asset, signature.data, signature.signature],
    account
  })
}
