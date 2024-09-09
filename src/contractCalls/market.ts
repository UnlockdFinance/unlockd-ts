import { addresses, ModuleId } from '../addresses'
import { Market, Signature } from '../types/responses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { OrderType } from '../types/subgraph'
import { chains, type ClientOptions } from '../types/networks'
import { Address, WriteContractReturnType } from 'viem'

/**
 * @returns The transaction hash of the create market item.
 *
 * @param provider EIP-1193 provider
 * @param {Signature<Market>} signature - The signature of the create order.
 * @param {Address} args.underlyingAsset - The address of the underlying asset.
 * @param {OrderType} args.orderType - The type of the order.
 * @param {OrderType} args.startAmount - The start amount of the order.
 * @param {OrderType} args.endAmount - The end amount of the order.
 * @param {OrderType} args.startTime - The start time of the order.
 * @param {OrderType} args.endTime - The end time of the order.
 * @param {OrderType} args.debtToSell - The debt to sell.
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const create = async ({
  provider,
  signature,
  args,
  options
}: {
  provider: unknown
  signature: Signature<Market>
  args: {
    underlyingAsset: Address
    orderType: OrderType
    startAmount: bigint
    endAmount: bigint
    startTime: number
    endTime: number
    debtToSell: bigint
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { underlyingAsset, orderType, startAmount, endAmount, startTime, endTime, debtToSell } = args
  const config = {
    startAmount,
    endAmount,
    startTime,
    endTime,
    debtToSell
  }
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.Market]
  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
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
 *
 * @param provider EIP-1193 provider
 * @param {Address} args.orderId - The order id to cancel.
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const cancel = async ({
  provider,
  args,
  options
}: {
  provider: unknown
  args: {
    orderId: Address
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { orderId } = args
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.Market]
  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
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
 *
 * @param provider EIP-1193 provider
 * @param {Signature<Market>} signature - The signature of the bid.
 * @param {Address} args.orderId - The order id to bid.
 * @param {bigint} args.amountToPay - The amount to pay.
 * @param {bigint} args.amountOfDebt - The amount of debt.
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const marketBid = async ({
  provider,
  signature,
  args,
  options
}: {
  provider: unknown
  signature: Signature<Market>
  args: {
    orderId: Address
    amountToPay: bigint
    amountOfDebt: bigint
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { orderId, amountToPay, amountOfDebt } = args
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.Market]
  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
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
 *
 * @param provider EIP-1193 provider
 * @param {Signature<Market>} signature - The signature of the claim.
 * @param {boolean} args.claimOnUWallet - The claimOnUWallet flag.
 * @param {Address} args.orderId - The order id to claim.
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const claim = async ({
  provider,
  signature,
  args,
  options
}: {
  provider: unknown
  signature: Signature<Market>
  args: {
    claimOnUWallet: boolean
    orderId: Address
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { claimOnUWallet, orderId } = args
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.Market]
  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
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
 *
 * @param provider EIP-1193 provider
 * @param {Signature<Market>} signature - The signature of the cancel claim.
 * @param {Address} args.orderId - The order id to cancel.
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const cancelClaim = async ({
  provider,
  signature,
  args,
  options
}: {
  provider: unknown
  signature: Signature<Market>
  args: {
    orderId: Address
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { orderId } = args
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.Market]
  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
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
 *
 * @param provider EIP-1193 provider
 * @param {Signature<Market>} signature - The signature of the claim.
 * @param {boolean} args.claimOnUWallet - The claimOnUWallet flag.
 * @param {Address} args.orderId - The order id to claim.
 * @param {bigint} args.amountToPay - The amount to pay.
 * @param {bigint} args.amountOfDebt - The amount of debt.
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const buyNow = async ({
  provider,
  signature,
  args,
  options
}: {
  provider: unknown
  signature: Signature<Market>
  args: {
    claimOnUWallet: boolean
    orderId: Address
    amountToPay: bigint
    amountOfDebt: bigint
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { claimOnUWallet, orderId, amountToPay, amountOfDebt } = args
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.Market]
  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
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
