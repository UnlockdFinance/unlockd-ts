import { Address } from '../addresses';
import { Signature } from '../types/responses';
import { ClientOptions } from '../client';
import { OrderType } from '../types/subgraph';
export type CreateOrderInput = {
    startAmount: BigInt;
    endAmount: BigInt;
    startTime: number;
    endTime: number;
    debtToSell: BigInt;
};
/**
 * @returns The transaction hash of the create market item.
 * @param {Address} underlyingAsset - The address of the underlying asset.
 * @param {OrderType} orderType - The type of the order.
 * @param {CreateOrderInput} config - The configuration of the order.
 * @param {Signature} signature - The signature of the create order.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export declare const create: (underlyingAsset: Address, orderType: OrderType, config: CreateOrderInput, signature: Signature, options?: ClientOptions) => Promise<`0x${string}`>;
/**
 * @returns The transaction hash of the cancel market item.
 * @param {string} orderId - The order id to cancel.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export declare const cancel: (orderId: string, options?: ClientOptions) => Promise<`0x${string}`>;
/**
 * @returns The transaction hash of the bid market item.
 * @param {string} orderId - The order id to bid.
 * @param {BigInt} amountToPay - The amount to pay.
 * @param {BigInt} amountOfDebt - The amount of debt.
 * @param {Signature} signature - The signature of the bid.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export declare const marketBid: (orderId: string, amountToPay: BigInt, amountOfDebt: BigInt, signature: Signature, options?: ClientOptions) => Promise<`0x${string}`>;
/**
 * @returns The transaction hash of the claim market item.
 * @param {Boolean} claimOnUWallet - The claimOnUWallet flag.
 * @param {string} orderId - The order id to claim.
 * @param {Signature} signature - The signature of the claim.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export declare const claim: (claimOnUWallet: boolean, orderId: string, signature: Signature, options?: ClientOptions) => Promise<`0x${string}`>;
/**
 * @returns The transaction hash of the cancel claim market item.
 * @param {string} orderId - The order id to cancel.
 * @param {Signature} signature - The signature of the cancel claim.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export declare const cancelClaim: (orderId: string, signature: Signature, options?: ClientOptions) => Promise<`0x${string}`>;
/**
 * @returns The transaction hash of the claim market item.
 * @param {Boolean} claimOnUWallet - The claimOnUWallet flag.
 * @param {string} orderId - The order id to claim.
 * @param {BigInt} amountToPay - The amount to pay.
 * @param {BigInt} amountOfDebt - The amount of debt.
 * @param {Signature} signature - The signature of the claim.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export declare const buyNow: (claimOnUWallet: boolean, orderId: string, amountToPay: BigInt, amountOfDebt: BigInt, signature: Signature, options?: ClientOptions) => Promise<`0x${string}`>;
