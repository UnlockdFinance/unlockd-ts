import axios from 'axios'
import { Order, OrderTypes } from './types/subgraph'
import { type Chain, Chains } from './types/networks'
import { Address } from 'viem'
import { validateOrder } from './validations'
import { SubgraphCriticalError } from './errors'
import { ValidationError as JoiValidationError } from 'joi'

export class Subgraph {
  public readonly httpClient

  /**
   * @param {Chain} chain - Environment to use in the SDK
   * @example
   * ```ts
   * const api = new Subgraph(Chain.Mainnet)
   * ```
   */
  constructor(private chain: Chain = Chains.Mainnet) {
    switch (this.chain) {
      case Chains.Localhost:
        this.httpClient = axios.create({
          baseURL: 'https://api.example.com'
        })
        break
      case Chains.Sepolia:
        this.httpClient = axios.create({
          baseURL: 'https://subgraph.satsuma-prod.com/bb7d5107614b/unlockd/unlockdv2-ethereum-sepolia/api'
        })
        break
      case Chains.Mainnet:
        this.httpClient = axios.create({
          baseURL: 'https://subgraph.satsuma-prod.com/bb7d5107614b/unlockd/unlockdv2-mainnet-sub/api'
        })
        break
      default:
        this.httpClient = axios.create({
          baseURL: 'https://subgraph.satsuma-prod.com/bb7d5107614b/unlockd/unlockd-subgraph-development/api'
        })
        break
    }
  }

  async allOrders(limit = 100, offset = 0, order = OrderTypes.DESC, ended = false): Promise<Order[]> {
    const results: Order[] = []
    const time = parseInt((Date.now() / 1000).toFixed())
    let endTime = `endTime_gt: ${time}`
    if (ended) {
      endTime = `endTime_lte: ${time}`
    }
    let data = JSON.stringify({
      query: `query {
              orders(  where: {
                  status: "0",
                 ${endTime},
                loan_: {status_not: "2"},
            }, first: ${limit}, skip: ${offset}, orderBy: endTime , orderDirection: ${order.toLowerCase()} ) {
                  id
                  orderType
                  assetId
                  collection
                  tokenId
                  seller
                  endTime
                  bids {
                    amountOfDebt
                    amountToPay
                    bidder
                    bidAmount
                  }
                  loan {
                    id
                    user {
                        user
                    }
                    underlyingAsset
                    assets {
                        collection
                        tokenId
                        isOnAuction
                    }
                  } 
              }
            }`,
      variables: {}
    })
    const response = await this.httpClient.post('', data)

    response.data.data?.orders.forEach((order: any) => {
      try {
        const safeOrder = validateOrder(order)
        results.push(safeOrder)
      } catch (err) {
        if (err instanceof JoiValidationError) {
          throw new SubgraphCriticalError(err.message)
        }
        console.error(err)
      }
    })

    return results
  }

  async ordersByCollections(
    limit = 100,
    offset = 0,
    order = OrderTypes.DESC,
    collections: Address[] = [],
    ended = false
  ): Promise<Order[]> {
    const results: Order[] = []
    const time = parseInt((Date.now() / 1000).toFixed())
    let endTime = `endTime_gt: ${time}`
    if (ended) {
      endTime = `endTime_lte: ${time}`
    }
    const data = JSON.stringify({
      query: `query ($collections: [Bytes!])  {
                orders(  where: {
                  status: "0",
                  loan_: {status_not: "2"},
                  collection_in : $collections
              }, first: ${limit}, skip: ${offset}, orderBy: endTime , orderDirection: ${order.toLowerCase()} ) {
                    id
                    orderType
                    assetId
                    collection
                    tokenId
                    seller
                    endTime
                    bids {
                      amountOfDebt
                      amountToPay
                      bidder
                      bidAmount
                    }
                    loan {
                      id
                      user {
                          user
                      }
                      underlyingAsset
                      assets {
                          collection
                          tokenId
                          isOnAuction
                      }
                    } 
                }
              }`,
      variables: { collections: collections.map(_ => _.toLowerCase()) }
    })
    const response = await this.httpClient.post('', data)

    response.data.data?.orders.forEach((order: any) => {
      try {
        const safeOrder = validateOrder(order)
        results.push(safeOrder)
      } catch (err) {
        if (err instanceof JoiValidationError) {
          throw new SubgraphCriticalError(err.message)
        }
        console.error(err)
      }
    })

    return results
  }
}
