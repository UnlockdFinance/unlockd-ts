export type NFTValuation = {
    valuation: string;
    ltv: string;
};
export type BorrowValues = {
    ltv: string;
    valuation: string;
    availableToBorrow: string;
};
export declare const MIN_LTV = "1000";
export declare const MAX_LTV = "7500";
/**
 *  @returns The total valuation, ltv, and available to borrow for a given array of NFTs.
 *  @param {Array<NFTValuation>} nfts - The NFTs to calculate the values for.
 *  @example
 *  ```ts
 *  const nfts = [
 *    {
 *      valuation: (BigInt(100) * oneEth).toString(),
 *      ltv: '5000'
 *    },
 *    {
 *      valuation: (BigInt(50) * oneEth).toString(),
 *      ltv: '3000'
 *    }
 *  ]
 *
 *  const result = availableToBorrow(nfts)
 *  ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export declare const availableToBorrow: (nfts: Array<NFTValuation>) => BorrowValues;
