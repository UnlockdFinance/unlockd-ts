import { addresses } from '../addresses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { chains, type ClientOptions } from '../types/networks'
import { WriteContractReturnType } from 'viem'

/**
 * @description Create the Unlockd abstract wallet.
 *
 * @param provider EIP-1193 provider
 * @param {ClientOptions} options
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const createWallet = async ({
  provider,
  options
}: {
  provider: unknown
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const delegationController = '0x0000000000000000000000000000000000000000'
  const chain = chains(options)
  const contractAddress = addresses(chain).walletFactory

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: abis.walletFactory,
    functionName: 'deploy',
    args: [delegationController],
    account,
    chain
  })
  return await walletCli.writeContract(request)
}

/**
 * @returns The Unlockd wallet address of the user.
 *
 * @param provider EIP-1193 provider
 * @param {ClientOptions} options
 */
export const getWallet = async ({ provider, options }: { provider: unknown; options?: ClientOptions }) => {
  const chain = chains(options)
  const contractAddress = addresses(chain).walletRegistry

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])

  const [account] = await walletCli.requestAddresses()

  const [firstAddress] = await pubCli.readContract({
    address: contractAddress,
    abi: abis.walletRegistry,
    functionName: 'getOwnerWalletAddresses',
    args: [account],
    account
  })
  return firstAddress
}
