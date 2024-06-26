import fs from 'fs'
import axios from 'axios'
import { Contract, ethers, JsonRpcProvider } from 'ethers'
import { abis } from '../src/abis'
import { addresses, ModuleId } from '../src/addresses'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const alquemyKey = process.argv[2]
const etherscanKey = process.argv[3]
const network = process.argv[4]
const path = process.argv[5]

const provider = new JsonRpcProvider(`https://eth-${network}.g.alchemy.com/v2/${alquemyKey}`)

const unlockd = new Contract('0xcd16ad66f4786a9224f53af13987fc2ed6fde0cb', abis.unlockd, provider)

function enumToArray<T extends object>(enumeration: T): any {
  return (
    Object.keys(enumeration)
      .filter(key => isNaN(Number(key)))
      // @ts-ignore
      .map(key => enumeration[key])
      .filter(val => typeof val === 'number' || typeof val === 'string')
  )
}

async function abi(address: string) {
  let domain = `https://api.etherscan.io`
  if (network !== 'mainnet') {
    domain = `https://api-${network}.etherscan.io`
  }
  const response = await axios.get(
    `${domain}/api?module=contract&action=getabi&address=${address}&apikey=${etherscanKey}`
  )
  if (isJson(response.data.result) === false) return ''
  return response.data.result
}

function isJson(str: string) {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

async function handle() {
  try {
    //await storeUnlockd()
    //await storeWalletRegistry()
    //await storeWalletFactory()
    //await storeNftBatchTransfer()
    //await storeModulesAbi()
  } catch (e) {
    console.log(e)
  }
}

async function storeUnlockd() {
  const address = await unlockd.getAddress()
  const _ = await abi(address)

  storeAbi('Unlockd', _)
}
async function storeNftBatchTransfer() {
  const address = addresses().nftBatchTransfer
  const _ = await abi(address)

  storeAbi('NftBatchTransfer', _)
}
async function storeWalletRegistry() {
  const address = addresses().walletRegistry
  const _ = await abi(address)

  storeAbi('WalletRegistry', _)
}
async function storeWalletFactory() {
  const address = addresses().walletFactory
  const _ = await abi(address)

  storeAbi('WalletFactory', _)
}

async function storeModulesAbi() {
  const modulesIds = enumToArray(ModuleId)
  await Promise.all(
    modulesIds.map(async (moduleId: any, index: any) => {
      const moduleName = Object.values(ModuleId)[index]
      const abi = await moduleAbi(moduleId)
      if (abi != '') {
        storeAbi(moduleName, abi)
      } else {
        console.error('ABI not found for module: ', moduleName)
      }
    })
  ).catch((e: any) => console.log(e))
}

function storeAbi(name: string | ModuleId, abi: Array<any>) {
  console.log(`Writing ${name}`)

  const filePath = __dirname + `${path}/${name}.json`
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
  }
  fs.writeFileSync(filePath, abi.toString())
}

async function moduleAbi(moduleId: number) {
  const moduleAddres = await unlockd.moduleIdToImplementation(moduleId.toString())

  return abi(moduleAddres)
}

handle()
