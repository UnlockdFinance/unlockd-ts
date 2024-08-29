import { Signature } from '../types/responses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { addresses, ModuleId } from '../addresses'
import { Auction } from '../types/responses'
import { ClientOptions } from '../types/networks'

/**
 * @returns The transaction hash of the bid.
 * @param {BigInt} amountToPay - The amount to pay.
 * @param {BigInt} amountOfDebt - The amount of debt.
 * @param {Signature<Auction>} signature - The signature of the bid.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 * @example
 * ```ts
 * const signature = ...
 * const result = await bid(1, 1, signature)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const bid = async (
  provider: unknown,
  amountToPay: BigInt,
  amountOfDebt: BigInt,
  signature: Signature<Auction>,
  options?: ClientOptions
) => {
  const contractAddress = addresses(options)[ModuleId.Auction]
  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.auction,
    functionName: 'bid',
    args: [amountToPay, amountOfDebt, signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}

/**
 * @returns The transaction hash of the redeem.
 * @param {Signature<Auction>} signature - The signature of the redeem.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 * @example
 * ```ts
 * const signature = ...
 * const result = await redeem(signature)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const redeem = async (
  provider: unknown,
  signature: Signature<Auction>,
  options?: ClientOptions
): Promise<any> => {
  const contractAddress = addresses(options)[ModuleId.Auction]
  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.auction,
    functionName: 'redeem',
    args: [signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}
/**
 * @returns The transaction hash of the redeem.
 * @param {Boolean} claimOnUWallet - The claimOnUWallet flag.
 * @param {String} orderId - The orderId.
 * @param {Signature<Auction>} signature - The signature of the redeem.
 * @param {ClientOptions} options - The client options, default value is browser wallet
 * @example
 * ```ts
 * const signature = ...
 * const result = await finalize(claimOnUWallet, orderId, signature)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const finalize = async (
  provider: unknown,
  claimOnUWallet: boolean,
  orderId: string,
  signature: Signature<Auction>,
  options?: ClientOptions
) => {
  const contractAddress = addresses(options)[ModuleId.Auction]
  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.auction,
    functionName: 'finalize',
    args: [claimOnUWallet, orderId, signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}
