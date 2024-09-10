import { Address } from 'viem'

export type Nft = {
  collection: Address
  tokenId: bigint
}

export type SafeNft = {
  collection: Address
  tokenId: string
}

export type ActionRequest = {
  loanId?: Address
  nfts: Nft[]
  underlyingAsset?: Address
}

export type SafeActionRequest = {
  loanId?: Address
  nfts: SafeNft[]
  underlyingAsset?: Address
}

export type SellNowRequest = {
  loanId?: Address
  nft: Nft
}

export type SafeSellNowRequest = {
  loanId?: Address
  nft: SafeNft
}

export type BuyNowRequest = {
  underlyingAsset: Address
  nft: Nft
}

export type SafeBuyNowRequest = {
  underlyingAsset: Address
  nft: SafeNft
}

export type PricesRequest = {
  nfts: (Nft & { underlyingAsset: Address })[]
}

export type SafePricesRequest = {
  nfts: (SafeNft & { underlyingAsset: Address })[]
}

export type MarketRequest = Nft
export type SafeMarketRequest = SafeNft

export type Asset = {
  contractAddress: Address
  amount: bigint
}
