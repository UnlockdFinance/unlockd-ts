import { createPublicClient, createWalletClient, custom, http, PublicClient, WalletClient } from 'viem'
import { type Chain } from './types/networks'
import { EthereumProvider, isEthereumProvider } from './types/provider'
import { InvalidProviderError } from './errors'

async function supportsPublicActions(provider: EthereumProvider): Promise<boolean> {
  try {
    await provider.request({ method: 'eth_blockNumber' })
    return true
  } catch (error) {
    return false
  }
}

export const client = async ({ provider, chain }: { provider: unknown; chain: Chain }): Promise<WalletClient> => {
  if (!isEthereumProvider(provider)) {
    throw new InvalidProviderError()
  }

  return createWalletClient({
    chain,
    transport: custom(provider)
  })
}
export const publicClient = async ({ provider, chain }: { provider: unknown; chain: Chain }): Promise<PublicClient> => {
  if (!isEthereumProvider(provider)) {
    throw new InvalidProviderError()
  }

  const hasPublicActions = await supportsPublicActions(provider)
  const transport = hasPublicActions ? custom(provider) : http()

  return createPublicClient({
    chain,
    transport
  })
}
