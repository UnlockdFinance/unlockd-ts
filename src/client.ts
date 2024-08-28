import { createPublicClient, createWalletClient, custom, http, PublicClient, WalletClient } from 'viem'
import { Chain, Chains, viemChains } from './types/networks'
import { EthereumProvider, isEthereumProvider } from './types/provider'

async function supportsPublicActions(provider: EthereumProvider): Promise<boolean> {
  try {
    await provider.request({ method: 'eth_blockNumber' })
    return true
  } catch (error) {
    return false
  }
}

export const client = async ({ provider, network }: { provider: unknown; network?: Chain }): Promise<WalletClient> => {
  if (!isEthereumProvider(provider)) {
    throw new Error('Not a provider.')
  }

  return createWalletClient({
    chain: viemChains[network ?? Chains.Mainnet],
    transport: custom(provider)
  })
}
export const publicClient = async ({
  provider,
  network
}: {
  provider: unknown
  network?: Chain
}): Promise<PublicClient> => {
  if (!isEthereumProvider(provider)) {
    throw new Error('Not a provider.')
  }

  const hasPublicActions = await supportsPublicActions(provider)
  const transport = hasPublicActions ? custom(provider) : http()

  return createPublicClient({
    chain: viemChains[network ?? Chains.Mainnet],
    transport
  })
}
