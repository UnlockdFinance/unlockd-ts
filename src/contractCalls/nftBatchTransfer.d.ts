import { ClientOptions } from '../client';
/**
 * @description Send NFTs to the unlockd user wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export declare const sendNftsToWallet: (nfts: {
    contractAddress: string;
    tokenId: string;
}[], options?: ClientOptions) => Promise<void>;
