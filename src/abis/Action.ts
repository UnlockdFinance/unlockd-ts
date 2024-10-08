const actionAbi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'moduleId_',
        type: 'uint256'
      },
      {
        internalType: 'bytes32',
        name: 'moduleVersion_',
        type: 'bytes32'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'AmountExceedsDebt',
    type: 'error'
  },
  {
    inputs: [],
    name: 'AssetLocked',
    type: 'error'
  },
  {
    inputs: [],
    name: 'AssetsMismatch',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidArrayLength',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidAssetAmount',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidCurrentLiquidationThreshold',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidCurrentLtv',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidLoanOwner',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidRecoveredAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidUnderlyingAsset',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LoanNotActive',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LoanNotUpdated',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NotAssetOwner',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NotEqualDeadline',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NotEqualSender',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NotValidReserve',
    type: 'error'
  },
  {
    inputs: [],
    name: 'OrderActive',
    type: 'error'
  },
  {
    inputs: [],
    name: 'SenderZeroAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'UnhealtyLoan',
    type: 'error'
  },
  {
    inputs: [],
    name: 'UnlockdWalletNotFound',
    type: 'error'
  },
  {
    inputs: [],
    name: 'WrongNonce',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collection',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'assetId',
        type: 'bytes32'
      }
    ],
    name: 'AddCollateral',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalAssets',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address'
      }
    ],
    name: 'Borrow',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [],
    name: 'Genesis',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'moduleId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'moduleImpl',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'moduleVersion',
        type: 'bytes32'
      }
    ],
    name: 'InstallerInstallModule',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'loanId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalAssets',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'borrowIndex',
        type: 'uint256'
      }
    ],
    name: 'LoanCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'proxy',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'moduleId',
        type: 'uint256'
      }
    ],
    name: 'ProxyCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bytes32[]',
        name: 'assets',
        type: 'bytes32[]'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalAssets',
        type: 'uint256'
      }
    ],
    name: 'Repay',
    type: 'event'
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'collection',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256'
          }
        ],
        internalType: 'struct DataTypes.Asset[]',
        name: 'assets',
        type: 'tuple[]'
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'loanId',
                type: 'bytes32'
              },
              {
                internalType: 'uint256',
                name: 'aggLoanPrice',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'aggLtv',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'aggLiquidationThreshold',
                type: 'uint256'
              },
              {
                internalType: 'uint88',
                name: 'totalAssets',
                type: 'uint88'
              },
              {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256'
              }
            ],
            internalType: 'struct DataTypes.SignLoanConfig',
            name: 'loan',
            type: 'tuple'
          },
          {
            internalType: 'bytes32[]',
            name: 'assets',
            type: 'bytes32[]'
          },
          {
            internalType: 'address',
            name: 'underlyingAsset',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256'
          }
        ],
        internalType: 'struct DataTypes.SignAction',
        name: 'signAction',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint8',
            name: 'v',
            type: 'uint8'
          },
          {
            internalType: 'bytes32',
            name: 'r',
            type: 'bytes32'
          },
          {
            internalType: 'bytes32',
            name: 's',
            type: 'bytes32'
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256'
          }
        ],
        internalType: 'struct DataTypes.EIP712Signature',
        name: 'sig',
        type: 'tuple'
      }
    ],
    name: 'borrow',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256'
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'loanId',
                type: 'bytes32'
              },
              {
                internalType: 'uint256',
                name: 'aggLoanPrice',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'aggLtv',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'aggLiquidationThreshold',
                type: 'uint256'
              },
              {
                internalType: 'uint88',
                name: 'totalAssets',
                type: 'uint88'
              },
              {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256'
              }
            ],
            internalType: 'struct DataTypes.SignLoanConfig',
            name: 'loan',
            type: 'tuple'
          },
          {
            internalType: 'bytes32[]',
            name: 'assets',
            type: 'bytes32[]'
          },
          {
            internalType: 'address',
            name: 'underlyingAsset',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256'
          }
        ],
        internalType: 'struct DataTypes.SignAction',
        name: 'signAction',
        type: 'tuple'
      }
    ],
    name: 'calculateDigest',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'digest',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32'
      }
    ],
    name: 'getAmountToRepay',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32'
      }
    ],
    name: 'getLoan',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'loanId',
            type: 'bytes32'
          },
          {
            internalType: 'uint88',
            name: 'totalAssets',
            type: 'uint88'
          },
          {
            internalType: 'enum Constants.LoanState',
            name: 'state',
            type: 'uint8'
          },
          {
            internalType: 'address',
            name: 'underlyingAsset',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          }
        ],
        internalType: 'struct DataTypes.Loan',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'getNonce',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'moduleId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'moduleVersion',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'loanId',
                type: 'bytes32'
              },
              {
                internalType: 'uint256',
                name: 'aggLoanPrice',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'aggLtv',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'aggLiquidationThreshold',
                type: 'uint256'
              },
              {
                internalType: 'uint88',
                name: 'totalAssets',
                type: 'uint88'
              },
              {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256'
              }
            ],
            internalType: 'struct DataTypes.SignLoanConfig',
            name: 'loan',
            type: 'tuple'
          },
          {
            internalType: 'bytes32[]',
            name: 'assets',
            type: 'bytes32[]'
          },
          {
            internalType: 'address',
            name: 'underlyingAsset',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256'
          }
        ],
        internalType: 'struct DataTypes.SignAction',
        name: 'signAction',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint8',
            name: 'v',
            type: 'uint8'
          },
          {
            internalType: 'bytes32',
            name: 'r',
            type: 'bytes32'
          },
          {
            internalType: 'bytes32',
            name: 's',
            type: 'bytes32'
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256'
          }
        ],
        internalType: 'struct DataTypes.EIP712Signature',
        name: 'sig',
        type: 'tuple'
      }
    ],
    name: 'repay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const

export default actionAbi
