import { Chains } from './client';
import { Order, OrderTypes } from './types/subgraph';
import { Address } from './addresses';
export declare class Subgraph {
    private chain;
    readonly httpClient: import("axios").AxiosInstance;
    /**
     * @param {Chain} chain - Environment to use in the SDK
     * @example
     * ```ts
     * const api = new Subgraph(Chain.Mainnet)
     * ```
     */
    constructor(chain?: Chains);
    allOrders(limit?: number, offset?: number, order?: OrderTypes, ended?: boolean): Promise<Array<Order>>;
    ordersByCollection(limit?: number, offset?: number, order?: OrderTypes, collections?: Array<Address>, ended?: boolean): Promise<Array<Order>>;
    private toOrder;
}
