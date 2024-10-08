const walletFactoryAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gnosisSafeProxyFactory',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_singleton',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_compatibilityFallbackHandler',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_guardBeacon',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_guardOwnerBeacon',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_delegationOwnerBeacon',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_protocolOwnerBeacon',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_registry',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'safe',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'guard',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'delegationOwner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'protocolOwner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'WalletDeployed',
    type: 'event'
  },
  {
    inputs: [],
    name: 'compatibilityFallbackHandler',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'delegationOwnerBeacon',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegationController',
        type: 'address'
      }
    ],
    name: 'deploy',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_delegationController',
        type: 'address'
      }
    ],
    name: 'deployFor',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'gnosisSafeProxyFactory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'guardBeacon',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'guardOwnerBeacon',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'protocolOwnerBeacon',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'registry',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'singleton',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const

export default walletFactoryAbi
