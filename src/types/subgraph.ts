import { Nft } from './requests'
export enum OrderTypes {
  ASC = 'ASC',
  DESC = 'DESC',
  NONE = 'none'
}
export type Order = {
  id: string
  type: OrderType
  assetId: string
  nft: Nft
  loan: {
    id: string
    underlyingAsset: string
    nfts: Array<Nft & { isOnAuction?: boolean }>
  }
  owner: string
  bids: Array<Bid>
  endTime: number
}

export type Bid = {
  bidAmount: string
  bidder: string
  amountOfDebt: string
  amountToPay: string
}

export enum OrderType {
  TYPE_LIQUIDATION_AUCTION = '0',
  //Auction with BIDs
  TYPE_AUCTION = '1',
  // Fixed price only buynow function
  TYPE_FIXED_PRICE = '2',
  // Fixed price and auction with bids
  TYPE_FIXED_PRICE_AND_AUCTION = '3'
}
