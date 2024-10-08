const marketAbi = [
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
    name: 'AmountToLow',
    type: 'error'
  },
  {
    inputs: [],
    name: 'AssetLocked',
    type: 'error'
  },
  {
    inputs: [],
    name: 'DebtExceedsAmount',
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
    name: 'InvalidEndAmount',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidEndTime',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidLoanId',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidLoanOwner',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidOrderBuyer',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidOrderId',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidOrderOwner',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidParams',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidRecoveredAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidStartAmount',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidStartTime',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidTotalAmount',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidUnderlyingAsset',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LoanBlocked',
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
    name: 'NotEqualOrderOwner',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NotValidReserve',
    type: 'error'
  },
  {
    inputs: [],
    name: 'OrderNotAllowed',
    type: 'error'
  },
  {
    inputs: [],
    name: 'ProtocolOwnerZeroAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'SenderZeroAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'TimestampExpired',
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
    inputs: [],
    name: 'ZeroAddress',
    type: 'error'
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
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'assetId',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountToPay',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountOfDebt',
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
        internalType: 'address',
        name: 'user',
        type: 'address'
      }
    ],
    name: 'MarketBid',
    type: 'event'
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
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'assetId',
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
        internalType: 'address',
        name: 'user',
        type: 'address'
      }
    ],
    name: 'MarketBuyNow',
    type: 'event'
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
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      }
    ],
    name: 'MarketCancelAuction',
    type: 'event'
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
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'assetId',
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
        internalType: 'address',
        name: 'user',
        type: 'address'
      }
    ],
    name: 'MarketCancelBid',
    type: 'event'
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
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'assetId',
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
        internalType: 'address',
        name: 'bidder',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address'
      }
    ],
    name: 'MarketClaim',
    type: 'event'
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
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'assetId',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'collection',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'MarketCreated',
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
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32'
      },
      {
        internalType: 'uint128',
        name: 'amountToPay',
        type: 'uint128'
      },
      {
        internalType: 'uint128',
        name: 'amountOfDebt',
        type: 'uint128'
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
            internalType: 'bytes32',
            name: 'assetId',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'collection',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetPrice',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetLtv',
            type: 'uint256'
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
        internalType: 'struct DataTypes.SignMarket',
        name: 'signMarket',
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
    name: 'bid',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'claimOnUWallet',
        type: 'bool'
      },
      {
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32'
      },
      {
        internalType: 'uint256',
        name: 'amountToPay',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'amountOfDebt',
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
            internalType: 'bytes32',
            name: 'assetId',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'collection',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetPrice',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetLtv',
            type: 'uint256'
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
        internalType: 'struct DataTypes.SignMarket',
        name: 'signMarket',
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
    name: 'buyNow',
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
            internalType: 'bytes32',
            name: 'assetId',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'collection',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetPrice',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetLtv',
            type: 'uint256'
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
        internalType: 'struct DataTypes.SignMarket',
        name: 'signMarket',
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
        name: 'orderId',
        type: 'bytes32'
      }
    ],
    name: 'cancel',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32'
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
            internalType: 'bytes32',
            name: 'assetId',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'collection',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetPrice',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetLtv',
            type: 'uint256'
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
        internalType: 'struct DataTypes.SignMarket',
        name: 'signMarket',
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
    name: 'cancelClaim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'claimOnUWallet',
        type: 'bool'
      },
      {
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32'
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
            internalType: 'bytes32',
            name: 'assetId',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'collection',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetPrice',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetLtv',
            type: 'uint256'
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
        internalType: 'struct DataTypes.SignMarket',
        name: 'signMarket',
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
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'underlyingAsset',
        type: 'address'
      },
      {
        internalType: 'enum Constants.OrderType',
        name: 'orderType',
        type: 'uint8'
      },
      {
        components: [
          {
            internalType: 'uint128',
            name: 'startAmount',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'endAmount',
            type: 'uint128'
          },
          {
            internalType: 'uint40',
            name: 'startTime',
            type: 'uint40'
          },
          {
            internalType: 'uint40',
            name: 'endTime',
            type: 'uint40'
          },
          {
            internalType: 'uint128',
            name: 'debtToSell',
            type: 'uint128'
          }
        ],
        internalType: 'struct IMarketModule.CreateOrderInput',
        name: 'config',
        type: 'tuple'
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
            internalType: 'bytes32',
            name: 'assetId',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'collection',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetPrice',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetLtv',
            type: 'uint256'
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
        internalType: 'struct DataTypes.SignMarket',
        name: 'signMarket',
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
    name: 'create',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'underlyingAsset',
        type: 'address'
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
      }
    ],
    name: 'getBuyNowPrice',
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
        name: 'orderId',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'underlyingAsset',
        type: 'address'
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
      }
    ],
    name: 'getMinBidPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: 'minBid',
        type: 'uint256'
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
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32'
      }
    ],
    name: 'getOrder',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'orderId',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'enum Constants.OrderType',
            name: 'orderType',
            type: 'uint8'
          },
          {
            internalType: 'uint88',
            name: 'countBids',
            type: 'uint88'
          },
          {
            internalType: 'uint256',
            name: 'bidderDebtPayed',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'bidderBonus',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'loanId',
                type: 'bytes32'
              },
              {
                internalType: 'bytes32',
                name: 'assetId',
                type: 'bytes32'
              },
              {
                internalType: 'uint128',
                name: 'startAmount',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'endAmount',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'debtToSell',
                type: 'uint128'
              }
            ],
            internalType: 'struct DataTypes.OfferItem',
            name: 'offer',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint40',
                name: 'startTime',
                type: 'uint40'
              },
              {
                internalType: 'uint40',
                name: 'endTime',
                type: 'uint40'
              }
            ],
            internalType: 'struct DataTypes.Timeframe',
            name: 'timeframe',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'loanId',
                type: 'bytes32'
              },
              {
                internalType: 'address',
                name: 'buyer',
                type: 'address'
              },
              {
                internalType: 'uint128',
                name: 'amountToPay',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'amountOfDebt',
                type: 'uint128'
              }
            ],
            internalType: 'struct DataTypes.Bid',
            name: 'bid',
            type: 'tuple'
          }
        ],
        internalType: 'struct DataTypes.Order',
        name: '',
        type: 'tuple'
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
  }
] as const

export default marketAbi
