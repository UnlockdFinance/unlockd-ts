import axios from 'axios'
import { Order, OrderTypes } from './types/subgraph'
import { type Chain, chains, Chains, ClientOptions } from './types/networks'
import { Address } from 'viem'
import { validateOrder } from './subgraph-validations'
import { BaseError, SubgraphCriticalError, SubgraphMissingClient } from './errors'
import Joi from 'joi'

export class Subgraph {
  public readonly httpClient

  /**
   * @param {ClientOptions} options - Environment to use in the SDK
   * @example
   * ```ts
   * const api = new Subgraph({ chain: Chains.Mainnet })
   * ```
   */
  constructor(private options: ClientOptions = { chain: Chains.Mainnet }) {
    let chain: Chain
    try {
      chain = chains(this.options)
    } catch (error) {
      if (error instanceof BaseError) {
        console.error(`Unlockd Subgraph: ${error.message}`)
      } else {
        console.error('Unlockd Subgraph: Invalid client options')
      }
      return
    }

    switch (chain) {
      case Chains.Localhost:
        this.httpClient = axios.create({
          baseURL: 'https://api.example.com'
        })
        break
      case Chains.Mainnet:
        this.httpClient = axios.create({
          baseURL: 'https://subgraph.satsuma-prod.com/bb7d5107614b/unlockd/unlockdv2-mainnet-sub/api'
        })
        break
      case Chains.Sepolia:
        this.httpClient = axios.create({
          baseURL: 'https://subgraph.satsuma-prod.com/bb7d5107614b/unlockd/unlockdv2-ethereum-sepolia/api'
        })
        break
      case Chains.PolygonAmoy:
        this.httpClient = axios.create({
          baseURL: 'https://subgraph.satsuma-prod.com/bb7d5107614b/unlockd/unlockdv2-polygon-amoy/api'
        })
        break
      default:
        console.error(`Unlockd Subgraph: Unsupported chain: ${chain.network}`)
        break
    }
  }

  async allOrders(limit = 100, offset = 0, order = OrderTypes.DESC, ended = false): Promise<Order[]> {
    if (!this.httpClient) {
      throw new SubgraphMissingClient()
    }

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
        if (err instanceof Joi.ValidationError) {
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
    if (!this.httpClient) {
      throw new SubgraphMissingClient()
    }

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
        if (err instanceof Joi.ValidationError) {
          throw new SubgraphCriticalError(err.message)
        }
        console.error(err)
      }
    })

    return results
  }
}
