import { createPublicClient, createTestClient, createWalletClient, custom, http } from 'viem'
import { anvil, foundry, mainnet, sepolia } from 'viem/chains'

export type ClientOptions = {
  network?: Chain
}
export type Chain = 'mainnet' | 'sepolia'

// @ts-ignore
const mainnetClient = () => createWalletClient({ chain: mainnet, transport: custom(window.ethereum!) })

// @ts-ignore
const sepoliaClient = () => createWalletClient({ chain: sepolia, transport: custom(window.ethereum!) })

export const publicClient = (network?: Chain) => {
  return createPublicClient({
    chain: network === 'sepolia' ? sepolia : mainnet,
    transport: http()
  })
}
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
