import { addresses } from '../addresses'
import { client, publicClient } from '../client'
import { abis } from '../abis'
import { ClientOptions } from '../types/networks'
import { WriteContractReturnType, BaseError, ContractFunctionRevertedError } from 'viem'

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
  const contractAddress = addresses(options).walletFactory

  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])
  const [account] = await walletCli.requestAddresses()

  try {
    const { request } = await pubCli.simulateContract({
      address: contractAddress,
      abi: abis.walletFactory,
      functionName: 'deploy',
      args: [delegationController],
      account
    })
    return walletCli.writeContract(request)
  } catch (err) {
    if (err instanceof BaseError) {
      const revertError = err.walk(err => err instanceof ContractFunctionRevertedError)
      if (revertError instanceof ContractFunctionRevertedError) {
        const errorName = revertError.data?.errorName ?? ''

        if (errorName === '...') throw new Error('...')
      }
    }
  }
}

/**
 * @return The wallet address of the user
 *
 * @param options
 */
export const getWallet = async (provider: unknown, options?: ClientOptions): Promise<any> => {
  const contractAddress = addresses(options).walletRegistry

  const [pubCli, walletCli] = await Promise.all([
    publicClient({ provider, network: options?.network }),
    client({ provider, network: options?.network })
  ])

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
