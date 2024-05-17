import { addresses, ModuleId } from '../addresses'
import { BuyNow, Signature } from '../types/responses'
import { client } from '../client'
import { abis } from '../abis'
import { ClientOptions } from '../types/networks'

/**
 * @returns The transaction hash of the buy operation.
 * @param {string} amount - Amount that the user wan't to use to buy the asset
 * @param {Signature<BuyNow>} signature - The signature of the buy operation.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const buy = async (amount: string, signature: Signature<BuyNow>, options?: ClientOptions) => {
  const contractAddress = addresses(options)[ModuleId.BuyNow]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.buyNow,
    functionName: 'buy',
    args: [amount, signature.data, signature.signature],
    account
  })
}
