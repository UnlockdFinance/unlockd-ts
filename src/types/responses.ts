import { Address } from 'viem'

export type SignatureMessageResponse = {
  message: string
}
export type ValidateMessageResponse = {
  token: string
}

export type PricesResponse = {
  collection: Address
  tokenId: bigint
  valuation: bigint
  ltv: bigint
  liquidationThreshold: bigint
}

type SignatureLoanConfig = SignatureOptions & {
  loanId: Address
  aggLoanPrice: bigint
  aggLtv: bigint
  aggLiquidationThreshold: bigint
  totalAssets: bigint
}

export type Action = SignatureOptions & {
  loan: SignatureLoanConfig
  assets: Address[]
  underlyingAsset: Address
}

export type Auction = SignatureOptions & {
  loan: SignatureLoanConfig
  assets: Address[]
  assetPrice: bigint
  assetLtv: bigint
  endTime: number
}

export type Market = SignatureOptions & {
  loan: SignatureLoanConfig
  assetId: Address
  collection: Address
  tokenId: bigint
  assetPrice: bigint
  assetLtv: bigint
}

export type SellNow = TransactionData &
  Configuration &
  SignatureOptions & {
    loan: SignatureLoanConfig
    assetId: Address
  }

export type BuyNow = TransactionData &
  Configuration &
  SignatureOptions & {
    asset: {
      assetId: Address
      collection: Address
      tokenId: bigint
      price: bigint
      nonce: bigint
      deadline: bigint
    }
    assetLtv: bigint
    assetLiquidationThreshold: bigint
  }

type TransactionData = {
  from: Address
  to: Address
  data: Address
  value: bigint
}

type Configuration = {
  marketAdapter: Address
  marketApproval: Address
  marketPrice: bigint
  underlyingAsset: Address
}

type SignatureOptions = {
  deadline: bigint
  nonce: bigint
}

export type Signature<T> = {
  data: T
  signature: { v: number; r: Address; s: Address; deadline: bigint }
}
