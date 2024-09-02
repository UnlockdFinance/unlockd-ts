const walletRegistryInterface: string[] = [
  'function delegationWalletFactory() view returns (address)',
  'function getOwnerWalletAddresses(address _owner) view returns (address[])',
  'function getOwnerWalletAt(address _owner, uint256 _index) view returns ((address wallet, address owner, address guard, address guardOwner, address delegationOwner, address protocolOwner))',
  'function getWallet(address _wallet) view returns ((address wallet, address owner, address guard, address guardOwner, address delegationOwner, address protocolOwner))',
  'function owner() view returns (address)',
  'function renounceOwnership()',
  'function setFactory(address _delegationWalletFactory)',
  'function setWallet(address _wallet, address _owner, address _guard, address _guardOwner, address _delegationOwner, address _protocolOwner)',
  'function transferOwnership(address newOwner)',
  'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
  'error DelegationWalletRegistry__onlyFactoryOrOwner()',
  'error DelegationWalletRegistry__setFactory_invalidAddress()',
  'error DelegationWalletRegistry__setWallet_invalidDelegationOwnerAddress()',
  'error DelegationWalletRegistry__setWallet_invalidGuardAddress()',
  'error DelegationWalletRegistry__setWallet_invalidOwnerAddress()',
  'error DelegationWalletRegistry__setWallet_invalidProtocolOwnerAddress()',
  'error DelegationWalletRegistry__setWallet_invalidWalletAddress()'
] as const

export default walletRegistryInterface
