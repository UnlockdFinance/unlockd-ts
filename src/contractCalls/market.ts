import { Address, addresses, ModuleId } from '../addresses'
import { Market, Signature } from '../types/responses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { OrderType } from '../types/subgraph'
import { ClientOptions } from '../types/networks'

export type CreateOrderInput = {
  startAmount: BigInt
  endAmount: BigInt
  startTime: number
  endTime: number
  debtToSell: BigInt
}
/**
 * @returns The transaction hash of the create market item.
 * @param {Address} underlyingAsset - The address of the underlying asset.
 * @param {OrderType} orderType - The type of the order.
 * @param {CreateOrderInput} config - The configuration of the order.
 * @param {Signature<Market>} signature - The signature of the create order.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const create = async (
  provider: unknown,
  underlyingAsset: Address,
  orderType: OrderType,
  config: CreateOrderInput,
  signature: Signature<Market>,
  options?: ClientOptions
) => {
  const contractAddress = addresses(options)[ModuleId.Market]
  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.market,
    functionName: 'create',
    args: [underlyingAsset, orderType, config, signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}

/**
 * @returns The transaction hash of the cancel market item.
 * @param {string} orderId - The order id to cancel.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const cancel = async (provider: unknown, orderId: string, options?: ClientOptions) => {
  const contractAddress = addresses(options)[ModuleId.Market]
  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.market,
    functionName: 'cancel',
    args: [orderId],
    account
  })
  return walletCli.writeContract(request)
}

/**
 * @returns The transaction hash of the bid market item.
 * @param {string} orderId - The order id to bid.
 * @param {BigInt} amountToPay - The amount to pay.
 * @param {BigInt} amountOfDebt - The amount of debt.
 * @param {Signature<Market>} signature - The signature of the bid.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const marketBid = async (
  provider: unknown,
  orderId: string,
  amountToPay: BigInt,
  amountOfDebt: BigInt,
  signature: Signature<Market>,
  options?: ClientOptions
) => {
  const contractAddress = addresses(options)[ModuleId.Market]
  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.market,
    functionName: 'bid',
    args: [orderId, amountToPay, amountOfDebt, signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}

/**
 * @returns The transaction hash of the claim market item.
 * @param {Boolean} claimOnUWallet - The claimOnUWallet flag.
 * @param {string} orderId - The order id to claim.
 * @param {Signature<Market>} signature - The signature of the claim.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const claim = async (
  provider: unknown,
  claimOnUWallet: boolean,
  orderId: string,
  signature: Signature<Market>,
  options?: ClientOptions
) => {
  const contractAddress = addresses(options)[ModuleId.Market]
  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.market,
    functionName: 'claim',
    args: [claimOnUWallet, orderId, signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}

/**
 * @returns The transaction hash of the cancel claim market item.
 * @param {string} orderId - The order id to cancel.
 * @param {Signature<Market>} signature - The signature of the cancel claim.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const cancelClaim = async (
  provider: unknown,
  orderId: string,
  signature: Signature<Market>,
  options?: ClientOptions
) => {
  const contractAddress = addresses(options)[ModuleId.Market]
  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.market,
    functionName: 'cancelClaim',
    args: [orderId, signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}

/**
 * @returns The transaction hash of the claim market item.
 * @param {Boolean} claimOnUWallet - The claimOnUWallet flag.
 * @param {string} orderId - The order id to claim.
 * @param {BigInt} amountToPay - The amount to pay.
 * @param {BigInt} amountOfDebt - The amount of debt.
 * @param {Signature<Market>} signature - The signature of the claim.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const buyNow = async (
  provider: unknown,
  claimOnUWallet: boolean,
  orderId: string,
  amountToPay: BigInt,
  amountOfDebt: BigInt,
  signature: Signature<Market>,
  options?: ClientOptions
) => {
  const contractAddress = addresses(options)[ModuleId.Market]
  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.market,
    functionName: 'buyNow',
    args: [claimOnUWallet, orderId, amountToPay, amountOfDebt, signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}
