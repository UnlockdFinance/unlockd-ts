import { ClientOptions } from '../client';
/**
 * @description Create the Unlockd abstract wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export declare const createWallet: (options?: ClientOptions) => Promise<void>;
/**
 * @return The wallet address of the user
 *
 * @param options
 */
export declare const getWallet: (options?: ClientOptions) => Promise<any>;
