const unlockdInterface: string[] = [
  'function dispatch()',
  'function moduleIdToImplementation(uint256 moduleId) view returns (address)',
  'function moduleIdToProxy(uint256 moduleId) view returns (address)',
  // events
  'event InstallerInstallModule(uint256 indexed moduleId, address indexed moduleImpl, bytes32 moduleVersion)',
  'event ProxyCreated(address indexed proxy, uint256 moduleId)',
  // errors
  'error InvalidModule()'
] as const

export default unlockdInterface
