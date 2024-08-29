import sepolia from './sepolia.json'
import mainnet from './mainnet.json'
import polygonAmoy from './polygonAmoy.json'
import { Address } from '../addresses'
import { Chains } from '../types/networks'

export const contractsAddresses = {
  [Chains.Mainnet.network]: {
    action: mainnet.action as Address,
    auction: mainnet.auction as Address,
    market: mainnet.market as Address,
    buyNow: mainnet.buyNow as Address,
    sellNow: mainnet.sellNow as Address
  },
  [Chains.PolygonAmoy.network]: {
    action: polygonAmoy.action as Address,
    auction: polygonAmoy.auction as Address,
    market: polygonAmoy.market as Address,
    buyNow: polygonAmoy.buyNow as Address,
    sellNow: polygonAmoy.sellNow as Address
  },
  [Chains.Sepolia.network]: {
    action: sepolia.action as Address,
    auction: sepolia.auction as Address,
    market: sepolia.market as Address,
    buyNow: sepolia.buyNow as Address,
    sellNow: sepolia.sellNow as Address
  }
}
