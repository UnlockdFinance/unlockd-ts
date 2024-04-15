import { ClientOptions } from './client'

export enum ModuleId {
  Action = 3,
  Auction = 4,
  Market = 5,
  BuyNow = 6,
  SellNow = 7
}
export type Address = `0x${string}`
type AddressMap = { [key in ModuleId]: Address }

const mainnetAddresses: AddressMap = {
  [ModuleId.Action]: '0xF617D821F9DA0A8e3354Cf5E5eA151270c814C87',
  [ModuleId.Auction]: '0x46E7A89fDa0dB09d0Ad651B7fb62A2C9dce9d152',
  [ModuleId.Market]: '0xF3B83Cccd6d870F245e7f0ef4333540cF0063944',
  [ModuleId.BuyNow]: '0xDFfe658124e2bbCa924077E9c3a888e45195cc59',
  [ModuleId.SellNow]: '0xd2041ee19BA6218B3bc2c67668cB2eC3945f8adb'
}

export const addresses = (options?: ClientOptions): AddressMap => {
  switch (options?.network) {
    case 'mainnet':
      return mainnetAddresses
    default:
      return mainnetAddresses
  }
}
