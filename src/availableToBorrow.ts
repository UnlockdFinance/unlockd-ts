import { InvalidInputError, InvalidLTVError } from './errors'

export type NFTValuation = {
  valuation: bigint
  ltv: bigint
}

export type BorrowValues = {
  ltv: bigint
  valuation: bigint
  availableToBorrow: bigint
}

export const MIN_LTV = '1000'
export const MAX_LTV = '7500'

/**
 *  @returns The total valuation, ltv, and available to borrow for a given array of NFTs.
 *  @param {NFTValuation[]} nfts - The NFTs to calculate the values for.
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
export const availableToBorrow = (nfts: NFTValuation[]): BorrowValues => {
  if (nfts.length == 0) {
    throw new InvalidInputError('Invalid input: At least one NFT is required to calculate borrow values.', 'nfts')
  }

  let totalValuation = BigInt(0)
  let totalAvailableToBorrow = BigInt(0)

  for (const nftKey in nfts) {
    const nft = nfts[nftKey]
    const ltv = nft.ltv.toString()

    if (parseInt(ltv) > parseInt(MAX_LTV) || parseInt(ltv) < parseInt(MIN_LTV)) {
      throw new InvalidLTVError(`LTV ${ltv} is not within the allowed range of ${MIN_LTV} to ${MAX_LTV}`)
    }

    const valuation = nft.valuation
    totalValuation += BigInt(valuation)
    totalAvailableToBorrow += BigInt(valuation) * BigInt(ltv)
  }

  const totalLtv = totalAvailableToBorrow / totalValuation
  totalAvailableToBorrow /= BigInt('10000')

  return {
    ltv: totalLtv,
    valuation: totalValuation,
    availableToBorrow: totalAvailableToBorrow
  }
}
