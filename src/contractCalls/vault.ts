import { erc20Abi, WriteContractReturnType } from 'viem'
import { addresses, UnderlyingAsset, underlyingAssets } from '../addresses'
import { chains, ClientOptions } from '../types/networks'
import { client, publicClient } from '../client'
import { abis } from '../abis'

/**
 * @description Check if the user has enough allowance to deposit to the vault
 *
 * @param provider EIP-1193 provider
 * @param {UnderlyingAsset} args.underlyingAsset - The asset to send
 * @param {bigint} args.amount - The amount to send
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const isApprovedDepositToVault = async ({
  provider,
  args,
  options
}: {
  provider: unknown
  args: {
    underlyingAsset: UnderlyingAsset
    amount: bigint
  }
  options?: ClientOptions
}): Promise<boolean> => {
  const { underlyingAsset, amount } = args
  const chain = chains(options)
  const uTokenFactoryAddress = addresses(chain).uTokenFactory
  const underlyingAssetAddress = underlyingAssets(chain)[underlyingAsset]

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()

  const allowance = await pubCli.readContract({
    address: underlyingAssetAddress,
    abi: erc20Abi,
    functionName: 'allowance',
    args: [account, uTokenFactoryAddress]
  })
  return allowance >= amount
}

/**
 * @description Approve the underlying asset to be deposited to the vault
 *
 * @param provider EIP-1193 provider
 * @param {UnderlyingAsset} args.underlyingAsset - The asset to send
 * @param {bigint} args.amount - The amount to send
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const approveDepositToVault = async ({
  provider,
  args,
  options
}: {
  provider: unknown
  args: {
    underlyingAsset: UnderlyingAsset
    amount: bigint
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { underlyingAsset, amount } = args
  const chain = chains(options)
  const uTokenFactoryAddress = addresses(chain).uTokenFactory
  const underlyingAssetAddress = underlyingAssets(chain)[underlyingAsset]

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: underlyingAssetAddress,
    abi: erc20Abi,
    functionName: 'approve',
    args: [uTokenFactoryAddress, amount],
    account
  })
  return walletCli.writeContract(request)
}

/**
 * @description Send underlying assets to the vault
 *
 * @param provider EIP-1193 provider
 * @param {UnderlyingAsset} args.underlyingAsset - The asset to send
 * @param {bigint} args.amount - The amount to send
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const depositToVault = async ({
  provider,
  args,
  options
}: {
  provider: unknown
  args: {
    underlyingAsset: UnderlyingAsset
    amount: bigint
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { underlyingAsset, amount } = args
  const chain = chains(options)
  const uTokenFactoryAddress = addresses(chain).uTokenFactory
  const underlyingAssetAddress = underlyingAssets(chain)[underlyingAsset]

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: uTokenFactoryAddress,
    abi: abis.uTokenFactory,
    functionName: 'deposit',
    args: [underlyingAssetAddress, amount, account],
    account
  })
  return walletCli.writeContract(request)
}

/**
 * @description Withdraw underlying assets from the vault
 *
 * @param provider EIP-1193 provider
 * @param {UnderlyingAsset} args.underlyingAsset - The asset to send
 * @param {bigint} args.amount - The amount to send
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const withdrawFromVault = async ({
  provider,
  args,
  options
}: {
  provider: unknown
  args: {
    underlyingAsset: UnderlyingAsset
    amount: bigint
  }
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { underlyingAsset, amount } = args
  const chain = chains(options)
  const uTokenFactoryAddress = addresses(chain).uTokenFactory
  const underlyingAssetAddress = underlyingAssets(chain)[underlyingAsset]

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: uTokenFactoryAddress,
    abi: abis.uTokenFactory,
    functionName: 'withdraw',
    args: [underlyingAssetAddress, amount, account],
    account
  })
  return walletCli.writeContract(request)
}
