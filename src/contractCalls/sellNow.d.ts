import { Signature } from '../types/responses';
import { ClientOptions } from '../client';
import { Nft } from '../types/requests';
/**
 * @returns The transaction hash of the sell operation.
 * @param {Nft} asset - The asset to sell.
 * @param {Signature} signature - The signature of the sell operation.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export declare const sell: (asset: Nft, signature: Signature, options?: ClientOptions) => Promise<`0x${string}`>;
