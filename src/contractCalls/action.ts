import { Action, Signature } from '../types/responses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { addresses, ModuleId } from '../addresses'
import { Nft } from '../types/requests'
import { chains, type ClientOptions } from '../types/networks'
import { WriteContractReturnType } from 'viem'

/**
 * @returns The transaction hash of the borrow action.
 *
 * @param provider EIP-1193 provider
 * @param {Signature} signature - The signature of the borrow.
 * @param {bigint} args.amount - The amount to borrow.
 * @param {Nft[]} args.assets - The assets to borrow [{ collection: Address, tokenId: bigint }]
 * @param {ClientOptions} options - The client options
 *
 * @example
 * ```ts
 * const signature = ...
 * const options = {url: 'https://custom.spc.finance', network: 'randomNetwork'}
 * const nfts = [{collection:"...", tokenId:"..."}]
 * const result = await borrow(1, nfts, signature, options)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const borrow = async ({
  provider,
  signature,
  args,
  options
}: {
  provider: unknown
  signature: Signature<Action>
  args: {
    amount: bigint
    assets: Nft[]
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { amount, assets } = args
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.Action]
  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.action,
    functionName: 'borrow',
    args: [amount, assets, signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}

/**
 * @returns The transaction hash of the repay action.
 *
 * @param provider EIP-1193 provider
 * @param {Signature} signature - The signature of the repay.
 * @param {bigint} args.amount - The amount to repay.
 * @param {ClientOptions} options - The client options.
 *
 * @example
 * ```ts
 * const signature = ...
 * const options = {url: 'https://custom.spc.finance', network: 'randomNetwork'}
 * const result = await reapy(1, signature, options)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const repay = async ({
  provider,
  signature,
  args,
  options
}: {
  provider: unknown
  signature: Signature<Action>
  args: {
    amount: bigint
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { amount } = args
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.Action]
  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.action,
    functionName: 'repay',
    args: [amount, signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}
