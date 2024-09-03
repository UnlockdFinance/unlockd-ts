import { AxiosError, HttpStatusCode } from 'axios'

export class InvalidAddressFormat extends Error {}

export class InvalidActionRequestParams extends Error {}

export class InvalidSellNowRequestParams extends Error {}

export class InvalidMarketRequestParams extends Error {}

export class InvalidPricesRequestParams extends Error {}
export class InvalidSignatureException extends Error {}

export class UnexpectedException extends Error {}

export class UnauthorizedException extends Error {}

export const mapAxiosException = (error: AxiosError) => {
  switch (error.response!.status) {
    case HttpStatusCode.Unauthorized:
      throw new UnauthorizedException()
    case HttpStatusCode.InternalServerError:
      throw new UnexpectedException(error.message)
    default:
      throw new UnexpectedException()
  }
}

export class BaseError extends Error {
  isCritical: boolean
  isUserFacing: boolean
  faultyParams?: string[] | undefined

  override name = 'UnlockdSdkError'
  constructor(message: string) {
    super()
    this.message = message || 'An error occurred.'
    this.isCritical = false
    this.isUserFacing = false
  }
}

export class InvalidProviderError extends BaseError {
  override name = 'InvalidProviderError'
  constructor() {
    super('Invalid provider. Ensure the provider follows the EIP-1193 standard with a `request` method.')
    this.faultyParams = ['provider']
    this.isCritical = true
  }
}

export class InvalidChainGenericError extends BaseError {
  override name = 'InvalidChainGenericError'
  constructor() {
    super('Invalid chain options. Check network, chainId, and chain settings.')
    this.faultyParams = ['network', 'chainId', 'chain']
    this.isCritical = true
  }
}

export class InvalidChainOptionError extends BaseError {
  override name = 'InvalidChainOptionError'
  constructor() {
    super('Only one of network, chain, or chainId should be defined.')
    this.faultyParams = ['network', 'chainId', 'chain']
    this.isUserFacing = true
    this.isCritical = true
  }
}

export class UnsupportedChainError extends BaseError {
  override name = 'UnsupportedChainError'
  constructor(message: string, param: string) {
    super(message)
    this.faultyParams = [param]
    this.isUserFacing = true
  }
}
