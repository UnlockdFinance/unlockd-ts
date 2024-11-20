import { Address } from 'viem'

export type Nft = {
  collection: Address
  tokenId: bigint
}
export type ERC20 = {
  contractAddress: Address
  amount: bigint
}
export type Asset = ERC20 | Nft

export type ActionRequest = {
  loanId?: Address
  nfts: Nft[]
  underlyingAsset?: Address
}

export type SellNowRequest = {
  loanId?: Address
  nft: Nft
}

export type BuyNowRequest = {
  underlyingAsset: Address
  nft: Nft
}

export type PricesRequest = {
  nfts: (Nft & { underlyingAsset: Address })[]
}

export type MarketRequest = Nft

export type AuctionRequest = {
  loanId: Address
  nft: Nft
}

export type RedeemRequest = {
  loanId: Address
}

/**
 * Safe types for api requests (convert bigint to string etc)
 */

export type SafeNft = {
  collection: Address
  tokenId: string
}
export type SafeAsset = {
  contractAddress: Address
  amount: string
}
export type SafeActionRequest = {
  loanId?: Address
  nfts: SafeNft[]
  underlyingAsset?: Address
}
export type SafeSellNowRequest = {
  loanId?: Address
  nft: SafeNft
}
export type SafeBuyNowRequest = {
  underlyingAsset: Address
  nft: SafeNft
}
export type SafePricesRequest = {
  nfts: (SafeNft & { underlyingAsset: Address })[]
}
export type SafeMarketRequest = SafeNft

export type SafeAuctionRequest = {
  loanId: Address
  nft: SafeNft
}

export type SafeRedeemRequest = {
  loanId: Address
}
