import { addresses, ModuleId } from '../addresses'
import { BuyNow, Signature } from '../types/responses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { chains, type ClientOptions } from '../types/networks'
import { WriteContractReturnType } from 'viem'

/**
 * @returns The transaction hash of the buy operation.
 *
 * @param provider EIP-1193 provider
 * @param {Signature<BuyNow>} signature - The signature of the buy operation.
 * @param {bigint} args.amount - Amount that the user want to use to buy the asset.
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const buy = async ({
  provider,
  signature,
  args,
  options
}: {
  provider: unknown
  signature: Signature<BuyNow>
  args: { amount: bigint }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { amount } = args
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.BuyNow]

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
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
