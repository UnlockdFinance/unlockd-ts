const auctionInterface: string[] = [
  'function bid(uint128 amountToPay, uint128 amountOfDebt, ((bytes32 loanId, uint256 aggLoanPrice, uint256 aggLtv, uint256 aggLiquidationThreshold, uint88 totalAssets, uint256 nonce, uint256 deadline) loan, bytes32[] assets, uint256 assetPrice, uint256 assetLtv, uint40 endTime, uint256 nonce, uint256 deadline) signAuction, (uint8 v, bytes32 r, bytes32 s, uint256 deadline) sig)',
  'function calculateDigest(uint256 nonce, ((bytes32 loanId, uint256 aggLoanPrice, uint256 aggLtv, uint256 aggLiquidationThreshold, uint88 totalAssets, uint256 nonce, uint256 deadline) loan, bytes32[] assets, uint256 assetPrice, uint256 assetLtv, uint40 endTime, uint256 nonce, uint256 deadline) signAuction) view returns (bytes32 digest)',
  'function finalize(bool claimOnUWallet, bytes32 orderId, (address collection, uint256 tokenId) asset, ((bytes32 loanId, uint256 aggLoanPrice, uint256 aggLtv, uint256 aggLiquidationThreshold, uint88 totalAssets, uint256 nonce, uint256 deadline) loan, bytes32[] assets, uint256 assetPrice, uint256 assetLtv, uint40 endTime, uint256 nonce, uint256 deadline) signAuction, (uint8 v, bytes32 r, bytes32 s, uint256 deadline) sig)',
  'function getAmountToReedem(bytes32 loanId, bytes32[] assets) view returns (uint256, uint256, uint256)',
  'function getMinBidPriceAuction(bytes32 loanId, bytes32 assetId, uint256 assetPrice, uint256 aggLoanPrice, uint256 aggLtv) view returns (uint256)',
  'function getOrderAuction(bytes32 orderId) view returns ((bytes32 orderId, address owner, uint8 orderType, uint88 countBids, uint256 bidderDebtPayed, uint256 bidderBonus, (bytes32 loanId, bytes32 assetId, uint128 startAmount, uint128 endAmount, uint128 debtToSell) offer, (uint40 startTime, uint40 endTime) timeframe, (bytes32 loanId, address buyer, uint128 amountToPay, uint128 amountOfDebt) bid))',
  'function redeem(((bytes32 loanId, uint256 aggLoanPrice, uint256 aggLtv, uint256 aggLiquidationThreshold, uint88 totalAssets, uint256 nonce, uint256 deadline) loan, bytes32[] assets, uint256 assetPrice, uint256 assetLtv, uint40 endTime, uint256 nonce, uint256 deadline) signAuction, (uint8 v, bytes32 r, bytes32 s, uint256 deadline) sig)',
  // events
  'event AuctionBid(bytes32 indexed loanId, bytes32 indexed orderId, bytes32 indexed assetId, uint256 amountToPay, uint256 amountOfDebt, address user)',
  'event AuctionFinalize(bytes32 indexed loanId, bytes32 indexed orderId, bytes32 indexed assetId, uint256 debtAmount, uint256 amount, address winner, address owner)',
  'event AuctionOrderRedeemed(bytes32 indexed loanId, bytes32 indexed orderId, uint256 amountOfDebt, uint256 amountToPay, uint256 bonus, uint256 countBids)',
  'event AuctionRedeem(bytes32 indexed loanId, uint256 indexed amount, address indexed user)',
  'event Repay(address indexed user, bytes32 indexed loanId, uint256 amount, uint256 debt)',
  // errors
  'error AmountExceedsDebt()',
  'error AssetsMismatch()',
  'error HealtyLoan()',
  'error InvalidAssets()',
  'error InvalidBidAmount()',
  'error InvalidCurrentLiquidationThreshold()',
  'error InvalidCurrentLtv()',
  'error InvalidLoanId()',
  'error InvalidOrderOwner()',
  'error InvalidRecoveredAddress()',
  'error InvalidTotalAmount()',
  'error InvalidWalletOwner()',
  'error LoanNotUpdated()',
  'error OrderNotAllowed()',
  'error UnlockdWalletNotFound()'
] as const

export default auctionInterface
