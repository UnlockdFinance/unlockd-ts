import sepolia from './sepolia.json'
import mainnet from './mainnet.json'
import amoy from './amoy.json'
import { Address } from '../addresses'
import { Chains } from '../types/networks'

export const contractsAddresses = {
  [Chains.Mainnet]: {
    action: mainnet.action as Address,
    auction: mainnet.auction as Address,
    market: mainnet.market as Address,
    buyNow: mainnet.buyNow as Address,
    sellNow: mainnet.sellNow as Address
  },
  [Chains.Amoy]: {
    action: amoy.action as Address,
    auction: amoy.auction as Address,
    market: amoy.market as Address,
    buyNow: amoy.buyNow as Address,
    sellNow: amoy.sellNow as Address
  },
  [Chains.Sepolia]: {
    action: sepolia.action as Address,
    auction: sepolia.auction as Address,
    market: sepolia.market as Address,
    buyNow: sepolia.buyNow as Address,
    sellNow: sepolia.sellNow as Address
  }
}

