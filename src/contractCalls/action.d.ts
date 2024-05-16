import { Signature } from '../types/responses';
import { ClientOptions } from '../client';
import { Nft } from '../types/requests';
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
export declare const borrow: (amount: BigInt, assets: Array<Nft>, signature: Signature, options?: ClientOptions) => Promise<`0x${string}`>;
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
export declare const repay: (amount: BigInt, signature: Signature, options?: ClientOptions) => Promise<`0x${string}`>;
