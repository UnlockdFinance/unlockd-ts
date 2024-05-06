import { Chain, ClientOptions } from './client'

export enum ModuleId {
  Action = 3,
  Auction = 4,
  Market = 5,
  BuyNow = 6,
  SellNow = 7
}
export enum ProtocolAddresses {
  WalletRegistry= 'walletRegistry',
  WalletFactory= 'walletFactory',
  NftBatchTransfer= 'nftBatchTransfer',
}
export type Addresses = ModuleId | ProtocolAddresses;

export enum Collections {
  Unikura = 'unikura',
  WatchesIo = 'watchesIo'
}

export enum UnderlyingsAsset {
  USDC = 'usdc',
  WETH = 'weth',
}

export type Address = `0x${string}`
type AddressMap = { [key in Addresses ]: Address }
type CollectionMap = { [key in Collections]: Address }
type UnderlyingsAssetMap = { [key in UnderlyingsAsset]: Address }

const mainnetAddresses: AddressMap = {
  [ModuleId.Action]: '0xF617D821F9DA0A8e3354Cf5E5eA151270c814C87',
  [ModuleId.Auction]: '0x46E7A89fDa0dB09d0Ad651B7fb62A2C9dce9d152',
  [ModuleId.Market]: '0xF3B83Cccd6d870F245e7f0ef4333540cF0063944',
  [ModuleId.BuyNow]: '0xDFfe658124e2bbCa924077E9c3a888e45195cc59',
  [ModuleId.SellNow]: '0xd2041ee19BA6218B3bc2c67668cB2eC3945f8adb',
  [ProtocolAddresses.WalletRegistry]: '0x715988afcbaef9f99a6796f6d6699eeddb48eb20',
  [ProtocolAddresses.WalletFactory]: '0xae00df7e92923f9c2adcdf7c5e9f16f984cf7379',
  [ProtocolAddresses.NftBatchTransfer]: '0x0c331e00703a9857819fa1Eb72aA3d4DE0f6f725',

}
const sepoliaAddresses: AddressMap = {
  [ModuleId.Action]: '0xdE3FbfEAc8763D6F597c609AB1637bF5ebBB95f5',
  [ModuleId.Auction]: '0xFA2896810dB8646c140d26578622C94e88f8A17B',
  [ModuleId.Market]: '0x6e00a46D98B3f6A0c42fa0DbC69d01256Ea45289',
  [ModuleId.BuyNow]: '0x145F60D426174b03Af818fbC6221ff4482BD2AD8',
  [ModuleId.SellNow]: '0xCC67de978AB829778e7a28E38eE808B2E15a1Fa7',
  [ProtocolAddresses.WalletRegistry]: '0xbf1cd9b8a51ea64d07f49b7966e2bfe383899386',
  [ProtocolAddresses.WalletFactory]: '0x946F2b7d70ef266b636414bB9B08795B0DDa819D',
  [ProtocolAddresses.NftBatchTransfer]: '0xAbA905EbA39b9a55FD0f910a6415BA91c3E9353d',

}
const mainnetCollections: CollectionMap = {
  [Collections.Unikura]: '0xea89a88284ff9a9a9a54f4c43fc4efbf099e992f',
  [Collections.WatchesIo]: '0xd7ab81881c8a0a8fbfda70072d56ac6d7b3c3eff'
}

const sepoliaCollections: CollectionMap = {
  [Collections.Unikura]: '0x8be936362832cfbd3bf800a5e6537dd17fa538b0', //0xA6a9AcFDD1F64EC324eE936344cDB1457BDbDDF0
  [Collections.WatchesIo]: '0x388043e55a388e07a75e9a1412fe2d64e48343a5' //0x388043e55a388e07A75E9A1412FE2d64e48343A5
}

const mainnetUnderlyingsAssets: UnderlyingsAssetMap = {
  [UnderlyingsAsset.USDC]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  [UnderlyingsAsset.WETH]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
}
const sepoliaUnderlyingsAssets: UnderlyingsAssetMap = {
  [UnderlyingsAsset.USDC]: '0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8',
  [UnderlyingsAsset.WETH]: '0xfff9976782d46cc05630d1f6ebab18b2324d6b14'
}

export const collections = (chain?: Chain): CollectionMap => {
  switch (chain) {
    case 'mainnet':
      return mainnetCollections
    case 'sepolia':
      return sepoliaCollections
    default:
      return mainnetCollections
  }
}
export const underlyingsAssets = (chain?: Chain): UnderlyingsAssetMap => {
  switch (chain) {
    case 'mainnet':
      return mainnetUnderlyingsAssets
    case 'sepolia':
      return sepoliaUnderlyingsAssets
    default:
      return mainnetUnderlyingsAssets
  }
}
export const addresses = (options?: ClientOptions): AddressMap => {
  switch (options?.network) {
    case 'mainnet':
      return mainnetAddresses
    case 'sepolia':
      return sepoliaAddresses
    default:
      return mainnetAddresses
  }
}
