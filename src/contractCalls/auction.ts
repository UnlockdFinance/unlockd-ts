import { Signature } from '../types/responses'
import { client, ClientOptions } from '../client'
import { abis } from '../abis'
import { addresses, ModuleId } from '../addresses'
import { Nft } from '../types/requests'

/**
 * @returns The transaction hash of the bid.
 * @param {BigInt} amountToPay - The amount to pay.
 * @param {BigInt} amountOfDebt - The amount of debt.
 * @param {Signature} signature - The signature of the bid.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 * @example
 * ```ts
 * const signature = ...
 * const result = await bid(1, 1, signature)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const bid = async (amountToPay: BigInt, amountOfDebt: BigInt, signature: Signature, options?: ClientOptions) => {
  const contractAddress = addresses(options)[ModuleId.Auction]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.auction,
    functionName: 'bid',
    args: [amountToPay, amountOfDebt, signature.data, signature.signature],
    account
  })
}

/**
 * @returns The transaction hash of the redeem.
 * @param {Signature} signature - The signature of the redeem.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 * @example
 * ```ts
 * const signature = ...
 * const result = await redeem(signature)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const redeem = async (signature: Signature, options?: ClientOptions): Promise<>  => {
  const contractAddress = addresses(options)[ModuleId.Auction]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.auction,
    functionName: 'redeem',
    args: [signature.data, signature.signature],
    account
  })
}
/**
 * @returns The transaction hash of the redeem.
 * @param {Boolean} claimOnUWallet - The claimOnUWallet flag.
 * @param {String} orderId - The orderId.
 * @param {Signature} signature - The signature of the redeem.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 * @example
 * ```ts
 * const signature = ...
 * const result = await finalize(claimOnUWallet, orderId, signature)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const finalize = async (
  claimOnUWallet: boolean,
  orderId: string,
  signature: Signature,
  options?: ClientOptions
) => {
  const contractAddress = addresses(options)[ModuleId.Auction]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.auction,
    functionName: 'finalize',
    args: [claimOnUWallet, orderId, signature.data, signature.signature],
    account
  })
}
