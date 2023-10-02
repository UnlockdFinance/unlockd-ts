import { validateAddress, validateBorrow, validateRepay } from './validations'
import { Signature, SignatureMessageResponse, ValidateMessageResponse } from './types/responses'
import { ActionRequest } from './types/requests'
import axios from 'axios'

export enum environment {
  TEST,
  PRODUCTION,
  STAGING
}

export class UnlockdApi {
  public readonly url

  constructor(private env = environment.PRODUCTION) {
    switch (this.env) {
      case environment.TEST:
        this.url = 'https://api.example.com'
        break
      case environment.STAGING:
        this.url = 'https://api-sepolia-sdk.unlockd.finance'
        break
      case environment.PRODUCTION:
        this.url = 'https://api-sepolia-sdk.unlockd.finance'
        break
      default:
        this.url = 'https://api-sepolia-sdk.unlockd.finance'
        break
    }
  }

  async signatureMessage(address: string): Promise<SignatureMessageResponse> {
    validateAddress(address)
    const response = await axios.get(`${this.url}/auth/${address}/message`)
    return response.data
  }

  async validateMessage(address: string, signature: string): Promise<ValidateMessageResponse> {
    validateAddress(address)
    const response = await axios.post(`${this.url}/auth/${address}/validate`, { signature })
    return response.data
  }

  async borrowSignature(tokenAuth: string, params: ActionRequest): Promise<Signature> {
    validateBorrow(params)
    const response = await axios.post(`${this.url}/signature/loan/borrow`, params, {
      headers: {
        Authorization: `Bearer ${tokenAuth}`
      }
    })
    return response.data
  }

  async repaySignature(tokenAuth: string, params: ActionRequest): Promise<Signature> {
    validateRepay(params)
    const response = await axios.post(`${this.url}/signature/loan/repay`, params, {
      headers: {
        Authorization: `Bearer ${tokenAuth}`
      }
    })
    return response.data
  }
}
