import { Address, addresses, ModuleId } from '../addresses'
import { client, ClientOptions, publicClient } from '../client'
import { abis } from '../abis'

/**
 * @returns The transaction hash of the create wallet operation.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const createWallet = async (options?: ClientOptions) => {
  const delegationController = '0x0000000000000000000000000000000000000000'
  const contractAddress = addresses(options).walletFactory
  const walletCli = client(options?.network)
  const [account] = await walletCli.requestAddresses()

  return await walletCli.writeContract({
    address: contractAddress,
    abi: abis.walletFactory,
    functionName: 'deploy',
    args: [delegationController],
    account
  })
}


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
