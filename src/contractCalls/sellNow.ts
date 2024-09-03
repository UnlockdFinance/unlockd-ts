import { addresses, ModuleId } from '../addresses'
import { SellNow, Signature } from '../types/responses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { Nft } from '../types/requests'
import { chains, type ClientOptions } from '../types/networks'
import { WriteContractReturnType } from 'viem'

/**
 * @returns The transaction hash of the sell operation.
 *
 * @param provider EIP-1193 provider
 * @param {Signature<SellNow>} signature - The signature of the sell operation.
 * @param args { asset: Nft } - The asset to sell.
 * @param {ClientOptions} options - The client options
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const sell = async ({
  provider,
  signature,
  args,
  options
}: {
  provider: unknown
  signature: Signature<SellNow>
  args: { asset: Nft }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { asset } = args
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
  return await walletCli.writeContract(request)
}
