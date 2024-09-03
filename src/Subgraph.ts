import axios from 'axios'
import { Order, OrderTypes } from './types/subgraph'
import { Nft } from './types/requests'
import { type Chain, Chains } from './types/networks'
import { Address } from 'viem'

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

  async allOrders(limit = 100, offset = 0, order = OrderTypes.DESC, ended = false): Promise<Array<Order>> {
    const results = []
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
    results.push(...(response.data.data?.orders.map((order: any) => this.toOrder(order)) ?? []))

    return results
  }

  async ordersByCollection(
    limit = 100,
    offset = 0,
    order = OrderTypes.DESC,
    collections: Array<Address> = [],
    ended = false
  ): Promise<Array<Order>> {
    const results = []
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
    results.push(...(response.data.data?.orders.map((order: any) => this.toOrder(order)) ?? []))

    return results
  }

  private toOrder(order: any): Order {
    return {
      id: order.id,
      type: order.orderType,
      assetId: order.assetId,
      owner: order.seller,
      endTime: order.endTime,
      bids: order.bids,
      nft: {
        collection: order.collection,
        tokenId: order.tokenId
      },
      loan: {
        underlyingAsset: order.loan.underlyingAsset,
        id: order.loan.id,
        owner: order.loan.user.user,
        nfts: order.loan.assets.map((asset: any) => {
          return {
            collection: asset.collection,
            tokenId: asset.tokenId,
            isOnAuction: asset.isOnAuction
          } as Nft & { isOnAuction: boolean }
        })
      }
    } as Order
  }
}
