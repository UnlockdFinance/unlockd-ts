import unlockdAbi from './Unlockd'
import actionAbi from './Action'
import auctionAbi from './Auction'
import marketAbi from './Market'
import buyNowAbi from './BuyNow'
import sellNowAbi from './SellNow'
import walletRegistryAbi from './WalletRegistry'
import walletFactoryAbi from './WalletFactory'
import nftBatchTransferAbi from './NftBatchTransfer'
import basicWalletVaultAbi from './BasicWalletVault'
import uTokenVaultAbi from './UTokenVault'

export const abis = {
  unlockd: unlockdAbi,
  action: actionAbi,
  auction: auctionAbi,
  market: marketAbi,
  buyNow: buyNowAbi,
  sellNow: sellNowAbi,
  walletRegistry: walletRegistryAbi,
  walletFactory: walletFactoryAbi,
  nftBatchTransfer: nftBatchTransferAbi,
  basicWalletVault: basicWalletVaultAbi,
  uTokenVault: uTokenVaultAbi
}
