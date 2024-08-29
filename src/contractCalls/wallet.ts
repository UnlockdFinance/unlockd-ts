import { addresses } from '../addresses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { chains, type ClientOptions } from '../types/networks'
import { WriteContractReturnType, BaseError, ContractFunctionRevertedError, ContractFunctionExecutionError } from 'viem'

/**
 * @description Create the Unlockd abstract wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const createWallet = async (
  provider: unknown,
  options?: ClientOptions
): Promise<WriteContractReturnType | undefined> => {
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
  return walletCli.writeContract(request)
}

/**
 * @return The wallet address of the user
 *
 * @param options
 */
export const getWallet = async (provider: unknown, options?: ClientOptions): Promise<any> => {
  const chain = chains(options)
  const contractAddress = addresses(chain).walletRegistry

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])

  const [account] = await walletCli.requestAddresses()

  try {
    const data = (await pubCli.readContract({
      address: contractAddress,
      abi: abis.walletRegistry,
      functionName: 'getOwnerWalletAddresses',
      args: [account],
      account
    })) as string[]
    return data[0]
  } catch (e) {
    return null
  }
}
