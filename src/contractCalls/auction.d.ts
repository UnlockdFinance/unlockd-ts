import { Signature } from '../types/responses';
import { ClientOptions } from '../client';
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
export declare const bid: (amountToPay: BigInt, amountOfDebt: BigInt, signature: Signature, options?: ClientOptions) => Promise<`0x${string}`>;
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
export declare const redeem: (signature: Signature, options?: ClientOptions) => Promise<`0x${string}`>;
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
export declare const finalize: (claimOnUWallet: boolean, orderId: string, signature: Signature, options?: ClientOptions) => Promise<`0x${string}`>;
