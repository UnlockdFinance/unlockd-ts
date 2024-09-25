const basicWalletVaultAbi = [
  {
    inputs: [{ internalType: 'address', name: 'aclManager', type: 'address' }],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  { inputs: [], name: 'AssetLocked', type: 'error' },
  { inputs: [], name: 'CantReceiveETH', type: 'error' },
  { inputs: [], name: 'DelegationGuard__initialize_invalidOwner', type: 'error' },
  { inputs: [], name: 'DelegationOwner__assetAlreadyLocked', type: 'error' },
  { inputs: [], name: 'DelegationOwner__assetNotLocked', type: 'error' },
  { inputs: [], name: 'DelegationOwner__onlyOwner', type: 'error' },
  { inputs: [], name: 'DelegationOwner__wrongLoanId', type: 'error' },
  { inputs: [], name: 'Fallback', type: 'error' },
  { inputs: [], name: 'ProtocolAccessDenied', type: 'error' },
  { inputs: [], name: 'ProtocolOwner__invalidDelegatedAddressAddress', type: 'error' },
  { inputs: [], name: 'TransferFromFailed', type: 'error' },
  { inputs: [], name: 'UnsuccessfulExecution', type: 'error' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'asset', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'assetId', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'newOwner', type: 'address' }
    ],
    name: 'ChangeOwner',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'asset', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'assetId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'receiver', type: 'address' }
    ],
    name: 'ClaimedAsset',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint8', name: 'version', type: 'uint8' }],
    name: 'Initialized',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'asset', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'assetId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'claimDate', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'lockController', type: 'address' }
    ],
    name: 'LockedAsset',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32[]', name: 'assets', type: 'bytes32[]' },
      { indexed: true, internalType: 'bytes32', name: 'loanId', type: 'bytes32' }
    ],
    name: 'SetBatchLoanId',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'bytes32', name: 'index', type: 'bytes32' },
      { indexed: false, internalType: 'bytes32', name: 'loanId', type: 'bytes32' }
    ],
    name: 'SetLoanId',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'lockController', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'allowed', type: 'bool' }
    ],
    name: 'SetLockController',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'asset', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'assetId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'receiver', type: 'address' }
    ],
    name: 'TransferredAsset',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'asset', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'assetId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'lockController', type: 'address' }
    ],
    name: 'UnlockedAsset',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: '_collection', type: 'address' },
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      { internalType: 'address', name: '_underlyingAsset', type: 'address' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
      { internalType: 'address', name: '_marketApproval', type: 'address' },
      { internalType: 'bytes32', name: '_loanId', type: 'bytes32' }
    ],
    name: 'approveSale',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32[]', name: '_assets', type: 'bytes32[]' },
      { internalType: 'bytes32', name: '_loanId', type: 'bytes32' }
    ],
    name: 'batchSetLoanId',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32[]', name: '_assets', type: 'bytes32[]' }],
    name: 'batchSetToZeroLoanId',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '_asset', type: 'address' },
      { internalType: 'uint256', name: '_id', type: 'uint256' },
      { internalType: 'address', name: '_newOwner', type: 'address' }
    ],
    name: 'changeOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'bool', name: 'value', type: 'bool' }
    ],
    name: 'delegateOneExecution',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '_to', type: 'address' },
      { internalType: 'uint256', name: '_value', type: 'uint256' },
      { internalType: 'bytes', name: '_data', type: 'bytes' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address payable', name: '', type: 'address' }
    ],
    name: 'execTransaction',
    outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: '_assetId', type: 'bytes32' }],
    name: 'getLoanId',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: '_id', type: 'bytes32' }],
    name: 'isAssetLocked',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
    name: 'isDelegatedExecution',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'bytes', name: '', type: 'bytes' }
    ],
    name: 'onERC721Received',
    outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '_asset', type: 'address' },
      { internalType: 'uint256', name: '_id', type: 'uint256' },
      { internalType: 'bytes32', name: '_loanId', type: 'bytes32' }
    ],
    name: 'safeSetLoanId',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: '_assetId', type: 'bytes32' },
      { internalType: 'bytes32', name: '_loanId', type: 'bytes32' }
    ],
    name: 'setLoanId',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'contractAddress', type: 'address' },
          { internalType: 'uint256', name: 'value', type: 'uint256' },
          { internalType: 'bool', name: 'isERC20', type: 'bool' }
        ],
        internalType: 'struct IBasicWalletVault.AssetTransfer[]',
        name: 'assetTransfers',
        type: 'tuple[]'
      },
      { internalType: 'address', name: 'to', type: 'address' }
    ],
    name: 'withdrawAssets',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const

export default basicWalletVaultAbi
