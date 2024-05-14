import { validateAddress, validateBorrow, validateMarket, validateRepay, validateSellNow } from '../src/validations'
import {
  InvalidActionRequestParams,
  InvalidAddressFormat,
  InvalidMarketRequestParams,
  InvalidSellNowRequestParams
} from '../src/errors'

describe('validateAddress', () => {
  it('should not throw for a valid address', () => {
    const validAddress = '0x1234567890abcdefABCDEF1234567890abcdefAB'
    expect(() => validateAddress(validAddress)).not.toThrow()
  })

  it('should throw InvalidAddressFormat for an invalid address', () => {
    const invalidAddress = 'invalid-address'
    expect(() => validateAddress(invalidAddress)).toThrow(InvalidAddressFormat)
  })
})

describe('validateBorrow', () => {
  it('should not throw for a valid borrow request', () => {
    const validBorrowRequest = {
      loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: '123' }]
    }
    expect(() => validateBorrow(validBorrowRequest)).not.toThrow()
  })

  it('should throw InvalidActionRequestParams for an invalid borrow request', () => {
    const invalidBorrowRequest = {
      loanId: 'invalid-loan-id',
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: '123' }]
    }
    expect(() => validateBorrow(invalidBorrowRequest)).toThrow(InvalidActionRequestParams)
  })
})

describe('validateRepay', () => {
  it('should not throw for a valid repay request', () => {
    const validRepayRequest = {
      loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: '123' }]
    }
    expect(() => validateRepay(validRepayRequest)).not.toThrow()
  })

  it('should throw InvalidActionRequestParams for an invalid repay request', () => {
    const invalidRepayRequest = {
      loanId: 'invalid-loan-id',
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: '123' }]
    }
    expect(() => validateRepay(invalidRepayRequest)).toThrow(InvalidActionRequestParams)
  })
})

describe('validateSellNow', () => {
  it('should not throw for a valid repay request', () => {
    const request = {
      loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
      nft: { collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: '123' }
    }
    expect(() => validateSellNow(request)).not.toThrow()
  })

  it('should throw InvalidActionRequestParams for an invalid repay request', () => {
    const request = {
      loanId: 'invalid-loan-id',
      nft: { collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: '123' }
    }
    expect(() => validateSellNow(request)).toThrow(InvalidSellNowRequestParams)
  })
})
describe('validateMarket', () => {
  it('should not throw for a valid repay request', () => {
    const request = { collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: '123' }
    expect(() => validateMarket(request)).not.toThrow()
  })

  it('should throw InvalidActionRequestParams for an invalid repay request', () => {
    const request = { collection: '0x1234567890abcdefABCDEF1234567890abcdefAB123', tokenId: '123' }
    expect(() => validateMarket(request)).toThrow(InvalidMarketRequestParams)
  })
})
