import { Address } from 'viem'

export type Nft = {
  collection: Address
  tokenId: bigint
}
export type ActionRequest = {
  loanId?: string
  nfts: Array<Nft>
  underlyingAsset?: Address
}

export type SellNowRequest = {
  loanId?: string
  nft: Nft
}
export type BuyNowRequest = {
  underlyingAsset: Address
  nft: Nft
}

export type MarketRequest = Nft
