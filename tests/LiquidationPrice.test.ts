import {liquidationPrice} from "../src";

const oneEth = BigInt(1e18)

describe('LiquidationPrice', () => {
    it('Should return valid values', async () => {
        const params = {
            debt: (BigInt(50) * oneEth),
            liquidationThreshold: BigInt(8500)
        }
        const result = liquidationPrice(params)
        expect(result).toEqual(58823529411764705882n)
    })

    it('Should return 0 as debt is 0', async () => {
        const params = {
            debt: (BigInt(0) * oneEth),
            liquidationThreshold: BigInt(8500)
        }
        const result = liquidationPrice(params)
        expect(result).toEqual(0n)
    })

    it('Should return 0 as liqThreshold cannot be =< 0', async () => {
        const params = {
            debt: (BigInt(10) * oneEth),
            liquidationThreshold: BigInt(0)
        }
        const result = liquidationPrice(params)
        expect(result).toEqual(0n)
    })

    it('Debt is 1*10-0 eth', async () => {
        const params = {
            debt: (BigInt(1)*oneEth),
            liquidationThreshold: BigInt(8500)
        }
        const result = liquidationPrice(params)
        expect(result).toEqual(1176470588235294117n)
    })

    it('Debt is 1*10-1 eth', async () => {
        const params = {
            debt: (BigInt(1)*oneEth/10n),
            liquidationThreshold: BigInt(8500)
        }
        const result = liquidationPrice(params)
        expect(result).toEqual(117647058823529411n)
    })

    it('Debt is 1*10-2 eth', async () => {
        const params = {
            debt: (BigInt(1)*oneEth/100n),
            liquidationThreshold: BigInt(8500)
        }
        const result = liquidationPrice(params)
        expect(result).toEqual(11764705882352941n)
    })

    it('Debt is 1*10-4 eth', async () => {
        const params = {
            debt: (BigInt(1)*oneEth/BigInt(1e4)),
            liquidationThreshold: BigInt(8500)
        }
        const result = liquidationPrice(params)
        expect(result).toEqual(117647058823529n)
    })

    it('Debt is 1*10-8 eth', async () => {
        const params = {
            debt: (BigInt(1)*oneEth/BigInt(1e8)),
            liquidationThreshold: BigInt(8500)
        }
        const result = liquidationPrice(params)
        expect(result).toEqual(11764705882n)
    })

    it('Debt is 1*10-10 eth', async () => {
        const params = {
            debt: (BigInt(1)*oneEth/BigInt(1e10)),
            liquidationThreshold: BigInt(8500)
        }
        const result = liquidationPrice(params)
        expect(result).toEqual(117647058n)
    })

    it('Debt is 1*10-18 eth', async () => {
        const params = {
            debt: (BigInt(1)*oneEth/BigInt(1e18)),
            liquidationThreshold: BigInt(8500)
        }
        const result = liquidationPrice(params)
        expect(result).toEqual(1n)
    })
})
