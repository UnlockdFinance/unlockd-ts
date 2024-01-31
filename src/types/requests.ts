export type Nft = {
  collection: string
  tokenId: string
}
export type ActionRequest = {
  loanId: string
  nfts: Array<Nft>
}

export type SellNowRequest = {
  loanId?: string
  nft: Nft
}

export type MarketRequest = Nft
