import { Contract, JsonRpcProvider } from 'ethers'
import unlockdInterface from '../src/abis/Unlockd'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { ModuleId } from '../src'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const alquemyKey = process.argv[2]
const network = process.argv[3]
const path = process.argv[4]

const provider = new JsonRpcProvider(`https://${network}.g.alchemy.com/v2/${alquemyKey}`)

//Sepolia
const unlockd = new Contract('0xCA085f4eB3A84A2F5E34c7F79172ea08de6CdED6', unlockdInterface, provider)
//Mainnet
//const unlockd = new Contract('0xcd16ad66f4786a9224f53af13987fc2ed6fde0cb', unlockdInterface, provider)
//Polygon amoy
// const unlockd = new Contract('0x567136ccdFB320076dFEa5deFB65538D6737F7a7', unlockdInterface, provider)

function enumToArray<T extends object>(enumeration: T): any {
  // @ts-ignore
  return (
    Object.keys(enumeration)
      .filter(key => isNaN(Number(key)))
      // @ts-ignore
      .map(key => enumeration[key])
      .filter(val => typeof val === 'number' || typeof val === 'string')
  )
}

const handle = async () => {
  const modulesIds = enumToArray(ModuleId)

  const [action, auction, market, buyNow, sellNow] = await Promise.all(
    modulesIds.map(async (moduleId: any, index: any) => unlockd.moduleIdToProxy(moduleId.toString()))
  )
  store(
    network,
    JSON.stringify({
      action,
      auction,
      market,
      buyNow,
      sellNow
    })
  )
}

function store(name: string, content: any) {
  console.log(`Writing ${name}`)

  const filePath = __dirname + `${path}/${name}.json`
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
  }
  fs.writeFileSync(filePath, content.toString())
}

handle()
