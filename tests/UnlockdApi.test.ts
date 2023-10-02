import nock from 'nock'
import { environment, UnlockdApi } from '../src'
import { SignatureMessageResponse, ValidateMessageResponse } from '../src/types/responses'
import { ActionRequest } from '../src/types/requests'

describe('UnlockdApi', () => {
  let api: UnlockdApi

  beforeAll(() => {
    // Initialize the UnlockdApi instance before running tests
    api = new UnlockdApi(environment.TEST)
  })

  afterEach(() => {
    // Clean up any nock mocks after each test
    nock.cleanAll()
  })

  it('should fetch a signature message', async () => {
    const address = '0x0000000000000000000000000000000000000000'
    const expectedResponse: SignatureMessageResponse = { message: 'Test message' }

    // Mock the GET request to fetch a signature message
    nock(api.url).get(`/auth/${address}/message`).reply(200, expectedResponse)

    const response = await api.signatureMessage(address)
    expect(response).toEqual(expectedResponse)
  })

  it('should validate a message', async () => {
    const address = '0x0000000000000000000000000000000000000000'
    const signature = 'testSignature'
    const expectedResponse: ValidateMessageResponse = { token: 'Test token' }

    // Mock the POST request to validate a message
    nock(api.url).post(`/auth/${address}/validate`, { signature }).reply(200, expectedResponse)

    const response = await api.validateMessage(address, signature)
    expect(response).toEqual(expectedResponse)
  })

  it('should fetch a borrow signature', async () => {
    const params: ActionRequest = {
      loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId' }]
    }
    const expectedResponse = { signature: { v: 1, r: 'testR', s: 'testS', deadline: 123456789 } }

    // Mock the POST request to fetch a borrow signature
    nock(api.url)
      .post('/signature/loan/borrow', params)
      .matchHeader('Authorization', 'Bearer authToken')
      .reply(200, expectedResponse)

    const response = await api.borrowSignature('authToken', params)
    expect(response).toEqual(expectedResponse)
  })

  it('should fetch a repay signature', async () => {
    const params: ActionRequest = {
      loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId' }]
    }
    const expectedResponse = { signature: { v: 2, r: 'testR2', s: 'testS2', deadline: 987654321 } }

    // Mock the POST request to fetch a repay signature
    nock(api.url)
      .post('/signature/loan/repay', params)
      .matchHeader('Authorization', 'Bearer authToken')
      .reply(200, expectedResponse)

    const response = await api.repaySignature('authToken', params)
    expect(response).toEqual(expectedResponse)
  })
})
