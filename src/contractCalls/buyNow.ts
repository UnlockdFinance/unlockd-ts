import { addresses, ModuleId } from '../addresses'
import { BuyNow, Signature } from '../types/responses'
import { client, publicClient } from '../client'
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
export const buy = async (provider: unknown, amount: string, signature: Signature<BuyNow>, options?: ClientOptions) => {
  const contractAddress = addresses(options)[ModuleId.BuyNow]

  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.buyNow,
    functionName: 'buy',
    args: [amount, signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}
