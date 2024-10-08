const nftBatchTransferAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_punkContract',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'BuyFailed',
    type: 'error'
  },
  {
    inputs: [],
    name: 'CantReceiveETH',
    type: 'error'
  },
  {
    inputs: [],
    name: 'Fallback',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NotOwner',
    type: 'error'
  },
  {
    inputs: [],
    name: 'TransferFailed',
    type: 'error'
  },
  {
    inputs: [],
    name: 'TransferFromFailed',
    type: 'error'
  },
  {
    stateMutability: 'payable',
    type: 'fallback'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'contractAddress',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256'
          }
        ],
        internalType: 'struct NFTBatchTransfer.NftTransfer[]',
        name: 'nftTransfers',
        type: 'tuple[]'
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      }
    ],
    name: 'batchPunkTransferFrom',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'contractAddress',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256'
          }
        ],
        internalType: 'struct NFTBatchTransfer.NftTransfer[]',
        name: 'nftTransfers',
        type: 'tuple[]'
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      }
    ],
    name: 'batchTransferFrom',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'punkContract',
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
    stateMutability: 'payable',
    type: 'receive'
  }
] as const

export default nftBatchTransferAbi
