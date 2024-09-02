const buyNowInterface: string[] = [
  'function DOMAIN_SEPARATOR() view returns (bytes32)',
  'function buy(uint256 amount, ((bytes32 assetId, address collection, uint256 tokenId, uint256 price, uint256 nonce, uint256 deadline) asset, uint256 assetLtv, uint256 assetLiquidationThreshold, address from, address to, bytes data, uint256 value, address marketAdapter, address marketApproval, uint256 marketPrice, address underlyingAsset, uint256 nonce, uint256 deadline) signBuyMarket, (uint8 v, bytes32 r, bytes32 s, uint256 deadline) sig)',
  'function calculateDigest(uint256 nonce, ((bytes32 assetId, address collection, uint256 tokenId, uint256 price, uint256 nonce, uint256 deadline) asset, uint256 assetLtv, uint256 assetLiquidationThreshold, address from, address to, bytes data, uint256 value, address marketAdapter, address marketApproval, uint256 marketPrice, address underlyingAsset, uint256 nonce, uint256 deadline) signBuyNow) view returns (bytes32 digest)',
  'function getCalculations(((bytes32 assetId, address collection, uint256 tokenId, uint256 price, uint256 nonce, uint256 deadline) asset, uint256 assetLtv, uint256 assetLiquidationThreshold, address from, address to, bytes data, uint256 value, address marketAdapter, address marketApproval, uint256 marketPrice, address underlyingAsset, uint256 nonce, uint256 deadline) signBuyMarket) pure returns (uint256, uint256)',
  'function getNonce(address sender) view returns (uint256)',
  'function moduleId() view returns (uint256)',
  'function moduleVersion() view returns (bytes32)',
  'event BuyNowPayLater(bytes32 loanId, address asset, uint256 tokenId, uint256 price, uint256 amount)',
  'event Genesis()',
  'event InstallerInstallModule(uint256 indexed moduleId, address indexed moduleImpl, bytes32 moduleVersion)',
  'event LoanCreated(address indexed user, uint256 indexed loanId, uint256 totalAssets, uint256 amount, uint256 borrowIndex)',
  'event ProxyCreated(address indexed proxy, uint256 moduleId)',
  'error AddressesNotEquals()',
  'error AmountToLow()',
  'error InvalidRecoveredAddress()',
  'error NotEqualDeadline()',
  'error NotValidReserve()',
  'error SenderZeroAddress()',
  'error UnlockdWalletNotFound()',
  'error WrongNonce()'
] as const

export default buyNowInterface
