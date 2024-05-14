import { availableToBorrow } from '../src/availableToBorrow'

const oneEth = BigInt(1e18)

describe('MultipleLtv', () => {
  it('Should return valid values', async () => {
    const nfts = [
      {
        valuation: (BigInt(100) * oneEth).toString(),
        ltv: '5000'
      },
      {
        valuation: (BigInt(50) * oneEth).toString(),
        ltv: '3000'
      }
    ]

    const result = availableToBorrow(nfts)

    expect(result.ltv).toEqual('4333')
    expect(result.valuation).toEqual((BigInt(150) * oneEth).toString())
    expect(result.availableToBorrow).toEqual((BigInt(65) * oneEth).toString())
  })

  it('Should throw an error if ltv is out of range', async () => {
    const nfts = [
      {
        valuation: (BigInt(100) * oneEth).toString(),
        ltv: '5000'
      },
      {
        valuation: (BigInt(50) * oneEth).toString(),
        ltv: '8000'
      }
    ]
    expect(() => availableToBorrow(nfts)).toThrow('LTV 8000 is not within the allowed range of 1000 to 7500')
  })

  it('Should throw an error if no NFTs are provided', async () => {
    const nfts: any = []
    expect(() => availableToBorrow(nfts)).toThrow('Must provide at least one NFT')
  })
})
