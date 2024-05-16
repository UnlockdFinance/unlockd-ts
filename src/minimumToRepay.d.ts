export declare const LIQUIDATION_THRESHOLD: bigint;
export type NFTWithValuation = {
    valuation: bigint;
    ltv: bigint;
};
export type MinimumRepayParams = {
    initialLoans: NFTWithValuation[];
    indicesToDelete: number[];
    totalDebt: bigint;
    auction?: boolean;
    liquidationThreshold?: bigint;
};
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
export declare function minimumToRepay(params: MinimumRepayParams): bigint;
