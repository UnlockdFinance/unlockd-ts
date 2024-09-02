const nftBatchTransferInterface: string[] = [
  'function batchPunkTransferFrom((address contractAddress, uint256 tokenId)[] nftTransfers, address to) payable',
  'function batchTransferFrom((address contractAddress, uint256 tokenId)[] nftTransfers, address to) payable',
  'function punkContract() view returns (address)',
  'error BuyFailed()',
  'error CantReceiveETH()',
  'error Fallback()',
  'error NotOwner()',
  'error TransferFailed()',
  'error TransferFromFailed()'
] as const

export default nftBatchTransferInterface
