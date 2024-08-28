import { mainnet, sepolia, polygonAmoy, localhost } from 'viem/chains'

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

export const viemChains = {
  [Chains.Mainnet]: mainnet,
  [Chains.Amoy]: polygonAmoy,
  [Chains.Sepolia]: sepolia,
  [Chains.Localhost]: localhost
}
