export type SignatureMessageResponse = {
  message: string
}
export type ValidateMessageResponse = {
  token: string
}

export type PricesResponse = {
  collection: string
  tokenId: string
  valuation: string
  ltv: string
  liquidationThreshold: number
}

export type SignatureLoanConfig = {
  loanId: string
  aggLoanPrice: string
  aggLtv: number
  aggLiquidationThreshold: number
  totalAssets: number
  nonce: number
  deadline: number
}

export type Action = {
  loan: SignatureLoanConfig
  assets: string[]
  underlyingAsset: string
  deadline: number
  nonce: number
}

export type Auction = {
  loan: SignatureLoanConfig
  assets: string[]
  assetPrice: string
  assetLtv: string
  endTime: number
  deadline: number
  nonce: number
}
export type Market = {
  loan: SignatureLoanConfig
  assetId: string
  collection: string
  tokenId: string
  assetPrice: string
  assetLtv: number
  deadline: number
  nonce: number
}
export type SellNow = {
  loan: SignatureLoanConfig
  assetId: string
  // approval
  marketAdapter: string
  marketApproval: string
  marketPrice: string
  underlyingAsset: string
  // sell data
  from: string
  to: string
  data: string
  value: number

  //signature
  deadline: number
  nonce: number
}
export type BuyNow = {
  asset: {
    assetId: string
    collection: string
    tokenId: string
    price: string
    nonce: number
    deadline: number
  }
  assetLtv: string
  assetLiquidationThreshold: number
  //tx Data
  from: string
  to: string
  data: string
  value: string
  //Configuration
  marketAdapter: string
  marketApproval: string
  marketPrice: string
  underlyingAsset: string
  //signature
  deadline: number
  nonce: number
}
export type Signature<T> = {
  data: T
  signature: { v: number; r: string; s: string; deadline: number }
}
