import { createPublicClient, createTestClient, createWalletClient, custom, http } from 'viem'
import { mainnet, sepolia } from 'viem/chains'
import { Chain } from './types/networks'

// @ts-ignore
const mainnetClient = () => createWalletClient({ chain: mainnet, transport: custom(window.ethereum!) })
// @ts-ignore
const mainnetPublicClient = () => createPublicClient({ chain: mainnet, transport: custom(window.ethereum!) })

// @ts-ignore
const sepoliaClient = () => createWalletClient({ chain: sepolia, transport: custom(window.ethereum!) })
// @ts-ignore
const sepoliaPublicClient = () => createPublicClient({ chain: sepolia, transport: custom(window.ethereum!) })

export const client = (network?: Chain) => {
  switch (network) {
    case 'mainnet':
      return mainnetClient()
    case 'sepolia':
      return sepoliaClient()
    default:
      return mainnetClient()
  }
}
export const publicClient = (network?: Chain) => {
  switch (network) {
    case 'mainnet':
      return mainnetPublicClient()
    case 'sepolia':
      return sepoliaPublicClient()
    default:
      return mainnetPublicClient()
  }
}
