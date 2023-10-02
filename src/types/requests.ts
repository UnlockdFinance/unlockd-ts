export type Nft = {
  collection: string
  tokenId: string
}
export type ActionRequest = {
  loanId: string
  nfts: Array<Nft>
}
