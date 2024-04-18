import nock from 'nock'
import { Environment, UnlockdApi } from '../src'
import { InvalidSignatureException, mapAxiosException, UnauthorizedException, UnexpectedException } from '../src/errors'
import { AxiosError } from 'axios'
import { SignatureMessageResponse, ValidateMessageResponse } from '../src/types/responses'
import { ActionRequest, MarketRequest, SellNowRequest } from '../src/types/requests'

describe('UnlockdApi', () => {
  let api: UnlockdApi
  const tokenAuth = 'valid-token'

  beforeAll(() => {
    api = new UnlockdApi(Environment.TEST)
  })

  afterEach(() => {
    nock.cleanAll()
  })

  it('should fetch a signature message', async () => {
    const address = '0x0000000000000000000000000000000000000000'
    const expectedResponse: SignatureMessageResponse = { message: 'Test message' }

    nock(api.url).get(`/auth/${address}/message`).reply(200, expectedResponse)

    const response = await api.signatureMessage(address)
    expect(response).toEqual(expectedResponse)
  })

  it('should throw exception on a signature message fails', async () => {
    const address = '0x0000000000000000000000000000000000000000'

    nock(api.url).get(`/auth/${address}/message`).reply(500)

    await expect(api.signatureMessage(address)).rejects.toThrow(UnexpectedException)
  })

  it('should validate a message', async () => {
    const address = '0x0000000000000000000000000000000000000000'
    const signature = 'testSignature'
    const expectedResponse: ValidateMessageResponse = { token: tokenAuth }

    nock(api.url).post(`/auth/${address}/validate`, { signature }).reply(200, expectedResponse)

    const response = await api.validateMessage(address, signature)
    expect(response).toEqual(expectedResponse)
  })
  it('should throw exception on a validate message fails', async () => {
    const address = '0x0000000000000000000000000000000000000000'
    const signature = 'testSignature'

    nock(api.url).post(`/auth/${address}/validate`, { signature }).reply(500)

    await expect(api.validateMessage(address, signature)).rejects.toThrow(InvalidSignatureException)
  })

  it('should fetch a borrow signature', async () => {
    const params: ActionRequest = {
      loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId' }]
    }
    const expectedResponse = { signature: { v: 1, r: 'testR', s: 'testS', deadline: 123456789 } }

    nock(api.url)
      .post('/signature/loan/borrow', params)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(200, expectedResponse)

    const response = await api.borrowSignature(tokenAuth, params)
    expect(response).toEqual(expectedResponse)
  })

  it('should fetch a sellNow signature', async () => {
    const params: SellNowRequest = {
      // loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
      nft: { collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId' }
    }
    const expectedResponse = { signature: { v: 1, r: 'testR', s: 'testS', deadline: 123456789 } }

    nock(api.url)
      .post('/signature/sellnow', params)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(200, expectedResponse)

    const response = await api.sellNowSignature(tokenAuth, params)
    expect(response).toEqual(expectedResponse)
  })
  it('should fetch a market signature', async () => {
    const params: MarketRequest = { collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId' }
    const expectedResponse = { signature: { v: 1, r: 'testR', s: 'testS', deadline: 123456789 } }

    nock(api.url)
      .post('/signature/market', params)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(200, expectedResponse)

    const response = await api.marketSignature(tokenAuth, params)
    expect(response).toEqual(expectedResponse)
  })

  it('should fetch a repay signature', async () => {
    const params: ActionRequest = {
      loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId' }]
    }
    const expectedResponse = { signature: { v: 2, r: 'testR2', s: 'testS2', deadline: 987654321 } }

    nock(api.url)
      .post('/signature/loan/repay', params)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(200, expectedResponse)

    const response = await api.repaySignature(tokenAuth, params)
    expect(response).toEqual(expectedResponse)
  })

  it('should fetch a prices', async () => {
    const params = {
      nfts: [
        {
          collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358',
          tokenId: '10',
          underlyingAsset: '0x7b79995e5f793a07bc00c21412e50ecae098e7f9'
        }
      ]
    }
    const expectedResponse = {
      result: [
        {
          collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358',
          tokenId: '10',
          valuation: '300000000000000000',
          ltv: '3000',
          liquidationThreshold: 8500
        }
      ]
    }

    nock(api.url).post('/prices', params).reply(200, expectedResponse)

    const response = await api.prices(params.nfts)
    expect(response).toEqual(expectedResponse.result)
  })
  it('should handle an unauthorized exception when the request fails with 401 status', async () => {
    const params: ActionRequest = {
      loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId' }]
    }

    nock(api['url'])
      .post('/signature/loan/borrow', params)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(401)

    await expect(api.borrowSignature(tokenAuth, params)).rejects.toThrow(UnauthorizedException)
  })

  it('should handle an unexpected exception when the request fails with 500 status', async () => {
    const params: ActionRequest = {
      loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId' }]
    }

    nock(api['url'])
      .post('/signature/loan/borrow', params)
      .matchHeader('Authorization', `Bearer ${tokenAuth}`)
      .reply(500)

    await expect(api.borrowSignature(tokenAuth, params)).rejects.toThrow(UnexpectedException)
  })

  it('should handle an unexpected exception when the request fails with an unknown status', async () => {
    const params: ActionRequest = {
      loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId' }]
    }

    nock(api['url'])
      .post('/signature/loan/borrow', params)
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
