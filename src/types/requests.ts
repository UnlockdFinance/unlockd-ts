import { Address } from 'viem'

export type Nft = {
  collection: Address
  tokenId: bigint
}

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
  nfts: Nft[]
}

export type MarketRequest = Nft
