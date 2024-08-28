export type EthereumProvider = { request(...args: any): Promise<any> }

/**
 * @description Type guard for the ethereum provider
 *
 */
export function isEthereumProvider(provider: any): provider is EthereumProvider {
  return provider && typeof provider.request === 'function'
}
