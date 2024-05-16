import { Nft } from './requests';
export declare enum OrderTypes {
    ASC = "ASC",
    DESC = "DESC",
    NONE = "none"
}
export type Order = {
    id: string;
    type: OrderType;
    assetId: string;
    nft: Nft;
    loan: {
        id: string;
        underlyingAsset: string;
        nfts: Array<Nft & {
            isOnAuction?: boolean;
        }>;
    };
    owner: string;
    bids: Array<Bid>;
    endTime: number;
};
export type Bid = {
    bidAmount: string;
    bidder: string;
    amountOfDebt: string;
    amountToPay: string;
};
export declare enum OrderType {
    TYPE_LIQUIDATION_AUCTION = "0",
    TYPE_AUCTION = "1",
    TYPE_FIXED_PRICE = "2",
    TYPE_FIXED_PRICE_AND_AUCTION = "3"
}
