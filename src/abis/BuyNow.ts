const buyNowInterface: string[] = [
  'function buy(uint256 amount, ((bytes32 assetId, address collection, uint256 tokenId, uint256 price, uint256 nonce, uint256 deadline) asset, uint256 assetLtv, uint256 assetLiquidationThreshold, address from, address to, bytes data, uint256 value, address marketAdapter, address marketApproval, uint256 marketPrice, address underlyingAsset, uint256 nonce, uint256 deadline) signBuyMarket, (uint8 v, bytes32 r, bytes32 s, uint256 deadline) sig)',
  'function calculateDigest(uint256 nonce, ((bytes32 assetId, address collection, uint256 tokenId, uint256 price, uint256 nonce, uint256 deadline) asset, uint256 assetLtv, uint256 assetLiquidationThreshold, address from, address to, bytes data, uint256 value, address marketAdapter, address marketApproval, uint256 marketPrice, address underlyingAsset, uint256 nonce, uint256 deadline) signBuyNow) view returns (bytes32 digest)',
  'function getCalculations(((bytes32 assetId, address collection, uint256 tokenId, uint256 price, uint256 nonce, uint256 deadline) asset, uint256 assetLtv, uint256 assetLiquidationThreshold, address from, address to, bytes data, uint256 value, address marketAdapter, address marketApproval, uint256 marketPrice, address underlyingAsset, uint256 nonce, uint256 deadline) signBuyMarket) pure returns (uint256, uint256)',
  // events
  'event BuyNowPayLater(bytes32 loanId, address asset, uint256 tokenId, uint256 price, uint256 amount)',
  'event LoanCreated(address indexed user, uint256 indexed loanId, uint256 totalAssets, uint256 amount, uint256 borrowIndex)',
  // errors
  'error AddressesNotEquals()',
  'error AmountToLow()',
  'error InvalidRecoveredAddress()',
  'error NotValidReserve()',
  'error UnlockdWalletNotFound()'
] as const

export default buyNowInterface
