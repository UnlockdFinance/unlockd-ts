import * as viemChains from 'viem/chains'
import { InvalidChainOptionError } from '../errors'

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
    throw new Error(
      `Unsupported network: ${network}. Available networks: ${allSupportedChains.map(c => c.network).join(', ')}`
    )
  }

  return chain
}

const ChainById = (chainId: Chain['id']): Chain => {
  const chain = allSupportedChains.find(chain => chain.id === chainId)

  if (!chain) {
    throw new Error(
      `Unsupported chain with chainId: ${chainId}. Available chains: ${allSupportedChains.map(c => c.id).join(', ')}`
    )
  }

  return chain
}

/**
 * Returns chain from options
 */
export const chains = (options?: ClientOptions): Chain => {
  if (!options) return Chains.Mainnet

  const definedOptions = [
    options?.network !== undefined,
    options?.chain !== undefined,
    options?.chainId !== undefined
  ].filter(Boolean).length

  if (definedOptions > 1) {
    throw new InvalidChainOptionError()
  }

  if (options?.network) return ChainByNetwork(options.network)
  if (options?.chain) return ChainById(options.chain.id)
  if (options?.chainId) return ChainById(options.chainId)

  throw new Error('Error related to options, chains.')
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
