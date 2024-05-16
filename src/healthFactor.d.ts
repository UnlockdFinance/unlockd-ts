export type HealthFactorVariations = {
    debt?: bigint;
    collateral?: bigint;
};
export type HealthFactorParams = {
    collateral: bigint;
    debt: bigint;
    liquidationThreshold: bigint;
    variations?: HealthFactorVariations;
};
/**
 * @returns The health factor for a given collateral, debt and liquidation threshold.
 * @param {HealthFactorParams} params - The collateral, debt and liquidation threshold.
 * @example
 * Returns 17000, this is equals as 1.7:
 * ```ts
 * const oneEth = BigInt(1e18)
 * const params = {
 *         collateral: (BigInt(100) * oneEth),
 *         debt: (BigInt(50) * oneEth),
 *         liquidationThreshold: BigInt(8500)
 *         }
 * const result = healthFactor(params)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export declare const healthFactor: (params: HealthFactorParams) => BigInt;
