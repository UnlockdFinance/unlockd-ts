const uTokenFactoryAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'aclManager', type: 'address', internalType: 'address' }],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'balances',
    inputs: [{ name: '', type: 'address', internalType: 'address' }],
    outputs: [
      {
        name: 'totalSupplyScaledNotInvested',
        type: 'uint128',
        internalType: 'uint128'
      },
      { name: 'totalSupplyAssets', type: 'uint128', internalType: 'uint128' },
      { name: 'totalSupplyScaled', type: 'uint128', internalType: 'uint128' },
      { name: 'totalBorrowScaled', type: 'uint128', internalType: 'uint128' },
      { name: 'lastUpdateTimestamp', type: 'uint40', internalType: 'uint40' }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'borrow',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'loanId', type: 'bytes32', internalType: 'bytes32' },
      { name: 'amount', type: 'uint256', internalType: 'uint256' },
      { name: 'to', type: 'address', internalType: 'address' },
      { name: 'onBehalfOf', type: 'address', internalType: 'address' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'createMarket',
    inputs: [
      {
        name: 'params',
        type: 'tuple',
        internalType: 'struct IUTokenVault.CreateMarketParams',
        components: [
          {
            name: 'interestRateAddress',
            type: 'address',
            internalType: 'address'
          },
          { name: 'strategyAddress', type: 'address', internalType: 'address' },
          { name: 'reserveFactor', type: 'uint16', internalType: 'uint16' },
          { name: 'underlyingAsset', type: 'address', internalType: 'address' },
          {
            name: 'reserveType',
            type: 'uint8',
            internalType: 'enum Constants.ReserveType'
          },
          { name: 'decimals', type: 'uint8', internalType: 'uint8' },
          { name: 'tokenName', type: 'string', internalType: 'string' },
          { name: 'tokenSymbol', type: 'string', internalType: 'string' }
        ]
      }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'deposit',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'amount', type: 'uint256', internalType: 'uint256' },
      { name: 'onBehalfOf', type: 'address', internalType: 'address' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'disableStrategy',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'emergencyWithdraw',
    inputs: [{ name: '_to', type: 'address', internalType: 'address payable' }],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'emergencyWithdrawERC20',
    inputs: [
      { name: '_asset', type: 'address', internalType: 'address' },
      { name: '_to', type: 'address', internalType: 'address' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'getBalanceByUser',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'user', type: 'address', internalType: 'address' }
    ],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getBalances',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct DataTypes.MarketBalance',
        components: [
          {
            name: 'totalSupplyScaledNotInvested',
            type: 'uint128',
            internalType: 'uint128'
          },
          {
            name: 'totalSupplyAssets',
            type: 'uint128',
            internalType: 'uint128'
          },
          {
            name: 'totalSupplyScaled',
            type: 'uint128',
            internalType: 'uint128'
          },
          {
            name: 'totalBorrowScaled',
            type: 'uint128',
            internalType: 'uint128'
          },
          {
            name: 'lastUpdateTimestamp',
            type: 'uint40',
            internalType: 'uint40'
          }
        ]
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getCaps',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [
      { name: '', type: 'uint256', internalType: 'uint256' },
      { name: '', type: 'uint256', internalType: 'uint256' },
      { name: '', type: 'uint256', internalType: 'uint256' }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getDebtFromLoanId',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'loanId', type: 'bytes32', internalType: 'bytes32' }
    ],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getDecimals',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getFlags',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [
      { name: '', type: 'bool', internalType: 'bool' },
      { name: '', type: 'bool', internalType: 'bool' },
      { name: '', type: 'bool', internalType: 'bool' }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getReserveData',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct DataTypes.ReserveData',
        components: [
          {
            name: 'config',
            type: 'tuple',
            internalType: 'struct DataTypes.ReserveConfigurationMap',
            components: [{ name: 'data', type: 'uint256', internalType: 'uint256' }]
          },
          { name: 'liquidityIndex', type: 'uint128', internalType: 'uint128' },
          {
            name: 'variableBorrowIndex',
            type: 'uint128',
            internalType: 'uint128'
          },
          {
            name: 'currentLiquidityRate',
            type: 'uint128',
            internalType: 'uint128'
          },
          {
            name: 'currentVariableBorrowRate',
            type: 'uint128',
            internalType: 'uint128'
          },
          { name: 'underlyingAsset', type: 'address', internalType: 'address' },
          {
            name: 'scaledTokenAddress',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'interestRateAddress',
            type: 'address',
            internalType: 'address'
          },
          { name: 'strategyAddress', type: 'address', internalType: 'address' },
          {
            name: 'lastUpdateTimestamp',
            type: 'uint40',
            internalType: 'uint40'
          }
        ]
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getReserveType',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [{ name: '', type: 'uint8', internalType: 'enum Constants.ReserveType' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getScaledBalanceByUser',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'user', type: 'address', internalType: 'address' }
    ],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getScaledDebtFromLoanId',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'loanId', type: 'bytes32', internalType: 'bytes32' }
    ],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getScaledToken',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [{ name: '', type: 'address', internalType: 'address' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getScaledTotalDebtFromUser',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'user', type: 'address', internalType: 'address' }
    ],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getScaledTotalDebtMarket',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getTotalDebtFromUser',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'user', type: 'address', internalType: 'address' }
    ],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'initialize',
    inputs: [{ name: 'sharesTokenImp', type: 'address', internalType: 'address' }],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'proxiableUUID',
    inputs: [],
    outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'repay',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'loanId', type: 'bytes32', internalType: 'bytes32' },
      { name: 'amount', type: 'uint256', internalType: 'uint256' },
      { name: 'from', type: 'address', internalType: 'address' },
      { name: 'onBehalfOf', type: 'address', internalType: 'address' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'reserves',
    inputs: [{ name: '', type: 'address', internalType: 'address' }],
    outputs: [
      {
        name: 'config',
        type: 'tuple',
        internalType: 'struct DataTypes.ReserveConfigurationMap',
        components: [{ name: 'data', type: 'uint256', internalType: 'uint256' }]
      },
      { name: 'liquidityIndex', type: 'uint128', internalType: 'uint128' },
      { name: 'variableBorrowIndex', type: 'uint128', internalType: 'uint128' },
      {
        name: 'currentLiquidityRate',
        type: 'uint128',
        internalType: 'uint128'
      },
      {
        name: 'currentVariableBorrowRate',
        type: 'uint128',
        internalType: 'uint128'
      },
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'scaledTokenAddress', type: 'address', internalType: 'address' },
      { name: 'interestRateAddress', type: 'address', internalType: 'address' },
      { name: 'strategyAddress', type: 'address', internalType: 'address' },
      { name: 'lastUpdateTimestamp', type: 'uint40', internalType: 'uint40' }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'setActive',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'isActive', type: 'bool', internalType: 'bool' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'setCaps',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'minCap', type: 'uint256', internalType: 'uint256' },
      { name: 'depositCap', type: 'uint256', internalType: 'uint256' },
      { name: 'borrowCap', type: 'uint256', internalType: 'uint256' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'setFrozen',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'isFrozen', type: 'bool', internalType: 'bool' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'setPaused',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'isPaused', type: 'bool', internalType: 'bool' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'totalAvailableSupply',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'totalSupply',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'totalSupplyNotInvested',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'updateReserveStrategy',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'newStrategy', type: 'address', internalType: 'address' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'updateState',
    inputs: [{ name: 'underlyingAsset', type: 'address', internalType: 'address' }],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'upgradeTo',
    inputs: [{ name: 'newImplementation', type: 'address', internalType: 'address' }],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'upgradeToAndCall',
    inputs: [
      { name: 'newImplementation', type: 'address', internalType: 'address' },
      { name: 'data', type: 'bytes', internalType: 'bytes' }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'validateReserveType',
    inputs: [
      {
        name: 'currentReserveType',
        type: 'uint8',
        internalType: 'enum Constants.ReserveType'
      },
      {
        name: 'reserveType',
        type: 'uint8',
        internalType: 'enum Constants.ReserveType'
      }
    ],
    outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
    stateMutability: 'pure'
  },
  {
    type: 'function',
    name: 'withdraw',
    inputs: [
      { name: 'underlyingAsset', type: 'address', internalType: 'address' },
      { name: 'amount', type: 'uint256', internalType: 'uint256' },
      { name: 'to', type: 'address', internalType: 'address' }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'event',
    name: 'ActiveVault',
    inputs: [
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      { name: 'isActive', type: 'bool', indexed: false, internalType: 'bool' }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'AdminChanged',
    inputs: [
      {
        name: 'previousAdmin',
        type: 'address',
        indexed: false,
        internalType: 'address'
      },
      {
        name: 'newAdmin',
        type: 'address',
        indexed: false,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'BeaconUpgraded',
    inputs: [
      {
        name: 'beacon',
        type: 'address',
        indexed: true,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'Borrow',
    inputs: [
      {
        name: 'iniciator',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'onBehalfOf',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      },
      {
        name: 'loanId',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32'
      },
      {
        name: 'borrowRate',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'Deposit',
    inputs: [
      { name: 'user', type: 'address', indexed: true, internalType: 'address' },
      {
        name: 'onBehalfOf',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'DisableReserveStrategy',
    inputs: [
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'FrozenVault',
    inputs: [
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      { name: 'isFrozen', type: 'bool', indexed: false, internalType: 'bool' }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'Initialized',
    inputs: [{ name: 'version', type: 'uint8', indexed: false, internalType: 'uint8' }],
    anonymous: false
  },
  {
    type: 'event',
    name: 'MarketCreated',
    inputs: [
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'interestRate',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'strategy',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'sharesToken',
        type: 'address',
        indexed: false,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'MarketInterestRateUpdated',
    inputs: [
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'interestRate',
        type: 'address',
        indexed: true,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  { type: 'event', name: 'Paused', inputs: [], anonymous: false },
  {
    type: 'event',
    name: 'PausedVault',
    inputs: [
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      { name: 'isPaused', type: 'bool', indexed: false, internalType: 'bool' }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'Repay',
    inputs: [
      {
        name: 'iniciator',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'onBehalfOf',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      },
      {
        name: 'loanId',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32'
      },
      {
        name: 'borrowRate',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'ReserveDataUpdated',
    inputs: [
      {
        name: 'reserve',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'liquidityRate',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      },
      {
        name: 'variableBorrowRate',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      },
      {
        name: 'liquidityIndex',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      },
      {
        name: 'variableBorrowIndex',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      }
    ],
    anonymous: false
  },
  { type: 'event', name: 'Unpaused', inputs: [], anonymous: false },
  {
    type: 'event',
    name: 'UpdateCaps',
    inputs: [
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'minCap',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      },
      {
        name: 'depositCap',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      },
      {
        name: 'borrowCap',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'UpdateReserveState',
    inputs: [
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'newState',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'UpdateReserveStrategy',
    inputs: [
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'newStrategy',
        type: 'address',
        indexed: true,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'Upgraded',
    inputs: [
      {
        name: 'implementation',
        type: 'address',
        indexed: true,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'Withdraw',
    inputs: [
      { name: 'user', type: 'address', indexed: true, internalType: 'address' },
      { name: 'to', type: 'address', indexed: true, internalType: 'address' },
      {
        name: 'underlyingAsset',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      }
    ],
    anonymous: false
  },
  { type: 'error', name: 'AmountExceedsDebt', inputs: [] },
  { type: 'error', name: 'InvalidAmount', inputs: [] },
  { type: 'error', name: 'InvalidBorrowCap', inputs: [] },
  { type: 'error', name: 'InvalidDepositCap', inputs: [] },
  { type: 'error', name: 'InvalidMaxBorrowCap', inputs: [] },
  { type: 'error', name: 'InvalidMaxDecimals', inputs: [] },
  { type: 'error', name: 'InvalidMaxDepositCap', inputs: [] },
  { type: 'error', name: 'InvalidMaxMinCap', inputs: [] },
  { type: 'error', name: 'InvalidReserveFactor', inputs: [] },
  { type: 'error', name: 'NotEnoughLiquidity', inputs: [] },
  { type: 'error', name: 'PoolFrozen', inputs: [] },
  { type: 'error', name: 'PoolNotActive', inputs: [] },
  { type: 'error', name: 'PoolPaused', inputs: [] },
  { type: 'error', name: 'ProtocolAccessDenied', inputs: [] },
  { type: 'error', name: 'StrategyNotEmpty', inputs: [] },
  { type: 'error', name: 'UTokenAccessDenied', inputs: [] },
  { type: 'error', name: 'UnderlyingMarketAlreadyExist', inputs: [] },
  { type: 'error', name: 'UnderlyingMarketNotExist', inputs: [] },
  { type: 'error', name: 'UnsuccessfulExecution', inputs: [] },
  { type: 'error', name: 'ZeroAddress', inputs: [] },
  { type: 'error', name: 'ZeroNumber', inputs: [] }
] as const

export default uTokenFactoryAbi