const basicWalletVaultAbi = [
  {
    type: 'function',
    name: 'approveSale',
    inputs: [
      { name: '_collection', type: 'address', internalType: 'address' },
      { name: '_tokenId', type: 'uint256', internalType: 'uint256' },
      {
        name: '_underlyingAsset',
        type: 'address',
        internalType: 'address'
      },
      { name: '_amount', type: 'uint256', internalType: 'uint256' },
      {
        name: '_marketApproval',
        type: 'address',
        internalType: 'address'
      },
      { name: '_loanId', type: 'bytes32', internalType: 'bytes32' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'batchSetLoanId',
    inputs: [
      { name: '_assets', type: 'bytes32[]', internalType: 'bytes32[]' },
      { name: '_loanId', type: 'bytes32', internalType: 'bytes32' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'batchSetToZeroLoanId',
    inputs: [{ name: '_assets', type: 'bytes32[]', internalType: 'bytes32[]' }],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'changeOwner',
    inputs: [
      { name: '_asset', type: 'address', internalType: 'address' },
      { name: '_id', type: 'uint256', internalType: 'uint256' },
      { name: '_newOwner', type: 'address', internalType: 'address' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'delegateOneExecution',
    inputs: [
      { name: 'to', type: 'address', internalType: 'address' },
      { name: 'value', type: 'bool', internalType: 'bool' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'execTransaction',
    inputs: [
      { name: '_to', type: 'address', internalType: 'address' },
      { name: '_value', type: 'uint256', internalType: 'uint256' },
      { name: '_data', type: 'bytes', internalType: 'bytes' },
      { name: '_safeTxGas', type: 'uint256', internalType: 'uint256' },
      { name: '_baseGas', type: 'uint256', internalType: 'uint256' },
      { name: '_gasPrice', type: 'uint256', internalType: 'uint256' },
      { name: '_gasToken', type: 'address', internalType: 'address' },
      {
        name: '_refundReceiver',
        type: 'address',
        internalType: 'address payable'
      }
    ],
    outputs: [{ name: 'success', type: 'bool', internalType: 'bool' }],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'getLoanId',
    inputs: [{ name: '_assetId', type: 'bytes32', internalType: 'bytes32' }],
    outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'isAssetLocked',
    inputs: [{ name: '_id', type: 'bytes32', internalType: 'bytes32' }],
    outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'isDelegatedExecution',
    inputs: [{ name: 'to', type: 'address', internalType: 'address' }],
    outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'safeSetLoanId',
    inputs: [
      { name: '_asset', type: 'address', internalType: 'address' },
      { name: '_id', type: 'uint256', internalType: 'uint256' },
      { name: '_loanId', type: 'bytes32', internalType: 'bytes32' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'setLoanId',
    inputs: [
      { name: '_assetId', type: 'bytes32', internalType: 'bytes32' },
      { name: '_loanId', type: 'bytes32', internalType: 'bytes32' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'withdrawAssets',
    inputs: [
      {
        name: 'assetTransfers',
        type: 'tuple[]',
        internalType: 'struct IBasicWalletVault.AssetTransfer[]',
        components: [
          {
            name: 'contractAddress',
            type: 'address',
            internalType: 'address'
          },
          { name: 'value', type: 'uint256', internalType: 'uint256' },
          { name: 'isERC20', type: 'bool', internalType: 'bool' }
        ]
      },
      { name: 'to', type: 'address', internalType: 'address' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'event',
    name: 'ChangeOwner',
    inputs: [
      {
        name: 'asset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'assetId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256'
      },
      {
        name: 'newOwner',
        type: 'address',
        indexed: false,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'ClaimedAsset',
    inputs: [
      {
        name: 'asset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'assetId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256'
      },
      {
        name: 'receiver',
        type: 'address',
        indexed: true,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'LockedAsset',
    inputs: [
      {
        name: 'asset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'assetId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256'
      },
      {
        name: 'claimDate',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      },
      {
        name: 'lockController',
        type: 'address',
        indexed: true,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'SetBatchLoanId',
    inputs: [
      {
        name: 'assets',
        type: 'bytes32[]',
        indexed: true,
        internalType: 'bytes32[]'
      },
      {
        name: 'loanId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'SetLoanId',
    inputs: [
      {
        name: 'index',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32'
      },
      {
        name: 'loanId',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'SetLockController',
    inputs: [
      {
        name: 'lockController',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'allowed',
        type: 'bool',
        indexed: false,
        internalType: 'bool'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'TransferredAsset',
    inputs: [
      {
        name: 'asset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'assetId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256'
      },
      {
        name: 'receiver',
        type: 'address',
        indexed: true,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'UnlockedAsset',
    inputs: [
      {
        name: 'asset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'assetId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256'
      },
      {
        name: 'lockController',
        type: 'address',
        indexed: true,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  { type: 'error', name: 'CantReceiveETH', inputs: [] },
  { type: 'error', name: 'Fallback', inputs: [] },
  { type: 'error', name: 'TransferFromFailed', inputs: [] }
] as const

export default basicWalletVaultAbi
