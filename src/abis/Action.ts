const actionInterface: string[] = [
  'function borrow(uint256 amount, (address collection, uint256 tokenId)[] assets, ((bytes32 loanId, uint256 aggLoanPrice, uint256 aggLtv, uint256 aggLiquidationThreshold, uint88 totalAssets, uint256 nonce, uint256 deadline) loan, bytes32[] assets, address underlyingAsset, uint256 nonce, uint256 deadline) signAction, (uint8 v, bytes32 r, bytes32 s, uint256 deadline) sig)',
  'function calculateDigest(uint256 nonce, ((bytes32 loanId, uint256 aggLoanPrice, uint256 aggLtv, uint256 aggLiquidationThreshold, uint88 totalAssets, uint256 nonce, uint256 deadline) loan, bytes32[] assets, address underlyingAsset, uint256 nonce, uint256 deadline) signAction) view returns (bytes32 digest)',
  'function getAmountToRepay(bytes32 loanId) view returns (uint256 amount)',
  'function getLoan(bytes32 loanId) view returns ((bytes32 loanId, uint88 totalAssets, uint8 state, address underlyingAsset, address owner))',
  'function repay(uint256 amount, ((bytes32 loanId, uint256 aggLoanPrice, uint256 aggLtv, uint256 aggLiquidationThreshold, uint88 totalAssets, uint256 nonce, uint256 deadline) loan, bytes32[] assets, address underlyingAsset, uint256 nonce, uint256 deadline) signAction, (uint8 v, bytes32 r, bytes32 s, uint256 deadline) sig)',
  // events
  'event AddCollateral(bytes32 indexed loanId, address indexed collection, uint256 indexed tokenId, bytes32 assetId)',
  'event Borrow(address indexed user, bytes32 indexed loanId, uint256 amount, uint256 totalAssets, address token)',
  'event LoanCreated(address indexed user, uint256 indexed loanId, uint256 totalAssets, uint256 amount, uint256 borrowIndex)',
  'event Repay(address indexed user, bytes32 indexed loanId, uint256 amount, bytes32[] assets, uint256 totalAssets)',
  // errors
  'error AmountExceedsDebt()',
  'error AssetLocked()',
  'error AssetsMismatch()',
  'error InvalidAssetAmount()',
  'error InvalidCurrentLiquidationThreshold()',
  'error InvalidCurrentLtv()',
  'error InvalidLoanOwner()',
  'error InvalidRecoveredAddress()',
  'error InvalidUnderlyingAsset()',
  'error LoanNotActive()',
  'error LoanNotUpdated()',
  'error NotAssetOwner()',
  'error NotValidReserve()',
  'error OrderActive()',
  'error UnhealtyLoan()',
  'error UnlockdWalletNotFound()'
] as const

export default actionInterface
