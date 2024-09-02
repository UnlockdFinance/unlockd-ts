const unlockdInterface: string[] = [
  'function NAME() view returns (string)',
  'function dispatch()',
  'function moduleIdToImplementation(uint256 moduleId) view returns (address)',
  'function moduleIdToProxy(uint256 moduleId) view returns (address)',
  'event Genesis()',
  'event InstallerInstallModule(uint256 indexed moduleId, address indexed moduleImpl, bytes32 moduleVersion)',
  'event ProxyCreated(address indexed proxy, uint256 moduleId)',
  'error InvalidModule()',
  'error ZeroAddress()'
] as const

export default unlockdInterface
