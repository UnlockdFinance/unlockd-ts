import { addresses, ModuleId } from '../addresses'
import { SellNow, Signature } from '../types/responses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { Nft } from '../types/requests'
import { chains, type ClientOptions } from '../types/networks'

/**
 * @returns The transaction hash of the sell operation.
 * @param {Nft} asset - The asset to sell.
 * @param {Signature<SellNow>} signature - The signature of the sell operation.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const sell = async (provider: unknown, asset: Nft, signature: Signature<SellNow>, options?: ClientOptions) => {
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.SellNow]

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.sellNow,
    functionName: 'sell',
    args: [asset, signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}
