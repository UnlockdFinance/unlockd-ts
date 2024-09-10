import { client, publicClient } from '../client'
import { getWallet } from './wallet'
import { chains, type ClientOptions } from '../types/networks'
import { erc20Abi, SendTransactionReturnType, WriteContractReturnType } from 'viem'
import { Asset } from '../types/requests'

/**
 * @description Send ERC20 tokens to the Unlockd user wallet
 *
 * @param provider EIP-1193 provider
 * @param {Asset} asset - The asset to send
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const sendAssetToWallet = async ({
  provider,
  asset,
  options
}: {
  provider: unknown
  asset: Asset
  options?: ClientOptions
}): Promise<WriteContractReturnType> => {
  const { amount, contractAddress } = asset
  const chain = chains(options)

  const [pubCli, walletCli] = await Promise.all([publicClient({ provider, chain }), client({ provider, chain })])
  const [account] = await walletCli.requestAddresses()
  const unlockdWallet = await getWallet({ provider, options })

  const { request } = await pubCli.simulateContract({
    address: contractAddress,
    abi: erc20Abi,
    functionName: 'transfer',
    args: [unlockdWallet, amount],
    account
  })
  return walletCli.writeContract(request)
}

/**
 * @description Send native tokens to the Unlockd user wallet
 *
 * @param provider EIP-1193 provider
 * @param {bigint} amount - The amount of native tokens to send
 * @param {ClientOptions} options - The client options.
 *
 * @see {@link http://devs.unlockd.finance | 📚Gitbook}
 */
export const sendNativeToWallet = async ({
  provider,
  amount,
  options
}: {
  provider: unknown
  amount: bigint
  options?: ClientOptions
}): Promise<SendTransactionReturnType> => {
  const chain = chains(options)

  const walletCli = await client({ provider, chain })
  const [account] = await walletCli.requestAddresses()
  const unlockdWallet = await getWallet({ provider, options })

  return walletCli.sendTransaction({
    to: unlockdWallet,
    value: amount,
    account,
    chain
  })
}
