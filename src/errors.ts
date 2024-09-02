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
  override name = 'UnlockdSdkError'

  constructor(shortMessage: string) {
    super()

    this.message = shortMessage || 'An error occurred.'
  }
}

export class InvalidChainOptionError extends BaseError {
  override name = 'InvalidChainOptionError'
  constructor() {
    super('Only one of network, chain, or chainId should be defined.')
  }
}
