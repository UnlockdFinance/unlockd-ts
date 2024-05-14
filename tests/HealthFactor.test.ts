import { healthFactor } from '../src'

const oneEth = BigInt(1e18)

describe('HealthFactor', () => {
  it('Should return valid values', async () => {
    const params = {
      collateral: BigInt(100) * oneEth,
      debt: BigInt(50) * oneEth,
      liquidationThreshold: BigInt(8500)
    }
    const result = healthFactor(params)
    expect(result).toEqual(BigInt(17000)) // 1.7
  })

  it('Should work with positive collateral variation', async () => {
    const params = {
      collateral: BigInt(100) * oneEth,
      debt: BigInt(50) * oneEth,
      liquidationThreshold: BigInt(8500),
      variations: {
        collateral: BigInt(10) * oneEth,
        debt: BigInt(0)
      }
    }
    const result = healthFactor(params)
    expect(result).toEqual(BigInt(18700))
  })

  it('Should work with negative collateral variation', async () => {
    const params = {
      collateral: BigInt(100) * oneEth,
      debt: BigInt(50) * oneEth,
      liquidationThreshold: BigInt(8500),
      variations: {
        collateral: -BigInt(10) * oneEth,
        debt: BigInt(0)
      }
    }
    const result = healthFactor(params)
    expect(result).toEqual(BigInt(15300))
  })

  it('Should work with positive debt variation', async () => {
    const params = {
      collateral: BigInt(100) * oneEth,
      debt: BigInt(50) * oneEth,
      liquidationThreshold: BigInt(8500),
      variations: {
        collateral: BigInt(0),
        debt: BigInt(10) * oneEth
      }
    }
    const result = healthFactor(params)
    expect(result).toEqual(BigInt(14166))
  })

  it('Should work with negative debt variation (repay)', async () => {
    const params = {
      collateral: BigInt(100) * oneEth,
      debt: BigInt(50) * oneEth,
      liquidationThreshold: BigInt(8500),
      variations: {
        collateral: BigInt(0),
        debt: -BigInt(10) * oneEth
      }
    }
    const result = healthFactor(params)
    expect(result).toEqual(BigInt(21250))
  })

  it('Should work with fully repaid loan (variation.debt = totalDebt)', async () => {
    const params = {
      collateral: BigInt(100) * oneEth,
      debt: BigInt(50) * oneEth,
      liquidationThreshold: BigInt(8500),
      variations: {
        collateral: BigInt(0),
        debt: -BigInt(50) * oneEth
      }
    }
    const result = healthFactor(params)
    expect(result).toEqual(BigInt(0))
  })

  it('Should work if totalCollateral <= 0', async () => {
    const params = {
      collateral: BigInt(100) * oneEth,
      debt: BigInt(50) * oneEth,
      liquidationThreshold: BigInt(8500),
      variations: {
        collateral: -BigInt(100) * oneEth,
        debt: BigInt(0)
      }
    }
    const result = healthFactor(params)
    expect(result).toEqual(BigInt(0))
  })

  it('Should work if totalCollateral strictly < 0 (cannot happen)', async () => {
    const params = {
      collateral: BigInt(100) * oneEth,
      debt: BigInt(50) * oneEth,
      liquidationThreshold: BigInt(8500),
      variations: {
        collateral: -BigInt(110) * oneEth,
        debt: BigInt(0)
      }
    }
    const result = healthFactor(params)
    expect(result).toEqual(BigInt(0))
  })

  it('Should return 0 if all values are zero', async () => {
    const params = {
      collateral: BigInt(0) * oneEth,
      debt: BigInt(0) * oneEth,
      liquidationThreshold: BigInt(0),
      variations: {
        collateral: -BigInt(0) * oneEth,
        debt: BigInt(0)
      }
    }
    const result = healthFactor(params)
    expect(result).toEqual(BigInt(0))
  })
})
