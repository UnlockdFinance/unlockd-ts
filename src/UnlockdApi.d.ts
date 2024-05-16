import { PricesResponse, Signature, SignatureMessageResponse, ValidateMessageResponse } from './types/responses';
import { ActionRequest, BuyNowRequest, MarketRequest, SellNowRequest } from './types/requests';
import { Chains } from './client';
/**
 * UnlockdApi wrapper of the Unlockd REST API
 * @class
 */
export declare class UnlockdApi {
    private env;
    /** @ignore */
    readonly url: string;
    /**
     * @param {Chain} env - Environment to use in the SDK
     * @example
     * ```ts
     * const api = new UnlockdApi(Chain.Mainnet)
     * ```
     */
    constructor(env?: Chains);
    /**
     * Use this method to retrieve the signature message for a given address to sign .
     * @returns Retrieve the signature message for a given address. This is the first part of the authentication process.
     * @param address - The ethereum address to sign.
     * @example
     * ```ts
     * const address = '0x0000000000000000000000000000000000000000'
     * const result = await api.signatureMessage(address)
     * ```
     * @see {@link http://devs.unlockd.finance | 📚Gitbook}
     */
    signatureMessage(address: string): Promise<SignatureMessageResponse>;
    /**
     * Use this method to validate a signature message signed by the user wallet.
     * @returns The token for a valid signature message for a given address. This is the second part of the authentication process.
     * @param address - The ethereum address to sign.
     * @param signature - The signed message from the wallet or PK .
     * @example
     * ```ts
     * const address = '0x0000000000000000000000000000000000000000'
     * const signature = '...'
     * const result = await api.validateMessage(address, signature)
     * ```
     * @see {@link http://devs.unlockd.finance | 📚Gitbook}
     */
    validateMessage(address: string, signature: string): Promise<ValidateMessageResponse>;
    /**
     * Use this method to retrieve the signature to do the borrow.
     * @returns The signature to create a borrow.
     * @param tokenAuth - The token retrieved from the validateMessage method.
     * @param params - The parameters to create a borrow. LoanId or underlyingAsset are required.
     *
     * @example
     * ```ts
     * const params: ActionRequest = {
     *   loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
     *   nfts: [{collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId'}]
     * }
     * const authToken = await api.borrowSignature(authToken, params)
     * ```
     * @see {@link http://devs.unlockd.finance | 📚Gitbook}
     */
    borrowSignature(tokenAuth: string, params: ActionRequest): Promise<Signature>;
    /**
     * Use this method to retrieve the signature to do the repay.
     * @returns The signature to create a repay.
     * @param tokenAuth - The token retrieved from the validateMessage method.
     * @param params - The parameters to create a repay. LoanId is required. The nfts are optional if they are provided  will be removed from the loan.
     * @example
     * ```ts
     * const params: ActionRequest = {
     *  loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
     *  nfts: [{collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId'}]
     *  }
     *  const authToken = await api.repaySignature(authToken, params)
     *  ```
     *  @see {@link http://devs.unlockd.finance | 📚Gitbook}
     */
    repaySignature(tokenAuth: string, params: ActionRequest): Promise<Signature>;
    /**
     * Use this method to retrieve the signature to do the sell now.
     * @returns The signature to create a sell now.
     * @param tokenAuth - The token retrieved from the validateMessage method.
     * @param params - The parameters to create a sell now. LoanId is optional.
     * @example
     * ```ts
     * const params: SellNowRequest = {
     * loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
     * nft: {collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId'}
     * }
     * const authToken = await api.sellNowSignature(authToken, params)
     * ```
     *  @see {@link http://devs.unlockd.finance | 📚Gitbook}
     */
    sellNowSignature(tokenAuth: string, params: SellNowRequest): Promise<Signature>;
    /**
     * Use this method to retrieve the signature to do the buy now.
     * @returns The signature to create a buy now.
     * @param tokenAuth - The token retrieved from the validateMessage method.
     * @param params - The parameters to create a buy now.
     * @example
     * ```ts
     * const params: SellNowRequest = {
     * loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
     * nft: {collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId'}
     * }
     * const authToken = await api.sellNowSignature(authToken, params)
     * ```
     *  @see {@link http://devs.unlockd.finance | 📚Gitbook}
     */
    buyNowSignature(tokenAuth: string, params: BuyNowRequest): Promise<Signature>;
    /**
     * Use this method to retrieve the signature to interact with a market.
     * @returns The signature to interact with a market.
     * @param tokenAuth - The token retrieved from the validateMessage method.
     * @param params - The parameters to interact with a market. Collection and tokenId are required.
     * @example
     * ```ts
     * const params: MarketRequest = {collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId'}
     * const authToken = await api.marketSignature(authToken, params)
     * ```
     * @see {@link http://devs.unlockd.finance | 📚Gitbook}
     */
    marketSignature(tokenAuth: string, params: MarketRequest): Promise<Signature>;
    /**
     * Use this method to retrieve the prices for a given nfts and underlying asset.
     * @returns The prices for a given nfts and underlying asset.
     * @param nfts - The nfts to get the prices.
     * @param underlyingAsset - The underlying asset to get the prices.
     * @example
     * ```ts
     * const nfts = [
     * {collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358', tokenId: '10',underlyingAsset : '0x7b79995e5f793a07bc00c21412e50ecae098e7f9'}
     * ]
     * const result = await api.prices(nfts)
     * ```
     * @see {@link http://devs.unlockd.finance | 📚Gitbook}
     */
    prices(nfts: {
        collection: string;
        tokenId: string;
        underlyingAsset: string;
    }[]): Promise<PricesResponse[]>;
}
