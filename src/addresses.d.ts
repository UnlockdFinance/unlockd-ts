import { Chain, ClientOptions } from './client';
export declare enum ModuleId {
    Action = 3,
    Auction = 4,
    Market = 5,
    BuyNow = 6,
    SellNow = 7
}
export declare enum ProtocolAddresses {
    WalletRegistry = "walletRegistry",
    WalletFactory = "walletFactory",
    NftBatchTransfer = "nftBatchTransfer"
}
export type Addresses = ModuleId | ProtocolAddresses;
export declare enum Collections {
    Unikura = "unikura",
    WatchesIo = "watchesIo"
}
export declare enum UnderlyingsAsset {
    USDC = "usdc",
    WETH = "weth"
}
export type Address = `0x${string}`;
type AddressMap = {
    [key in Addresses]: Address;
};
type CollectionMap = {
    [key in Collections]: Address;
};
type UnderlyingsAssetMap = {
    [key in UnderlyingsAsset]: Address;
};
export declare const collections: (chain?: Chain) => CollectionMap;
export declare const underlyingsAssets: (chain?: Chain) => UnderlyingsAssetMap;
export declare const addresses: (options?: ClientOptions) => AddressMap;
export {};
