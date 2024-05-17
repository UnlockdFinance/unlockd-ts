export type ClientOptions = {
  network?: Chain
}
export type Chain = 'mainnet' | 'sepolia' | 'amoy' | 'localhost'

export enum Chains {
  Mainnet = 'mainnet',
  Amoy = 'amoy',
  Sepolia = 'sepolia',
  Localhost = 'localhost'
}
