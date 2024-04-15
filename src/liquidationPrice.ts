export type LiquitationPriceProps = {
  debt: bigint
  liquidationThreshold: bigint
}

/**
 * @returns The liquidation price for a given debt and liquidation threshold.
 * @param params - The debt and liquidation threshold.
 * @example
 * Returns 58823529411764705882n:
 * ```ts
 * const oneEth = BigInt(1e18)
 * const params = {
 *          debt: (BigInt(50) * oneEth),
 *          liquidationThreshold: BigInt(8500)
 *      }
 * const result = liquidationPrice(params)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const liquidationPrice = (params: LiquitationPriceProps): BigInt => {
  if (params.liquidationThreshold <= 0n || params.debt <= 0n) return 0n
  return (params.debt * BigInt(10000)) / params.liquidationThreshold
}
