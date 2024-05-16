import { ActionRequest, MarketRequest, SellNowRequest } from './types/requests';
export declare const validateAddress: (address: string) => void;
export declare const validateBorrow: (body: ActionRequest) => void;
export declare const validateRepay: (body: ActionRequest) => void;
export declare const validateSellNow: (body: SellNowRequest) => void;
export declare const validateBuyNow: (body: SellNowRequest) => void;
export declare const validateMarket: (body: MarketRequest) => void;
export declare const validatePrices: (body: {
    nfts: {
        collection: string;
        tokenId: string;
        underlyingAsset: string;
    }[];
}) => void;
