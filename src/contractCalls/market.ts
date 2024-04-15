import { Address, addresses, ModuleId } from '../addresses'
import { Signature } from '../types/responses'
import { client, ClientOptions } from '../client'
import { abis } from '../abis'

export enum OrderType {
  TYPE_LIQUIDATION_AUCTION,
  //Auction with BIDs
  TYPE_AUCTION,
  // Fixed price only buynow function
  TYPE_FIXED_PRICE,
  // Fixed price and auction with bids
  TYPE_FIXED_PRICE_AND_AUCTION
}

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
 * @param {Signature} signature - The signature of the create order.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const create = async (
  underlyingAsset: Address,
  orderType: OrderType,
  config: CreateOrderInput,
  signature: Signature,
  options?: ClientOptions
) => {
  const contractAddress = addresses(options)[ModuleId.Market]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.market,
    functionName: 'create',
    args: [underlyingAsset, orderType, config, signature.data, signature.signature],
    account
  })
}

/**
 * @returns The transaction hash of the cancel market item.
 * @param {string} orderId - The order id to cancel.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const cancel = async (orderId: string, options?: ClientOptions) => {
  const contractAddress = addresses(options)[ModuleId.Market]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.market,
    functionName: 'cancel',
    args: [orderId],
    account
  })
}

/**
 * @returns The transaction hash of the bid market item.
 * @param {string} orderId - The order id to bid.
 * @param {BigInt} amountToPay - The amount to pay.
 * @param {BigInt} amountOfDebt - The amount of debt.
 * @param {Signature} signature - The signature of the bid.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const marketBid = async (
  orderId: string,
  amountToPay: BigInt,
  amountOfDebt: BigInt,
  signature: Signature,
  options?: ClientOptions
) => {
  const contractAddress = addresses(options)[ModuleId.Market]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.market,
    functionName: 'bid',
    args: [orderId, amountToPay, amountOfDebt, signature.data, signature.signature],
    account
  })
}

/**
 * @returns The transaction hash of the claim market item.
 * @param {Boolean} claimOnUWallet - The claimOnUWallet flag.
 * @param {string} orderId - The order id to claim.
 * @param {Signature} signature - The signature of the claim.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const claim = async (
  claimOnUWallet: boolean,
  orderId: string,
  signature: Signature,
  options?: ClientOptions
) => {
  const contractAddress = addresses(options)[ModuleId.Market]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.market,
    functionName: 'claim',
    args: [claimOnUWallet, orderId, signature.data, signature.signature],
    account
  })
}

/**
 * @returns The transaction hash of the cancel claim market item.
 * @param {string} orderId - The order id to cancel.
 * @param {Signature} signature - The signature of the cancel claim.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const cancelClaim = async (orderId: string, signature: Signature, options?: ClientOptions) => {
  const contractAddress = addresses(options)[ModuleId.Market]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.market,
    functionName: 'cancelClaim',
    args: [orderId, signature.data, signature.signature],
    account
  })
}

/**
 * @returns The transaction hash of the claim market item.
 * @param {Boolean} claimOnUWallet - The claimOnUWallet flag.
 * @param {string} orderId - The order id to claim.
 * @param {BigInt} amountToPay - The amount to pay.
 * @param {BigInt} amountOfDebt - The amount of debt.
 * @param {Signature} signature - The signature of the claim.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const buyNow = async (
  claimOnUWallet: boolean,
  orderId: string,
  amountToPay: BigInt,
  amountOfDebt: BigInt,
  signature: Signature,
  options?: ClientOptions
) => {
  const contractAddress = addresses(options)[ModuleId.Market]
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.market,
    functionName: 'buyNow',
    args: [claimOnUWallet, orderId, amountToPay, amountOfDebt, signature.data, signature.signature],
    account
  })
}
