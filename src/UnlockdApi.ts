import {
  validateAddress,
  validateBorrow,
  validateBuyNow,
  validateMarket,
  validatePrices,
  validateRepay,
  validateSellNow
} from './validations'
import {
  Action,
  BuyNow,
  Market,
  PricesResponse,
  SellNow,
  Signature,
  SignatureMessageResponse,
  ValidateMessageResponse
} from './types/responses'
import { ActionRequest, BuyNowRequest, MarketRequest, PricesRequest, SellNowRequest } from './types/requests'
import axios, { AxiosError } from 'axios'
import { InvalidSignatureException, mapAxiosException, UnexpectedException } from './errors'
import { type Chain, Chains } from './types/networks'

/**
 * UnlockdApi wrapper of the Unlockd REST API
 * @class
 */
export class UnlockdApi {
  /** @ignore */
  public readonly url

  /**
   * @param {Chain} env - Environment to use in the SDK
   * @example
   * ```ts
   * const api = new UnlockdApi(Chain.Mainnet)
   * ```
   */
  constructor(private env: Chain = Chains.Mainnet) {
    switch (this.env) {
      case Chains.Localhost:
        this.url = 'https://api.example.com'
        break
      case Chains.Sepolia:
        this.url = 'https://unlockd-api.staging.unlockd.finance'
        break
      case Chains.Mainnet:
        this.url = 'https://api-sdk.unlockd.finance'
        break
      default:
        throw new Error(`Unsupported chain: ${this.env}`)
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
      throw new UnexpectedException('Failed to retrieve the signature message.')
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
    const safeAddress = validateAddress(address)
    const response = await axios.post(`${this.url}/auth/${safeAddress}/validate`, { signature }).catch(error => {
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
  async borrowSignature(tokenAuth: string, params: ActionRequest): Promise<Signature<Action>> {
    const safeParams = validateBorrow(params)
    const response = await axios
      .post(`${this.url}/signature/loan/borrow`, safeParams, {
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
  async repaySignature(tokenAuth: string, params: ActionRequest): Promise<Signature<Action>> {
    const safeParams = validateRepay(params)
    const response = await axios
      .post(`${this.url}/signature/loan/repay`, safeParams, {
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
  async sellNowSignature(tokenAuth: string, params: SellNowRequest): Promise<Signature<SellNow>> {
    const safeParams = validateSellNow(params)
    const response = await axios
      .post(`${this.url}/signature/sellnow`, safeParams, {
        headers: {
          Authorization: `Bearer ${tokenAuth}`
        }
      })
      .catch((error: AxiosError) => mapAxiosException(error))
    return response.data
  }

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
  async buyNowSignature(tokenAuth: string, params: BuyNowRequest): Promise<Signature<BuyNow>> {
    const safeParams = validateBuyNow(params)
    const response = await axios
      .post(`${this.url}/signature/buynow`, safeParams, {
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
  async marketSignature(tokenAuth: string, params: MarketRequest): Promise<Signature<Market>> {
    const safeParams = validateMarket(params)
    const response = await axios
      .post(`${this.url}/signature/market`, safeParams, {
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
   * @example
   * ```ts
   * const nfts = [
   * {collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358', tokenId: '10',underlyingAsset : '0x7b79995e5f793a07bc00c21412e50ecae098e7f9'}
   * ]
   * const result = await api.prices(nfts)
   * ```
   * @see {@link http://devs.unlockd.finance | 📚Gitbook}
   */
  async prices(request: PricesRequest): Promise<PricesResponse[]> {
    const safeRequest = validatePrices(request)
    const response = await axios
      .post(`${this.url}/prices`, safeRequest.nfts)
      .catch((error: AxiosError) => mapAxiosException(error))
    return response.data.result
  }
}
