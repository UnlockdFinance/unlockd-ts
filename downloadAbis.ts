import fs from "fs";
import axios from "axios";
import {Contract, ethers, JsonRpcProvider} from "ethers";
import {abis} from "./src/abis";

const alquemyKey = process.argv[2]
const etherscanKey = process.argv[3]
const network = process.argv[4]
const path = process.argv[5]

const provider = new JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${alquemyKey}`)

const unlockd = new Contract('0xC4b665F019bdF18a8a558F1A7254Bb7142453C2B', abis.unlockd, provider)


enum ModuleId {
    Action = 3,
    Auction = 4,
    Market = 5,
    BuyNow = 6,
    SellNow = 7
}


function enumToArray<T>(enumeration: T): any {
    // @ts-ignore
    return Object.keys(enumeration)
        .filter(key => isNaN(Number(key)))
        // @ts-ignore
        .map(key => enumeration[key])
        .filter(val => typeof val === 'number' || typeof val === 'string')
}

async function abi(address: string) {
    const response = await axios.get(`https://api-${network}.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${etherscanKey}`)
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

        await storeUnlockd()
        await storeModulesAbi()

    } catch (e) {
        console.log(e)
    }
}

async function storeUnlockd() {
    const address = await unlockd.getAddress()
    const _ = await abi(address)

    storeAbi('Unlockd', _)
}

async function storeModulesAbi() {
    const modulesIds = enumToArray(ModuleId)
    await Promise.all(modulesIds.map(async (moduleId: any, index: any) => {
        const moduleName = Object.values(ModuleId)[index]
        const abi = await moduleAbi(moduleId)
        if (abi != '') {
            storeAbi(moduleName, abi)
        } else {
            console.error('ABI not found for module: ', moduleName)
        }
    })).catch((e: any) => console.log(e))
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
