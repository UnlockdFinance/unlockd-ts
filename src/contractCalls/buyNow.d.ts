import { Signature } from '../types/responses';
import { ClientOptions } from '../client';
/**
 * @returns The transaction hash of the buy operation.
 * @param {string} amount - Amount that the user wan't to use to buy the asset
 * @param {Signature} signature - The signature of the buy operation.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export declare const buy: (amount: string, signature: Signature, options?: ClientOptions) => Promise<`0x${string}`>;
