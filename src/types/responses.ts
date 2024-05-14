export type SignatureMessageResponse = {
  message: string
}
export type ValidateMessageResponse = {
  token: string
}

export type Signature = {
  data: object
  signature: { v: number; r: string; s: string; deadline: number }
}

export type PricesResponse = {
  collection: string
  tokenId: string
  valuation: string
  ltv: string
  liquidationThreshold: number
}
