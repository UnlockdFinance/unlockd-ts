export type LiquidationPriceProps = {
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
export const liquidationPrice = (params: LiquidationPriceProps): BigInt => {
  const { debt, liquidationThreshold } = params

  if (liquidationThreshold <= 0n || debt <= 0n) return 0n

  return (debt * BigInt(10000)) / liquidationThreshold
}
