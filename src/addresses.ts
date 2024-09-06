import { type Chain, Chains } from './types/networks'
import { contractsAddresses } from './contractsAddresses'
import { Address } from 'viem'

export enum ModuleId {
  Action = 3,
  Auction = 4,
  Market = 5,
  BuyNow = 6,
  SellNow = 7
}
export enum ProtocolAddresses {
  WalletRegistry = 'walletRegistry',
  WalletFactory = 'walletFactory',
  NftBatchTransfer = 'nftBatchTransfer'
}
export type Addresses = ModuleId | ProtocolAddresses

export enum Collections {
  Unikura = 'unikura',
  WatchesIo = 'watchesIo'
}

export enum UnderlyingsAsset {
  USDC = 'usdc',
  WETH = 'weth'
}

type AddressMap = { [key in Addresses]: Address }
type CollectionMap = Partial<{ [key in Collections]: Address }>
type UnderlyingsAssetMap = { [key in UnderlyingsAsset]: Address }

const mainnetAddresses: AddressMap = {
  [ModuleId.Action]: contractsAddresses.mainnet.action,
  [ModuleId.Auction]: contractsAddresses.mainnet.auction,
  [ModuleId.Market]: contractsAddresses.mainnet.market,
  [ModuleId.BuyNow]: contractsAddresses.mainnet.buyNow,
  [ModuleId.SellNow]: contractsAddresses.mainnet.sellNow,
  [ProtocolAddresses.WalletRegistry]: '0x715988afcbaef9f99a6796f6d6699eeddb48eb20' as Address,
  [ProtocolAddresses.WalletFactory]: '0xae00df7e92923f9c2adcdf7c5e9f16f984cf7379' as Address,
  [ProtocolAddresses.NftBatchTransfer]: '0x0c331e00703a9857819fa1Eb72aA3d4DE0f6f725' as Address
}
const sepoliaAddresses: AddressMap = {
  [ModuleId.Action]: contractsAddresses.sepolia.action,
  [ModuleId.Auction]: contractsAddresses.sepolia.auction,
  [ModuleId.Market]: contractsAddresses.sepolia.market,
  [ModuleId.BuyNow]: contractsAddresses.sepolia.buyNow,
  [ModuleId.SellNow]: contractsAddresses.sepolia.sellNow,
  [ProtocolAddresses.WalletRegistry]: '0xa24481e94a81a624fadd3c0f833af241023d996e' as Address,
  [ProtocolAddresses.WalletFactory]: '0x4abb1ee1fa5fc610f01b33cb9f0f31b95c2163dd' as Address,
  [ProtocolAddresses.NftBatchTransfer]: '0xAbA905EbA39b9a55FD0f910a6415BA91c3E9353d' as Address
}

const polygonAmoyAddresses: AddressMap = {
  [ModuleId.Action]: contractsAddresses.polygonAmoy.action,
  [ModuleId.Auction]: contractsAddresses.polygonAmoy.auction,
  [ModuleId.Market]: contractsAddresses.polygonAmoy.market,
  [ModuleId.BuyNow]: contractsAddresses.polygonAmoy.buyNow,
  [ModuleId.SellNow]: contractsAddresses.polygonAmoy.sellNow,
  [ProtocolAddresses.WalletRegistry]: '0x70951076369c376578Fa3E808b1b148bB5177fe2' as Address,
  [ProtocolAddresses.WalletFactory]: '0x661Fa5cE705D6AcdA108a6323B3f2732345b0b45' as Address,
  [ProtocolAddresses.NftBatchTransfer]: '0x7a18Bc13AfcF9eC02E63ab08129D1fA5fb283Ca6' as Address
}

const mainnetCollections: CollectionMap = {
  [Collections.Unikura]: '0xea89a88284ff9a9a9a54f4c43fc4efbf099e992f' as Address,
  [Collections.WatchesIo]: '0xd7ab81881c8a0a8fbfda70072d56ac6d7b3c3eff' as Address
}

const sepoliaCollections: CollectionMap = {
  [Collections.Unikura]: '0xa6a9acfdd1f64ec324ee936344cdb1457bdbddf0' as Address,
  [Collections.WatchesIo]: '0x388043e55a388e07a75e9a1412fe2d64e48343a5' as Address
}

const polygonAmoyCollections: CollectionMap = {
  [Collections.WatchesIo]: '0x6E6DF8330DF6d167F337BFd4CD0158110b8312f7' as Address
}

const mainnetUnderlyingsAssets: UnderlyingsAssetMap = {
  [UnderlyingsAsset.USDC]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' as Address,
  [UnderlyingsAsset.WETH]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' as Address
}
const sepoliaUnderlyingsAssets: UnderlyingsAssetMap = {
  [UnderlyingsAsset.USDC]: '0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8' as Address,
  [UnderlyingsAsset.WETH]: '0x7b79995e5f793a07bc00c21412e50ecae098e7f9' as Address
}
const polygonAmoyUnderlyingsAssets: UnderlyingsAssetMap = {
  [UnderlyingsAsset.USDC]: '0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582' as Address,
  [UnderlyingsAsset.WETH]: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619' as Address
}

export const collections = (chain: Chain): CollectionMap => {
  switch (chain) {
    case Chains.Mainnet:
      return mainnetCollections
    case Chains.Sepolia:
      return sepoliaCollections
    case Chains.PolygonAmoy:
      return polygonAmoyCollections
    default:
      return mainnetCollections
  }
}
export const underlyingsAssets = (chain: Chain): UnderlyingsAssetMap => {
  switch (chain) {
    case Chains.Mainnet:
      return mainnetUnderlyingsAssets
    case Chains.Sepolia:
      return sepoliaUnderlyingsAssets
    case Chains.PolygonAmoy:
      return polygonAmoyUnderlyingsAssets
    default:
      return mainnetUnderlyingsAssets
  }
}
export const addresses = (chain?: Chain): AddressMap => {
  switch (chain) {
    case Chains.Mainnet:
      return mainnetAddresses
    case Chains.Sepolia:
      return sepoliaAddresses
    case Chains.PolygonAmoy:
      return polygonAmoyAddresses
    default:
      return mainnetAddresses
  }
}
