import unlockdInterface from './Unlockd'
import actionInterface from './Action'
import auctionInterface from './Auction'
import marketInterface from './Market'
import buyNowInterface from './BuyNow'
import sellNowInterface from './SellNow'
import walletRegistryInterface from './WalletRegistry'
import walletFactoryInterface from './WalletFactory'
import nftBatchTransferInterface from './NftBatchTransfer'
import { parseAbi } from 'viem'

export const abis = {
  unlockd: parseAbi(unlockdInterface),
  action: parseAbi(actionInterface),
  auction: parseAbi(auctionInterface),
  market: parseAbi(marketInterface),
  buyNow: parseAbi(buyNowInterface),
  sellNow: parseAbi(sellNowInterface),
  walletRegistry: parseAbi(walletRegistryInterface),
  walletFactory: parseAbi(walletFactoryInterface),
  nftBatchTransfer: parseAbi(nftBatchTransferInterface)
}
