import { validateAddress, validateBorrow, validateMarket, validateRepay, validateSellNow } from '../src/validations'
import { InvalidAddressFormat, InvalidRequestParams } from '../src/errors'
import { Address } from 'viem'

describe('validateAddress', () => {
  it('should not throw for a valid address', () => {
    const validAddress = '0x1234567890abcdef1234567890abcdef12345678'
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
      loanId: '0x1234567890abcdef1234567890abcdef12345678' as Address,
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB' as Address, tokenId: 123n }]
    }
    expect(() => validateBorrow(validBorrowRequest)).not.toThrow()
  })

  it('should throw InvalidActionRequestParams for an invalid borrow request', () => {
    const invalidBorrowRequest = {
      loanId: 'invalid-loan-id' as Address,
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB' as Address, tokenId: 123n }]
    }
    expect(() => validateBorrow(invalidBorrowRequest)).toThrow(InvalidRequestParams)
  })
})

describe('validateRepay', () => {
  it('should not throw for a valid repay request', () => {
    const validRepayRequest = {
      loanId: '0x1234567890abcdef1234567890abcdef12345678' as Address,
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB' as Address, tokenId: 123n }]
    }
    expect(() => validateRepay(validRepayRequest)).not.toThrow()
  })

  it('should throw InvalidActionRequestParams for an invalid repay request', () => {
    const invalidRepayRequest = {
      loanId: 'invalid-loan-id' as Address,
      nfts: [{ collection: '0x1234567890abcdefABCDEF1234567890abcdefAB' as Address, tokenId: 123n }]
    }
    expect(() => validateRepay(invalidRepayRequest)).toThrow(InvalidRequestParams)
  })
})

describe('validateSellNow', () => {
  it('should not throw for a valid repay request', () => {
    const request = {
      loanId: '0x1234567890abcdef1234567890abcdef12345678' as Address,
      nft: { collection: '0x1234567890abcdefABCDEF1234567890abcdefAB' as Address, tokenId: 123n }
    }
    expect(() => validateSellNow(request)).not.toThrow()
  })

  it('should throw InvalidActionRequestParams for an invalid repay request', () => {
    const request = {
      loanId: 'invalid-loan-id' as Address,
      nft: { collection: '0x1234567890abcdefABCDEF1234567890abcdefAB' as Address, tokenId: 123n }
    }
    expect(() => validateSellNow(request)).toThrow(InvalidRequestParams)
  })
})
describe('validateMarket', () => {
  it('should not throw for a valid repay request', () => {
    const request = { collection: '0x1234567890abcdefABCDEF1234567890abcdefAB' as Address, tokenId: 123n }
    expect(() => validateMarket(request)).not.toThrow()
  })

  it('should throw InvalidActionRequestParams for an invalid repay request', () => {
    const request = { collection: '0x1234567890abcdefABCDEF1234567890abcdefAB123' as Address, tokenId: 123n }
    expect(() => validateMarket(request)).toThrow(InvalidRequestParams)
  })
})
