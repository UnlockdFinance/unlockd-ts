const walletRegistryAbi = [
  {
    inputs: [],
    name: 'DelegationWalletRegistry__onlyFactoryOrOwner',
    type: 'error'
  },
  {
    inputs: [],
    name: 'DelegationWalletRegistry__setFactory_invalidAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'DelegationWalletRegistry__setWallet_invalidDelegationOwnerAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'DelegationWalletRegistry__setWallet_invalidGuardAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'DelegationWalletRegistry__setWallet_invalidOwnerAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'DelegationWalletRegistry__setWallet_invalidProtocolOwnerAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'DelegationWalletRegistry__setWallet_invalidWalletAddress',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    inputs: [],
    name: 'delegationWalletFactory',
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
        name: '_owner',
        type: 'address'
      }
    ],
    name: 'getOwnerWalletAddresses',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]'
      }
    ],
    stateMutability: 'view',
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
        internalType: 'uint256',
        name: '_index',
        type: 'uint256'
      }
    ],
    name: 'getOwnerWalletAt',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'wallet',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'guard',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'guardOwner',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'delegationOwner',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'protocolOwner',
            type: 'address'
          }
        ],
        internalType: 'struct IDelegationWalletRegistry.Wallet',
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
        name: '_wallet',
        type: 'address'
      }
    ],
    name: 'getWallet',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'wallet',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'guard',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'guardOwner',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'delegationOwner',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'protocolOwner',
            type: 'address'
          }
        ],
        internalType: 'struct IDelegationWalletRegistry.Wallet',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
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
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegationWalletFactory',
        type: 'address'
      }
    ],
    name: 'setFactory',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_wallet',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_guard',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_guardOwner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_delegationOwner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_protocolOwner',
        type: 'address'
      }
    ],
    name: 'setWallet',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const

export default walletRegistryAbi
