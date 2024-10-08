const uTokenVaultAbi = [{
  'inputs': [{ 'internalType': 'address', 'name': 'aclManager', 'type': 'address' }],
  'stateMutability': 'nonpayable',
  'type': 'constructor'
}, { 'inputs': [], 'name': 'AmountExceedsDebt', 'type': 'error' }, {
  'inputs': [],
  'name': 'InvalidAmount',
  'type': 'error'
}, { 'inputs': [], 'name': 'InvalidBorrowCap', 'type': 'error' }, {
  'inputs': [],
  'name': 'InvalidDepositCap',
  'type': 'error'
}, { 'inputs': [], 'name': 'InvalidMaxBorrowCap', 'type': 'error' }, {
  'inputs': [],
  'name': 'InvalidMaxDecimals',
  'type': 'error'
}, { 'inputs': [], 'name': 'InvalidMaxDepositCap', 'type': 'error' }, {
  'inputs': [],
  'name': 'InvalidMaxMinCap',
  'type': 'error'
}, { 'inputs': [], 'name': 'InvalidReserveFactor', 'type': 'error' }, {
  'inputs': [],
  'name': 'NotEnoughLiquidity',
  'type': 'error'
}, { 'inputs': [], 'name': 'PoolFrozen', 'type': 'error' }, {
  'inputs': [],
  'name': 'PoolNotActive',
  'type': 'error'
}, { 'inputs': [], 'name': 'PoolPaused', 'type': 'error' }, {
  'inputs': [],
  'name': 'ProtocolAccessDenied',
  'type': 'error'
}, { 'inputs': [], 'name': 'StrategyNotEmpty', 'type': 'error' }, {
  'inputs': [],
  'name': 'UTokenAccessDenied',
  'type': 'error'
}, { 'inputs': [], 'name': 'UnderlyingMarketAlreadyExist', 'type': 'error' }, {
  'inputs': [],
  'name': 'UnderlyingMarketNotExist',
  'type': 'error'
}, { 'inputs': [], 'name': 'UnsuccessfulExecution', 'type': 'error' }, {
  'inputs': [],
  'name': 'ZeroAddress',
  'type': 'error'
}, { 'inputs': [], 'name': 'ZeroNumber', 'type': 'error' }, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'bool', 'name': 'isActive', 'type': 'bool' }],
  'name': 'ActiveVault',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': false,
    'internalType': 'address',
    'name': 'previousAdmin',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'address', 'name': 'newAdmin', 'type': 'address' }],
  'name': 'AdminChanged',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'beacon', 'type': 'address' }],
  'name': 'BeaconUpgraded',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'iniciator', 'type': 'address' }, {
    'indexed': true,
    'internalType': 'address',
    'name': 'onBehalfOf',
    'type': 'address'
  }, { 'indexed': true, 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'amount',
    'type': 'uint256'
  }, { 'indexed': false, 'internalType': 'bytes32', 'name': 'loanId', 'type': 'bytes32' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'borrowRate',
    'type': 'uint256'
  }],
  'name': 'Borrow',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'user', 'type': 'address' }, {
    'indexed': true,
    'internalType': 'address',
    'name': 'onBehalfOf',
    'type': 'address'
  }, { 'indexed': true, 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'amount',
    'type': 'uint256'
  }],
  'name': 'Deposit',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'DisableReserveStrategy',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'bool', 'name': 'isFrozen', 'type': 'bool' }],
  'name': 'FrozenVault',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint8', 'name': 'version', 'type': 'uint8' }],
  'name': 'Initialized',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'indexed': true, 'internalType': 'address', 'name': 'interestRate', 'type': 'address' }, {
    'indexed': true,
    'internalType': 'address',
    'name': 'strategy',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'address', 'name': 'sharesToken', 'type': 'address' }],
  'name': 'MarketCreated',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'indexed': true, 'internalType': 'address', 'name': 'interestRate', 'type': 'address' }],
  'name': 'MarketInterestRateUpdated',
  'type': 'event'
}, { 'anonymous': false, 'inputs': [], 'name': 'Paused', 'type': 'event' }, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'bool', 'name': 'isPaused', 'type': 'bool' }],
  'name': 'PausedVault',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'iniciator', 'type': 'address' }, {
    'indexed': true,
    'internalType': 'address',
    'name': 'onBehalfOf',
    'type': 'address'
  }, { 'indexed': true, 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'amount',
    'type': 'uint256'
  }, { 'indexed': false, 'internalType': 'bytes32', 'name': 'loanId', 'type': 'bytes32' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'borrowRate',
    'type': 'uint256'
  }],
  'name': 'Repay',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'reserve', 'type': 'address' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'liquidityRate',
    'type': 'uint256'
  }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'variableBorrowRate',
    'type': 'uint256'
  }, { 'indexed': false, 'internalType': 'uint256', 'name': 'liquidityIndex', 'type': 'uint256' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'variableBorrowIndex',
    'type': 'uint256'
  }],
  'name': 'ReserveDataUpdated',
  'type': 'event'
}, { 'anonymous': false, 'inputs': [], 'name': 'Unpaused', 'type': 'event' }, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'uint256', 'name': 'minCap', 'type': 'uint256' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'depositCap',
    'type': 'uint256'
  }, { 'indexed': false, 'internalType': 'uint256', 'name': 'borrowCap', 'type': 'uint256' }],
  'name': 'UpdateCaps',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'uint256', 'name': 'newState', 'type': 'uint256' }],
  'name': 'UpdateReserveState',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'indexed': true, 'internalType': 'address', 'name': 'newStrategy', 'type': 'address' }],
  'name': 'UpdateReserveStrategy',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
  'name': 'Upgraded',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'user', 'type': 'address' }, {
    'indexed': true,
    'internalType': 'address',
    'name': 'to',
    'type': 'address'
  }, { 'indexed': true, 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'amount',
    'type': 'uint256'
  }],
  'name': 'Withdraw',
  'type': 'event'
}, {
  'inputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }],
  'name': 'balances',
  'outputs': [{
    'internalType': 'uint128',
    'name': 'totalSupplyScaledNotInvested',
    'type': 'uint128'
  }, { 'internalType': 'uint128', 'name': 'totalSupplyAssets', 'type': 'uint128' }, {
    'internalType': 'uint128',
    'name': 'totalSupplyScaled',
    'type': 'uint128'
  }, { 'internalType': 'uint128', 'name': 'totalBorrowScaled', 'type': 'uint128' }, {
    'internalType': 'uint40',
    'name': 'lastUpdateTimestamp',
    'type': 'uint40'
  }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'internalType': 'bytes32', 'name': 'loanId', 'type': 'bytes32' }, {
    'internalType': 'uint256',
    'name': 'amount',
    'type': 'uint256'
  }, { 'internalType': 'address', 'name': 'to', 'type': 'address' }, {
    'internalType': 'address',
    'name': 'onBehalfOf',
    'type': 'address'
  }], 'name': 'borrow', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
  'inputs': [{
    'components': [{
      'internalType': 'address',
      'name': 'interestRateAddress',
      'type': 'address'
    }, { 'internalType': 'address', 'name': 'strategyAddress', 'type': 'address' }, {
      'internalType': 'uint16',
      'name': 'reserveFactor',
      'type': 'uint16'
    }, {
      'internalType': 'address',
      'name': 'underlyingAsset',
      'type': 'address'
    }, {
      'internalType': 'enum Constants.ReserveType',
      'name': 'reserveType',
      'type': 'uint8'
    }, { 'internalType': 'uint8', 'name': 'decimals', 'type': 'uint8' }, {
      'internalType': 'string',
      'name': 'tokenName',
      'type': 'string'
    }, { 'internalType': 'string', 'name': 'tokenSymbol', 'type': 'string' }],
    'internalType': 'struct IUTokenVault.CreateMarketParams',
    'name': 'params',
    'type': 'tuple'
  }], 'name': 'createMarket', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'internalType': 'uint256', 'name': 'amount', 'type': 'uint256' }, {
    'internalType': 'address',
    'name': 'onBehalfOf',
    'type': 'address'
  }], 'name': 'deposit', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'disableStrategy',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address payable', 'name': '_to', 'type': 'address' }],
  'name': 'emergencyWithdraw',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': '_asset', 'type': 'address' }, {
    'internalType': 'address',
    'name': '_to',
    'type': 'address'
  }], 'name': 'emergencyWithdrawERC20', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'internalType': 'address', 'name': 'user', 'type': 'address' }],
  'name': 'getBalanceByUser',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'getBalances',
  'outputs': [{
    'components': [{
      'internalType': 'uint128',
      'name': 'totalSupplyScaledNotInvested',
      'type': 'uint128'
    }, { 'internalType': 'uint128', 'name': 'totalSupplyAssets', 'type': 'uint128' }, {
      'internalType': 'uint128',
      'name': 'totalSupplyScaled',
      'type': 'uint128'
    }, { 'internalType': 'uint128', 'name': 'totalBorrowScaled', 'type': 'uint128' }, {
      'internalType': 'uint40',
      'name': 'lastUpdateTimestamp',
      'type': 'uint40'
    }], 'internalType': 'struct DataTypes.MarketBalance', 'name': '', 'type': 'tuple'
  }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'getCaps',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }, {
    'internalType': 'uint256',
    'name': '',
    'type': 'uint256'
  }, { 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'internalType': 'bytes32', 'name': 'loanId', 'type': 'bytes32' }],
  'name': 'getDebtFromLoanId',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'getDecimals',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'getFlags',
  'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }, {
    'internalType': 'bool',
    'name': '',
    'type': 'bool'
  }, { 'internalType': 'bool', 'name': '', 'type': 'bool' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'getReserveData',
  'outputs': [{
    'components': [{
      'components': [{ 'internalType': 'uint256', 'name': 'data', 'type': 'uint256' }],
      'internalType': 'struct DataTypes.ReserveConfigurationMap',
      'name': 'config',
      'type': 'tuple'
    }, { 'internalType': 'uint128', 'name': 'liquidityIndex', 'type': 'uint128' }, {
      'internalType': 'uint128',
      'name': 'variableBorrowIndex',
      'type': 'uint128'
    }, { 'internalType': 'uint128', 'name': 'currentLiquidityRate', 'type': 'uint128' }, {
      'internalType': 'uint128',
      'name': 'currentVariableBorrowRate',
      'type': 'uint128'
    }, { 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }, {
      'internalType': 'address',
      'name': 'scaledTokenAddress',
      'type': 'address'
    }, { 'internalType': 'address', 'name': 'interestRateAddress', 'type': 'address' }, {
      'internalType': 'address',
      'name': 'strategyAddress',
      'type': 'address'
    }, { 'internalType': 'uint40', 'name': 'lastUpdateTimestamp', 'type': 'uint40' }],
    'internalType': 'struct DataTypes.ReserveData',
    'name': '',
    'type': 'tuple'
  }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'getReserveType',
  'outputs': [{ 'internalType': 'enum Constants.ReserveType', 'name': '', 'type': 'uint8' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'internalType': 'address', 'name': 'user', 'type': 'address' }],
  'name': 'getScaledBalanceByUser',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'internalType': 'bytes32', 'name': 'loanId', 'type': 'bytes32' }],
  'name': 'getScaledDebtFromLoanId',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'getScaledToken',
  'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'internalType': 'address', 'name': 'user', 'type': 'address' }],
  'name': 'getScaledTotalDebtFromUser',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'getScaledTotalDebtMarket',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'internalType': 'address', 'name': 'user', 'type': 'address' }],
  'name': 'getTotalDebtFromUser',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'sharesTokenImp', 'type': 'address' }],
  'name': 'initialize',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [],
  'name': 'proxiableUUID',
  'outputs': [{ 'internalType': 'bytes32', 'name': '', 'type': 'bytes32' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'internalType': 'bytes32', 'name': 'loanId', 'type': 'bytes32' }, {
    'internalType': 'uint256',
    'name': 'amount',
    'type': 'uint256'
  }, { 'internalType': 'address', 'name': 'from', 'type': 'address' }, {
    'internalType': 'address',
    'name': 'onBehalfOf',
    'type': 'address'
  }], 'name': 'repay', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }],
  'name': 'reserves',
  'outputs': [{
    'components': [{ 'internalType': 'uint256', 'name': 'data', 'type': 'uint256' }],
    'internalType': 'struct DataTypes.ReserveConfigurationMap',
    'name': 'config',
    'type': 'tuple'
  }, { 'internalType': 'uint128', 'name': 'liquidityIndex', 'type': 'uint128' }, {
    'internalType': 'uint128',
    'name': 'variableBorrowIndex',
    'type': 'uint128'
  }, { 'internalType': 'uint128', 'name': 'currentLiquidityRate', 'type': 'uint128' }, {
    'internalType': 'uint128',
    'name': 'currentVariableBorrowRate',
    'type': 'uint128'
  }, { 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }, {
    'internalType': 'address',
    'name': 'scaledTokenAddress',
    'type': 'address'
  }, { 'internalType': 'address', 'name': 'interestRateAddress', 'type': 'address' }, {
    'internalType': 'address',
    'name': 'strategyAddress',
    'type': 'address'
  }, { 'internalType': 'uint40', 'name': 'lastUpdateTimestamp', 'type': 'uint40' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }, {
    'internalType': 'bool',
    'name': 'isActive',
    'type': 'bool'
  }], 'name': 'setActive', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'internalType': 'uint256', 'name': 'minCap', 'type': 'uint256' }, {
    'internalType': 'uint256',
    'name': 'depositCap',
    'type': 'uint256'
  }, { 'internalType': 'uint256', 'name': 'borrowCap', 'type': 'uint256' }],
  'name': 'setCaps',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }, {
    'internalType': 'bool',
    'name': 'isFrozen',
    'type': 'bool'
  }], 'name': 'setFrozen', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }, {
    'internalType': 'bool',
    'name': 'isPaused',
    'type': 'bool'
  }], 'name': 'setPaused', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'totalAvailableSupply',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'totalSupply',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'totalSupplyNotInvested',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'internalType': 'address', 'name': 'newStrategy', 'type': 'address' }],
  'name': 'updateReserveStrategy',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'underlyingAsset', 'type': 'address' }],
  'name': 'updateState',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'newImplementation', 'type': 'address' }],
  'name': 'upgradeTo',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'newImplementation',
    'type': 'address'
  }, { 'internalType': 'bytes', 'name': 'data', 'type': 'bytes' }],
  'name': 'upgradeToAndCall',
  'outputs': [],
  'stateMutability': 'payable',
  'type': 'function'
}, {
  'inputs': [{
    'internalType': 'enum Constants.ReserveType',
    'name': 'currentReserveType',
    'type': 'uint8'
  }, { 'internalType': 'enum Constants.ReserveType', 'name': 'reserveType', 'type': 'uint8' }],
  'name': 'validateReserveType',
  'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
  'stateMutability': 'pure',
  'type': 'function'
}, {
  'inputs': [{
    'internalType': 'address',
    'name': 'underlyingAsset',
    'type': 'address'
  }, { 'internalType': 'uint256', 'name': 'amount', 'type': 'uint256' }, {
    'internalType': 'address',
    'name': 'to',
    'type': 'address'
  }], 'name': 'withdraw', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}] as const

export default uTokenVaultAbi
