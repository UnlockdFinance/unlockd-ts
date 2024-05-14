import { Contract, JsonRpcProvider } from 'ethers'
import { abis } from '../abis'
import { ModuleId } from '../addresses'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const alquemyKey = process.argv[2]
const network = process.argv[3]
const path = process.argv[4]

const provider = new JsonRpcProvider(`https://eth-${network}.g.alchemy.com/v2/${alquemyKey}`)

const unlockd = new Contract('0x167b44409ae1eF6eF15a47a053f6a98879296E49', abis.unlockd, provider)

function enumToArray<T>(enumeration: T): any {
  // @ts-ignore
  return (Object.keys(enumeration)
      .filter(key => isNaN(Number(key)))
      // @ts-ignore
      .map(key => enumeration[key])
      .filter(val => typeof val === 'number' || typeof val === 'string')
  )
}

const handle = async () => {
  const modulesIds = enumToArray(ModuleId)

  const [action, auction, market, buyNow, sellNow] = await Promise.all(modulesIds.map(async (moduleId: any, index: any) => unlockd.moduleIdToProxy(moduleId.toString())))
  store(network, JSON.stringify({
    action,
    auction,
    market,
    buyNow,
    sellNow
  }))

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

