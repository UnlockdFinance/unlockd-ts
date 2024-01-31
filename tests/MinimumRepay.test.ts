import {minimumToRepay} from "../src/minimumToRepay";

const oneEth = BigInt(1e18)

describe('MinimumRepay', () => {
    it('Should work for two assets with debt == available to borrow', async () => {
        const params = {
            initialLoans: [
                {
                    valuation: BigInt(50) * oneEth,
                    ltv: BigInt(7000),
                },
                {
                    valuation: BigInt(100) * oneEth,
                    ltv: BigInt(4000),
                },
            ],
            indicesToDelete: [1],
            totalDebt: BigInt(75) * oneEth,
        }
        const result = minimumToRepay(params)
        expect(result).toEqual(BigInt(40)*oneEth)
    })

    it('Should work for five assets deleting two of them',async () => {
        const params = {
            initialLoans: [
                {
                    valuation: BigInt(50) * oneEth,
                    ltv: BigInt(1000),
                },
                {
                    valuation: BigInt(100) * oneEth,
                    ltv: BigInt(4000),
                },
                {
                    valuation: BigInt(70) * oneEth,
                    ltv: BigInt(2000),
                },
                {
                    valuation: BigInt(5) * oneEth,
                    ltv: BigInt(7500),
                },
                {
                    valuation: BigInt(2) * oneEth,
                    ltv: BigInt(6000),
                },
            ],
            indicesToDelete: [0,1,2],
            totalDebt: (BigInt(6145) * oneEth) / BigInt(100),
        }
        const result = minimumToRepay(params)
        expect(result).toEqual(BigInt(5650)*oneEth / BigInt(100))
    })

    it('Should work when repay<0 ==> repay=0', async () => {
        const params = {
            initialLoans: [
                {
                    valuation: 10000000n,
                    ltv: 5000n,
                },
                {
                    valuation: 10000000n,
                    ltv: 5000n,
                },
            ],
            indicesToDelete: [1],
            totalDebt: 2n,
        }
        const result = minimumToRepay(params)
        expect(result).toEqual(BigInt(0))
    })

    it('Should work for auction', async () => {
        const params = {
            initialLoans: [
                {
                    valuation: BigInt(85) * oneEth,
                    ltv: 7500n,
                },
            ],
            indicesToDelete: [],
            totalDebt: 75n * oneEth,
            auction: true,
            liquidationThreshold: 8500n,
        }
        const result = minimumToRepay(params)
        expect(result).toEqual(2750000000000000000n)
    })
});
