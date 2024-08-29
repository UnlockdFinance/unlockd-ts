const walletFactoryInterface = [
  'constructor(address _gnosisSafeProxyFactory, address _singleton, address _compatibilityFallbackHandler, address _guardBeacon, address _guardOwnerBeacon, address _delegationOwnerBeacon, address _protocolOwnerBeacon, address _registry)',
  'event WalletDeployed(address indexed safe, address indexed owner, address indexed guard, address delegationOwner, address protocolOwner, address sender)',
  'function compatibilityFallbackHandler() view returns (address)',
  'function delegationOwnerBeacon() view returns (address)',
  'function deploy(address _delegationController) returns (address, address, address, address)',
  'function deployFor(address _owner, address _delegationController) returns (address, address, address, address)',
  'function gnosisSafeProxyFactory() view returns (address)',
  'function guardBeacon() view returns (address)',
  'function guardOwnerBeacon() view returns (address)',
  'function protocolOwnerBeacon() view returns (address)',
  'function registry() view returns (address)',
  'function singleton() view returns (address)'
] as const

export default walletFactoryInterface
