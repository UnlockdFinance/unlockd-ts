import { Signature } from '../types/responses'
import { client, ClientOptions } from '../client'
import { abis } from '../abis'
import { addresses, ModuleId } from '../addresses'
import { Nft } from '../types/requests'

/**
 * @returns The transaction hash of the borrow action.
 * @param {BigInt} amount - The amount to borrow.
 * @param {Array<Nft>} assets - The assets to borrow.
 * @param {Signature} signature - The signature of the borrow.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 * @example
 * ```ts
 * const signature = ...
 * const options = {url: 'https://custom.spc.finance', network: 'randomNetwork'}
 * const nfts = [{collection:"...", tokenId:"..."}]
 * const result = await borrow(1, nfts, signature, options)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const borrow = async (amount: BigInt, assets: Array<Nft>, signature: Signature, options?: ClientOptions) => {
  const contractAddress = addresses(options)[ModuleId.Action]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.action,
    functionName: 'borrow',
    args: [amount, assets, signature.data, signature.signature],
    account
  })
}

/**
 * @returns The transaction hash of the repay action.
 * @param {BigInt} amount - The amount to repay.
 * @param {Signature} signature - The signature of the repay.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 * @example
 * ```ts
 * const signature = ...
 * const options = {url: 'https://custom.spc.finance', network: 'randomNetwork'}
 * const result = await reapy(1, signature, options)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const repay = async (amount: BigInt, signature: Signature, options?: ClientOptions) => {
  const contractAddress = addresses(options)[ModuleId.Action]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.action,
    functionName: 'repay',
    args: [amount, signature.data, signature.signature],
    account
  })
}
