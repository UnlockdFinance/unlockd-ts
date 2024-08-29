import unlockd from './Unlockd.json'
import action from './Action.json'
import auction from './Auction.json'
import market from './Market.json'
import buyNow from './BuyNow.json'
import sellNow from './SellNow.json'
import walletRegistry from './WalletRegistry.json'
import walletFactoryInterface from './WalletFactory'
import nftBatchTransfer from './NftBatchTransfer.json'
import { parseAbi } from 'viem'

export const abis = {
  unlockd,
  action,
  auction,
  market,
  buyNow,
  sellNow,
  walletRegistry,
  walletFactory: parseAbi(walletFactoryInterface),
  nftBatchTransfer
}
