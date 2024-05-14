import { action, auction, market, buyNow, sellNow } from './sepolia.json'
import { Address } from '../addresses'


const addresses= {
  action:action as Address,
  auction: auction as Address,
  market : market as Address,
  buyNow : buyNow as Address,
  sellNow: sellNow as Address,
}


export default addresses
