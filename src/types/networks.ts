import * as viemChains from 'viem/chains'
import { InvalidChainGenericError, InvalidChainOptionError, UnsupportedChainError } from '../errors'

/**
 * Networks supported by the Unlockd
 */
const supportedNetworks = ['mainnet', 'sepolia', 'polygonAmoy', 'localhost'] as const

/**
 * Chain object (allows only supported chains)
 */
export type Chain = (typeof allSupportedChains)[number]

/**
 * Client has 3 ways to pass in the preferred network:
 * @param network — string
 * @param chain - chain object exported from viem/chains
 * @param chainId - number
 * Only one param can be defined at at time.
 */
export type ClientOptions = {
  network?: SupportedNetworks
  chain?: Omit<Chain, 'network'>
  chainId?: Chain['id']
}

/**
 * Utilities
 */
type SupportedNetworks = (typeof supportedNetworks)[number]
const isSupportedNetwork = (key: string): key is SupportedNetworks => {
  return (supportedNetworks as readonly string[]).includes(key)
}

const allSupportedChains: Array<viemChains.Chain & { network: SupportedNetworks }> = []
for (const [key, chain] of Object.entries(viemChains)) {
  if (typeof chain !== 'object') continue
  if (!('id' in chain)) continue
  if (!isSupportedNetwork(key)) continue
  allSupportedChains.push({ ...chain, network: key })
}

const ChainByNetwork = (network: SupportedNetworks): Chain => {
  const chain = allSupportedChains.find(chain => chain.network === network)
  if (!chain) {
    throw new UnsupportedChainError(
      `Unsupported network: ${network}. Available networks: ${allSupportedChains.map(c => c.network).join(', ')}`,
      'network'
    )
  }
  return chain
}

const ChainById = (chainId: Chain['id']): Chain => {
  const chain = allSupportedChains.find(chain => chain.id === chainId)
  if (!chain) {
    throw new UnsupportedChainError(
      `Unsupported chainId: ${chainId}. Available chains: ${allSupportedChains.map(c => c.id).join(', ')}`,
      'chainId'
    )
  }
  return chain
}

const ChainByObj = (chainParam: Omit<Chain, 'network'>): Chain => {
  const chain = allSupportedChains.find(chain => chain.id === chainParam.id)
  if (!chain) {
    throw new UnsupportedChainError(
      `Unsupported chain: ${chainParam.name}. Available chains: ${allSupportedChains.map(c => c.name).join(', ')}`,
      'chain'
    )
  }
  return chain
}

/**
 * Returns chain from options
 */
export const chains = (options?: ClientOptions): Chain => {
  if (!options?.network && !options?.chain && !options?.chainId) return Chains.Mainnet

  const definedOptions = [
    options?.network !== undefined,
    options?.chain !== undefined,
    options?.chainId !== undefined
  ].filter(Boolean).length

  if (definedOptions > 1) {
    throw new InvalidChainOptionError()
  }

  if (options?.network) return ChainByNetwork(options.network)
  if (options?.chain) return ChainByObj(options.chain)
  if (options?.chainId) return ChainById(options.chainId)

  throw new InvalidChainGenericError()
}

/**
 * Exported chains
 */
export const Chains = {
  Mainnet: ChainByNetwork('mainnet') as Chain,
  PolygonAmoy: ChainByNetwork('polygonAmoy') as Chain,
  Sepolia: ChainByNetwork('sepolia') as Chain,
  Localhost: ChainByNetwork('localhost') as Chain
} as const
