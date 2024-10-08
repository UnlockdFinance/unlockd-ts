const buyNowAbi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'moduleId',
        type: 'uint256'
      },
      {
        internalType: 'bytes32',
        name: 'moduleVersion',
        type: 'bytes32'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'AddressesNotEquals',
    type: 'error'
  },
  {
    inputs: [],
    name: 'AmountToLow',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidRecoveredAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NotEqualDeadline',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NotValidReserve',
    type: 'error'
  },
  {
    inputs: [],
    name: 'SenderZeroAddress',
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
        indexed: false,
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'asset',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'BuyNowPayLater',
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
            components: [
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
                name: 'price',
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
            internalType: 'struct DataTypes.SignAsset',
            name: 'asset',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'assetLtv',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetLiquidationThreshold',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address'
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes'
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'marketAdapter',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'marketApproval',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'marketPrice',
            type: 'uint256'
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
        internalType: 'struct DataTypes.SignBuyNow',
        name: 'signBuyMarket',
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
    name: 'buy',
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
                name: 'price',
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
            internalType: 'struct DataTypes.SignAsset',
            name: 'asset',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'assetLtv',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetLiquidationThreshold',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address'
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes'
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'marketAdapter',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'marketApproval',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'marketPrice',
            type: 'uint256'
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
        internalType: 'struct DataTypes.SignBuyNow',
        name: 'signBuyNow',
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
        components: [
          {
            components: [
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
                name: 'price',
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
            internalType: 'struct DataTypes.SignAsset',
            name: 'asset',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'assetLtv',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetLiquidationThreshold',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address'
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes'
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'marketAdapter',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'marketApproval',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'marketPrice',
            type: 'uint256'
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
        internalType: 'struct DataTypes.SignBuyNow',
        name: 'signBuyMarket',
        type: 'tuple'
      }
    ],
    name: 'getCalculations',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'pure',
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
  }
] as const

export default buyNowAbi
