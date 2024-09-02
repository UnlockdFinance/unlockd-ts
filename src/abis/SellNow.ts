const sellNowInterface: string[] = [
  'function calculateDigest(uint256 nonce, ((bytes32 loanId, uint256 aggLoanPrice, uint256 aggLtv, uint256 aggLiquidationThreshold, uint88 totalAssets, uint256 nonce, uint256 deadline) loan, bytes32 assetId, address marketAdapter, address marketApproval, uint256 marketPrice, address underlyingAsset, address from, address to, bytes data, uint256 value, uint256 nonce, uint256 deadline) signSellNow) view returns (bytes32 digest)',
  'function forceSell((address collection, uint256 tokenId) asset, ((bytes32 loanId, uint256 aggLoanPrice, uint256 aggLtv, uint256 aggLiquidationThreshold, uint88 totalAssets, uint256 nonce, uint256 deadline) loan, bytes32 assetId, address marketAdapter, address marketApproval, uint256 marketPrice, address underlyingAsset, address from, address to, bytes data, uint256 value, uint256 nonce, uint256 deadline) signSellNow, (uint8 v, bytes32 r, bytes32 s, uint256 deadline) sig)',
  'function sell((address collection, uint256 tokenId) asset, ((bytes32 loanId, uint256 aggLoanPrice, uint256 aggLtv, uint256 aggLiquidationThreshold, uint88 totalAssets, uint256 nonce, uint256 deadline) loan, bytes32 assetId, address marketAdapter, address marketApproval, uint256 marketPrice, address underlyingAsset, address from, address to, bytes data, uint256 value, uint256 nonce, uint256 deadline) signSellNow, (uint8 v, bytes32 r, bytes32 s, uint256 deadline) sig)',
  // events
  'event ForceSold(bytes32 loanId, bytes32 assetId, address collection, uint256 tokenId, uint256 amount)',
  'event LoanCreated(address indexed user, uint256 indexed loanId, uint256 totalAssets, uint256 amount, uint256 borrowIndex)',
  'event Sold(bytes32 loanId, bytes32 assetId, address collection, uint256 tokenId, uint256 amount)',
  // errors
  'error AccessDenied()',
  'error HealtyLoan()',
  'error InvalidCurrentLiquidationThreshold()',
  'error InvalidCurrentLtv()',
  'error InvalidLoanId()',
  'error InvalidRecoveredAddress()',
  'error LoanNotActive()',
  'error LoanNotUpdated()',
  'error NotAssetOwner()',
  'error OrderActive()',
  'error UnhealtyLoan()'
] as const

export default sellNowInterface
