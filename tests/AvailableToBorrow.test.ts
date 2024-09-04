import { availableToBorrow } from '../src/availableToBorrow'

const oneEth = BigInt(1e18)

describe('MultipleLtv', () => {
  it('Should return valid values', async () => {
    const nfts = [
      {
        valuation: BigInt(100) * oneEth,
        ltv: 5000n
      },
      {
        valuation: BigInt(50) * oneEth,
        ltv: 3000n
      }
    ]

    const result = availableToBorrow(nfts)

    expect(result.ltv.toString()).toEqual('4333')
    expect(result.valuation.toString()).toEqual((BigInt(150) * oneEth).toString())
    expect(result.availableToBorrow.toString()).toEqual((BigInt(65) * oneEth).toString())
  })

  it('Should throw an error if ltv is out of range', async () => {
    const nfts = [
      {
        valuation: BigInt(100) * oneEth,
        ltv: 5000n
      },
      {
        valuation: BigInt(50) * oneEth,
        ltv: 8000n
      }
    ]
    expect(() => availableToBorrow(nfts)).toThrow('LTV 8000 is not within the allowed range of 1000 to 7500')
  })

  it('Should throw an error if no NFTs are provided', async () => {
    const nfts: any = []
    expect(() => availableToBorrow(nfts)).toThrow(
      'Invalid input: At least one NFT is required to calculate borrow values.'
    )
  })
})
