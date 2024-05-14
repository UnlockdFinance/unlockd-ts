import { Address, addresses, ModuleId } from '../addresses'
import { client, ClientOptions, publicClient } from '../client'
import { abis } from '../abis'

/**
 * @description Create the Unlockd abstract wallet
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const createWallet = async (options?: ClientOptions):Promise<void> => {
  const delegationController = '0x0000000000000000000000000000000000000000'
  const contractAddress = addresses(options).walletFactory
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

   await walletCli.writeContract({
    address: contractAddress,
    abi: abis.walletFactory,
    functionName: 'deploy',
    args: [delegationController],
    account
  })
}

/**
 * @return The wallet address of the user
 *
 * @param options
 */
export const getWallet = async (options?: ClientOptions): Promise<any> => {

  const contractAddress = addresses(options).walletRegistry
  const walletCli = client(options?.network)
  const pubCli = publicClient(options?.network)
  const [account] = await walletCli.requestAddresses()

  try {
    const data = await pubCli.readContract({
      address: contractAddress,
      abi: abis.walletRegistry,
      functionName: 'getOwnerWalletAddresses',
      args: [account],
      account
    }) as string[]
    return data[0]
  } catch (e) {
    return null
  }

}
