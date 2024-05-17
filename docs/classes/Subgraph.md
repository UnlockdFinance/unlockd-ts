[@unlockdfinance/unlockd-ts](../README.md) / [Exports](../modules.md) / Subgraph

# Class: Subgraph

## Table of contents

### Constructors

- [constructor](Subgraph.md#constructor)

### Properties

- [chain](Subgraph.md#chain)
- [httpClient](Subgraph.md#httpclient)

### Methods

- [allOrders](Subgraph.md#allorders)
- [ordersByCollection](Subgraph.md#ordersbycollection)
- [toOrder](Subgraph.md#toorder)

## Constructors

### constructor

• **new Subgraph**(`chain?`): [`Subgraph`](Subgraph.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `chain` | [`Chains`](../enums/Chains.md) | `Chains.Mainnet` | Environment to use in the SDK |

#### Returns

[`Subgraph`](Subgraph.md)

**`Example`**

```ts
const api = new Subgraph(Chain.Mainnet)
```

#### Defined in

[Subgraph.ts:17](https://github.com/UnlockdFinance/unlockd-ts/blob/d0ac72d/src/Subgraph.ts#L17)

## Properties

### chain

• `Private` **chain**: [`Chains`](../enums/Chains.md) = `Chains.Mainnet`

Environment to use in the SDK

#### Defined in

[Subgraph.ts:17](https://github.com/UnlockdFinance/unlockd-ts/blob/d0ac72d/src/Subgraph.ts#L17)

___

### httpClient

• `Readonly` **httpClient**: `AxiosInstance`

#### Defined in

[Subgraph.ts:8](https://github.com/UnlockdFinance/unlockd-ts/blob/d0ac72d/src/Subgraph.ts#L8)

## Methods

### allOrders

▸ **allOrders**(`limit?`, `offset?`, `order?`, `ended?`): `Promise`\<[`Order`](../modules.md#order)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `100` |
| `offset` | `number` | `0` |
| `order` | [`OrderTypes`](../enums/OrderTypes.md) | `OrderTypes.DESC` |
| `ended` | `boolean` | `false` |

#### Returns

`Promise`\<[`Order`](../modules.md#order)[]\>

#### Defined in

[Subgraph.ts:42](https://github.com/UnlockdFinance/unlockd-ts/blob/d0ac72d/src/Subgraph.ts#L42)

___

### ordersByCollection

▸ **ordersByCollection**(`limit?`, `offset?`, `order?`, `collections?`, `ended?`): `Promise`\<[`Order`](../modules.md#order)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `100` |
| `offset` | `number` | `0` |
| `order` | [`OrderTypes`](../enums/OrderTypes.md) | `OrderTypes.DESC` |
| `collections` | \`0x$\{string}\`[] | `[]` |
| `ended` | `boolean` | `false` |

#### Returns

`Promise`\<[`Order`](../modules.md#order)[]\>

#### Defined in

[Subgraph.ts:91](https://github.com/UnlockdFinance/unlockd-ts/blob/d0ac72d/src/Subgraph.ts#L91)

___

### toOrder

▸ **toOrder**(`order`): [`Order`](../modules.md#order)

#### Parameters

| Name | Type |
| :------ | :------ |
| `order` | `any` |

#### Returns

[`Order`](../modules.md#order)

#### Defined in

[Subgraph.ts:146](https://github.com/UnlockdFinance/unlockd-ts/blob/d0ac72d/src/Subgraph.ts#L146)
