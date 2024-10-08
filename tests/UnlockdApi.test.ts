import nock from 'nock'
import {
  ActionRequest,
  Chains,
  MarketRequest,
  Nft,
  SellNowRequest,
  SignatureMessageResponse,
  UnlockdApi,
  ValidateMessageResponse
} from '../src'
import { InvalidSignatureException, mapAxiosException, UnauthorizedException, UnexpectedException } from '../src/errors'
import { AxiosError } from 'axios'
import { Address } from 'viem'
import { validateBorrow, validateMarket, validatePrices, validateRepay, validateSellNow } from '../src/validations'

describe('UnlockdApi', () => {
  let api: UnlockdApi
  let apiUrl: string
  const tokenAuth = 'valid-token'

  beforeAll(() => {
    api = new UnlockdApi({ chain: Chains.Localhost })
    apiUrl = api.url || 'https://api.example.com'
  })

  afterEach(() => {
    nock.cleanAll()
  })

  it('should fetch a signature message', async () => {
    const address = '0x0000000000000000000000000000000000000000'
    const expectedResponse: SignatureMessageResponse = { message: 'Test message' }

    nock(apiUrl).get(`/auth/${address}/message`).reply(200, expectedResponse)

    const response = await api.signatureMessage(address)
    expect(response).toEqual(expectedResponse)
  })

  it('should throw exception on a signature message fails', async () => {
    const address = '0x0000000000000000000000000000000000000000'

    nock(apiUrl).get(`/auth/${address}/message`).reply(500)

    await expect(api.signatureMessage(address)).rejects.toThrow(UnexpectedException)
  })

  it('should validate a message', async () => {
    const address = '0x0000000000000000000000000000000000000000'
    const signature = 'testSignature'
    const expectedResponse: ValidateMessageResponse = { token: tokenAuth }

    nock(apiUrl).post(`/auth/${address}/validate`, { signature }).reply(200, expectedResponse)

    const response = await api.validateMessage(address, signature)
    expect(response).toEqual(expectedResponse)
  })
  it('should throw exception on a validate message fails', async () => {
    const address = '0x0000000000000000000000000000000000000000'
    const signature = 'testSignature'

    nock(apiUrl).post(`/auth/${address}/validate`, { signature }).reply(500)

    await expect(api.validateMessage(address, signature)).rejects.toThrow(InvalidSignatureException)
  })

  it('should fetch a borrow signature', async () => {
    const params: ActionRequest = {
      loanId: '0x1234567890abcdef1234567890abcdef12345678' as Address,
      nfts: [{ collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358' as Address, tokenId: 123n }]
    }
    const expectedResponse = { signature: { v: 1, r: 'testR', s: 'testS', deadline: 123456789 } }

    const safeParams = validateBorrow(params)
    nock(apiUrl)
      .post('/signature/loan/borrow', safeParams)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(200, expectedResponse)

    const response = await api.borrowSignature(tokenAuth, params)
    expect(response).toEqual(expectedResponse)
  })

  it('should fetch a sellNow signature', async () => {
    const params: SellNowRequest = {
      loanId: '0x1234567890abcdef1234567890abcdef12345678' as Address,
      nft: { collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358' as Address, tokenId: 123n }
    }
    const expectedResponse = { signature: { v: 1, r: 'testR', s: 'testS', deadline: 123456789 } }

    const safeParams = validateSellNow(params)
    nock(apiUrl)
      .post('/signature/sellnow', safeParams)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(200, expectedResponse)

    const response = await api.sellNowSignature(tokenAuth, params)
    expect(response).toEqual(expectedResponse)
  })
  it('should fetch a market signature', async () => {
    const params: MarketRequest = { collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358' as Address, tokenId: 123n }
    const expectedResponse = { signature: { v: 1, r: 'testR', s: 'testS', deadline: 123456789 } }

    const safeParams = validateMarket(params)
    nock(apiUrl)
      .post('/signature/market', safeParams)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(200, expectedResponse)

    const response = await api.marketSignature(tokenAuth, params)
    expect(response).toEqual(expectedResponse)
  })

  it('should fetch a repay signature', async () => {
    const params: ActionRequest = {
      loanId: '0x1234567890abcdef1234567890abcdef12345678' as Address,
      nfts: [{ collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358' as Address, tokenId: 123n }]
    }
    const expectedResponse = { signature: { v: 2, r: 'testR2', s: 'testS2', deadline: 987654321 } }

    const safeParams = validateRepay(params)
    nock(apiUrl)
      .post('/signature/loan/repay', safeParams)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(200, expectedResponse)

    const response = await api.repaySignature(tokenAuth, params)
    expect(response).toEqual(expectedResponse)
  })

  it('should fetch a prices', async () => {
    const params = {
      nfts: [
        {
          collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358' as Address,
          tokenId: 10n,
          underlyingAsset: '0x7b79995e5f793a07bc00c21412e50ecae098e7f9' as Address
        }
      ]
    }
    const expectedResponse = {
      result: [
        {
          collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358' as Address,
          tokenId: '10',
          valuation: '300000000000000000',
          ltv: '3000',
          liquidationThreshold: 8500
        }
      ]
    }

    const safeParams = validatePrices(params)
    nock(apiUrl).post('/prices', safeParams).reply(200, expectedResponse)

    const response = await api.prices(params)
    expect(response).toEqual(expectedResponse.result)
  })
  it('should handle an unauthorized exception when the request fails with 401 status', async () => {
    const params: ActionRequest = {
      loanId: '0x1234567890abcdef1234567890abcdef12345678' as Address,
      nfts: [{ collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358' as Address, tokenId: 123n }]
    }

    const safeParams = validateBorrow(params)
    nock(apiUrl)
      .post('/signature/loan/borrow', safeParams)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(401)

    await expect(api.borrowSignature(tokenAuth, params)).rejects.toThrow(UnauthorizedException)
  })

  it('should handle an unexpected exception when the request fails with 500 status', async () => {
    const params: ActionRequest = {
      loanId: '0x1234567890abcdef1234567890abcdef12345678' as Address,
      nfts: [{ collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358' as Address, tokenId: 123n }]
    }

    const safeParams = validateBorrow(params)
    nock(apiUrl)
      .post('/signature/loan/borrow', safeParams)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(500)

    await expect(api.borrowSignature(tokenAuth, params)).rejects.toThrow(UnexpectedException)
  })

  it('should handle an unexpected exception when the request fails with an unknown status', async () => {
    const params: ActionRequest = {
      loanId: '0x1234567890abcdef1234567890abcdef12345678' as Address,
      nfts: [{ collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358' as Address, tokenId: 123n }]
    }

    const safeParams = validateBorrow(params)
    nock(apiUrl)
      .post('/signature/loan/borrow', safeParams)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(400)

    await expect(api.borrowSignature(tokenAuth, params)).rejects.toThrow(UnexpectedException)
  })

  it('should map Axios exception to UnauthorizedException', () => {
    const axiosError = {
      response: {
        status: 401
      },
      message: 'Unauthorized'
    }

    expect(() => mapAxiosException(axiosError as AxiosError)).toThrow(UnauthorizedException)
  })

  it('should map Axios exception to UnexpectedException with default status', () => {
    const axiosError = {
      response: {
        status: 404
      },
      message: 'Not Found'
    }

    expect(() => mapAxiosException(axiosError as AxiosError)).toThrow(UnexpectedException)
  })
})
