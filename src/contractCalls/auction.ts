import { Signature } from '../types/responses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { addresses, ModuleId } from '../addresses'
import { Auction } from '../types/responses'
import { chains, type ClientOptions } from '../types/networks'
import { Address, WriteContractReturnType } from 'viem'
import { Nft } from '../types/requests'

/**
 * @returns The transaction hash of the bid.
 *
 * @param provider EIP-1193 provider
 * @param {Signature<Auction>} signature - The signature of the bid.
 * @param {bigint} args.amountToPay - The amount to pay.
 * @param {bigint} args.amountOfDebt - The amount of debt.
 * @param {ClientOptions} options - The client options.
 *
 * @example
 * ```ts
 * const signature = ...
 * const result = await bid(1, 1, signature)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const bid = async ({
  provider,
  signature,
  args,
  options
}: {
  provider: unknown
  signature: Signature<Auction>
  args: {
    amountToPay: bigint
    amountOfDebt: bigint
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { amountToPay, amountOfDebt } = args
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.Auction]
  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
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
 *
 * @param provider EIP-1193 provider
 * @param {Signature<Auction>} signature - The signature of the redeem.
 * @param {ClientOptions} options - The client options.
 *
 * @example
 * ```ts
 * const signature = ...
 * const result = await redeem(signature)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const redeem = async ({
  provider,
  signature,
  options
}: {
  provider: unknown
  signature: Signature<Auction>
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.Auction]
  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
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
 * @returns The transaction hash of the finalize.
 *
 * @param provider EIP-1193 provider
 * @param {Signature<Auction>} signature - The signature of the finalize.
 * @param {boolean} args.claimOnUWallet - The claimOnUWallet flag.
 * @param {Address} args.orderId - The orderId.
 * @param {Nft} args.asset - The NFT to finalize.
 * @param {ClientOptions} options - The client options.
 *
 * @example
 * ```ts
 * const signature = ...
 * const result = await finalize(claimOnUWallet, orderId, signature)
 * ```
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const finalize = async ({
  provider,
  signature,
  args,
  options
}: {
  provider: unknown
  signature: Signature<Auction>
  args: {
    claimOnUWallet: boolean
    orderId: Address
    asset: Nft
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { claimOnUWallet, orderId, asset } = args
  const chain = chains(options)
  const contractAddress = addresses(chain)[ModuleId.Auction]
  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.auction,
    functionName: 'finalize',
    args: [claimOnUWallet, orderId, asset, signature.data, signature.signature],
    account
  })
  return walletCli.writeContract(request)
}
