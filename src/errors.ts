import { AxiosError, HttpStatusCode } from 'axios'

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

// Generic error
export class UnexpectedException extends BaseError {
  override name = 'UnexpectedException'
  constructor(message: string) {
    super(message)
    this.isUserFacing = true
  }
}

// Validation errors
export class InvalidAddressFormat extends BaseError {
  override name = 'InvalidAddressFormat'
  constructor(address: string) {
    super(`Invalid address format: ${address}`)
    this.faultyParams = ['address']
    this.isUserFacing = true
  }
}

export class InvalidRequestParams extends BaseError {
  override name = 'InvalidRequestParams'
  constructor(message: string) {
    super(`Invalid request parameters: ${message}`)
    this.faultyParams = ['params']
    this.isUserFacing = true
  }
}

// Authorization errors
export class InvalidSignatureException extends BaseError {
  override name = 'InvalidSignatureException'
  constructor() {
    super('Invalid signature. Please check the format and ensure it meets the required standards.')
    this.faultyParams = ['signature']
    this.isUserFacing = true
  }
}

export class UnauthorizedException extends BaseError {
  override name = 'UnauthorizedException'
  constructor() {
    super('Unauthorized access: Invalid or missing authentication token.')
    this.faultyParams = ['tokenAuth']
    this.isUserFacing = true
  }
}

// Request errors
export const mapAxiosException = (error: AxiosError) => {
  switch (error.response?.status) {
    case HttpStatusCode.Unauthorized:
      throw new UnauthorizedException()
    case HttpStatusCode.InternalServerError:
      throw new UnexpectedException(error.message)
    default:
      throw new UnexpectedException('Unexpected error')
  }
}

// Contract errors
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

// Calculations errors
export class InvalidInputError extends BaseError {
  override name = 'InvalidInputError'
  constructor(message: string, param: string) {
    super(message)
    this.faultyParams = [param]
    this.isCritical = true
  }
}

export class InvalidLTVError extends BaseError {
  override name = 'InvalidLTVError'
  constructor(message: string) {
    super(message)
    this.isUserFacing = true
  }
}

// Subgraph error
export class SubgraphCriticalError extends BaseError {
  override name = 'SubgraphCriticalError'
  constructor(message: string) {
    super(
      `Unlockd Subgraph returned invalid data: ${message}. Please contact the Unlockd team if the problem persists.`
    )
    this.isCritical = true
  }
}

export class SubgraphMissingClient extends BaseError {
  override name = 'SubgraphMissingClient'
  constructor() {
    super('Unlockd Subgraph not available due to HTTP client missing.')
    this.isCritical = true
  }
}
