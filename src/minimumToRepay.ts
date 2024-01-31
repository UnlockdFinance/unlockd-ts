export const LIQUIDATION_THRESHOLD = BigInt(8500)

export type NFTWithValuation = {
    valuation: bigint,
    ltv: bigint,
}

export type MinimumRepayParams = {
    initialLoans: NFTWithValuation[]
    indicesToDelete: number[]
    totalDebt: bigint
    auction?: boolean
    liquidationThreshold?: bigint
}

/**
 *  @returns The minimum amount of debt to repay for a given array of NFTValuations.
 *  @param {MinimumRepayParams} params - The NFTs to calculate the values for.
 *  @example
 *  Returns 40 eth:
 *  ```ts
 *     const params = {
 *          initialLoans: [
 *              {
 *                  valuation: BigInt(50) * oneEth,
 *                  ltv: BigInt(7000),
 *              },
 *              {
 *                  valuation: BigInt(100) * oneEth,
 *                  ltv: BigInt(4000),
 *              },
 *          ],
 *          indicesToDelete: [1],
 *          totalDebt: BigInt(75) * oneEth,
 *      }
 *     const result = minimumToRepay(params)
 *  ```
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export function minimumToRepay(params: MinimumRepayParams): bigint {
    if (params.initialLoans.length == 0) throw new Error('Must provide at least one loan')
    if (params.indicesToDelete.length == 0 && !params.auction) throw new Error('Must provide at least one index to delete')
    if (params.auction && !params.liquidationThreshold) throw new Error('Must provide liquidation threshold for auction')

    const totalDebt = params.totalDebt

    let totalValuation = BigInt(0)
    let initialAvailableToBorrow = BigInt(0)
    let finalAvailableToBorrow = BigInt(0)

    for (const loan of params.initialLoans) {
        totalValuation += loan.valuation
        initialAvailableToBorrow += loan.valuation * loan.ltv
    }

    if (params.auction) return params.totalDebt - (totalValuation*params.liquidationThreshold!)/BigInt(10000)

    initialAvailableToBorrow = initialAvailableToBorrow / BigInt(10000)

    const finalArray: NFTWithValuation[] = params.initialLoans.filter((_, i) => !params.indicesToDelete.includes(i))

    for (const loan of finalArray) {
        finalAvailableToBorrow += loan.valuation * loan.ltv
    }

    finalAvailableToBorrow = finalAvailableToBorrow / BigInt(10000)

    const minimumRepay = totalDebt - finalAvailableToBorrow

    if(minimumRepay < BigInt(0)) return BigInt(0)
    return minimumRepay
}
