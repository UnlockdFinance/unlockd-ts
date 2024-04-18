import {
  validateAddress,
  validateBorrow,
  validateMarket,
  validatePrices,
  validateRepay,
  validateSellNow
} from './validations'
import { PricesResponse, Signature, SignatureMessageResponse, ValidateMessageResponse } from './types/responses'
import { ActionRequest, MarketRequest, SellNowRequest } from './types/requests'
import axios, { AxiosError, HttpStatusCode } from 'axios'
import { InvalidSignatureException, mapAxiosException, UnauthorizedException, UnexpectedException } from './errors'

/**
 * Environment to use in the SDK
 * @enum {number}
 */
export enum Environment {
  TEST,
  PRODUCTION,
  STAGING
}

/**
 * UnlockdApi wrapper of the Unlockd REST API
 * @class
 */
export class UnlockdApi {
  /** @ignore */
  public readonly url

  /**
   * @param {Environment} env - Environment to use in the SDK
   * @example
   * ```ts
   * const api = new UnlockdApi(Environment.PRODUCTION)
   * ```
   */
  constructor(private env = Environment.PRODUCTION) {
    switch (this.env) {
      case Environment.TEST:
        this.url = 'https://api.example.com'
        break
      case Environment.STAGING:
        this.url = 'https://unlockd-api.staging.unlockd.finance'
        break
      case Environment.PRODUCTION:
        this.url = 'https://api-sdk.unlockd.finance'
        break
      default:
        this.url = 'https://api-sepolia-sdk.unlockd.finance'
        break
    }
  }

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
  async signatureMessage(address: string): Promise<SignatureMessageResponse> {
    validateAddress(address)
    const response = await axios.get(`${this.url}/auth/${address}/message`).catch(error => {
      throw new UnexpectedException()
    })
    return response.data
  }

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
  async validateMessage(address: string, signature: string): Promise<ValidateMessageResponse> {
    validateAddress(address)
    const response = await axios.post(`${this.url}/auth/${address}/validate`, { signature }).catch(error => {
      throw new InvalidSignatureException()
    })
    return response.data
  }

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
  async borrowSignature(tokenAuth: string, params: ActionRequest): Promise<Signature> {
    validateBorrow(params)
    const response = await axios
      .post(`${this.url}/signature/loan/borrow`, params, {
        headers: {
          Authorization: `Bearer ${tokenAuth}`
        }
      })
      .catch((error: AxiosError) => mapAxiosException(error))
    return response.data
  }

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
  async repaySignature(tokenAuth: string, params: ActionRequest): Promise<Signature> {
    validateRepay(params)
    const response = await axios
      .post(`${this.url}/signature/loan/repay`, params, {
        headers: {
          Authorization: `Bearer ${tokenAuth}`

        }
      })
      .catch((error: AxiosError) => mapAxiosException(error))
    return response.data
  }

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
  async sellNowSignature(tokenAuth: string, params: SellNowRequest): Promise<Signature> {
    validateSellNow(params)
    const response = await axios
      .post(`${this.url}/signature/sellnow`, params, {
        headers: {
          Authorization: `Bearer ${tokenAuth}`
        }
      })
      .catch((error: AxiosError) => mapAxiosException(error))
    return response.data
  }

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
  async marketSignature(tokenAuth: string, params: MarketRequest): Promise<Signature> {
    validateMarket(params)

    const response = await axios
      .post(`${this.url}/signature/market`, params, {
        headers: {
          Authorization: `Bearer ${tokenAuth}`

        }
      })
      .catch((error: AxiosError) => mapAxiosException(error))
    return response.data
  }

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
  async prices(nfts: { collection: string; tokenId: string, underlyingAsset: string }[]): Promise<PricesResponse[]> {
    validatePrices({ nfts })
    const response = await axios
      .post(`${this.url}/prices`, { nfts })
      .catch((error: AxiosError) => mapAxiosException(error))
    return response.data.result
  }
}
