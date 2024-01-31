[@unlockdfinance/unlockd-ts](../README.md) / [Exports](../modules.md) / UnlockdApi

# Class: UnlockdApi

UnlockdApi wrapper of the Unlockd REST API

## Table of contents

### Constructors

- [constructor](UnlockdApi.md#constructor)

### Properties

- [env](UnlockdApi.md#env)

### Methods

- [borrowSignature](UnlockdApi.md#borrowsignature)
- [marketSignature](UnlockdApi.md#marketsignature)
- [prices](UnlockdApi.md#prices)
- [repaySignature](UnlockdApi.md#repaysignature)
- [sellNowSignature](UnlockdApi.md#sellnowsignature)
- [signatureMessage](UnlockdApi.md#signaturemessage)
- [validateMessage](UnlockdApi.md#validatemessage)

## Constructors

### constructor

• **new UnlockdApi**(`env?`): [`UnlockdApi`](UnlockdApi.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `env` | [`Environment`](../enums/Environment.md) | `Environment.PRODUCTION` | Environment to use in the SDK |

#### Returns

[`UnlockdApi`](UnlockdApi.md)

**`Example`**

```ts
const api = new UnlockdApi(Environment.PRODUCTION)
```

#### Defined in

[UnlockdApi.ts:40](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/UnlockdApi.ts#L40)

## Properties

### env

• `Private` **env**: [`Environment`](../enums/Environment.md) = `Environment.PRODUCTION`

Environment to use in the SDK

#### Defined in

[UnlockdApi.ts:40](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/UnlockdApi.ts#L40)

## Methods

### borrowSignature

▸ **borrowSignature**(`tokenAuth`, `params`): `Promise`\<`Signature`\>

Use this method to retrieve the signature to do the borrow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAuth` | `string` | The token retrieved from the validateMessage method. |
| `params` | `ActionRequest` | The parameters to create a borrow. LoanId or underlyingAsset are required. |

#### Returns

`Promise`\<`Signature`\>

The signature to create a borrow.

**`Example`**

```ts
const params: ActionRequest = {
  loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
  nfts: [{collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId'}]
}
const authToken = await api.borrowSignature(authToken, params)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[UnlockdApi.ts:115](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/UnlockdApi.ts#L115)

___

### marketSignature

▸ **marketSignature**(`tokenAuth`, `params`): `Promise`\<`Signature`\>

Use this method to retrieve the signature to interact with a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAuth` | `string` | The token retrieved from the validateMessage method. |
| `params` | `Nft` | The parameters to interact with a market. Collection and tokenId are required. |

#### Returns

`Promise`\<`Signature`\>

The signature to interact with a market.

**`Example`**

```ts
const params: MarketRequest = {collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId'}
const authToken = await api.marketSignature(authToken, params)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[UnlockdApi.ts:187](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/UnlockdApi.ts#L187)

___

### prices

▸ **prices**(`nfts`, `underlyingAsset`): `Promise`\<`PricesResponse`[]\>

Use this method to retrieve the prices for a given nfts and underlying asset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nfts` | \{ `collection`: `string` ; `tokenId`: `string`  }[] | The nfts to get the prices. |
| `underlyingAsset` | `string` | The underlying asset to get the prices. |

#### Returns

`Promise`\<`PricesResponse`[]\>

The prices for a given nfts and underlying asset.

**`Example`**

```ts
const nfts = [
{collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358', tokenId: '10'}
]
const underlyingAsset = '0x7b79995e5f793a07bc00c21412e50ecae098e7f9'
const result = await api.prices(nfts, underlyingAsset)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[UnlockdApi.ts:213](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/UnlockdApi.ts#L213)

___

### repaySignature

▸ **repaySignature**(`tokenAuth`, `params`): `Promise`\<`Signature`\>

Use this method to retrieve the signature to do the repay.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAuth` | `string` | The token retrieved from the validateMessage method. |
| `params` | `ActionRequest` | The parameters to create a repay. LoanId is required. The nfts are optional if they are provided will be removed from the loan. |

#### Returns

`Promise`\<`Signature`\>

The signature to create a repay.

**`Example`**

```ts
const params: ActionRequest = {
 loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
 nfts: [{collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId'}]
 }
 const authToken = await api.repaySignature(authToken, params)
 ```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[UnlockdApi.ts:140](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/UnlockdApi.ts#L140)

___

### sellNowSignature

▸ **sellNowSignature**(`tokenAuth`, `params`): `Promise`\<`Signature`\>

Use this method to retrieve the signature to do the sell now.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAuth` | `string` | The token retrieved from the validateMessage method. |
| `params` | `SellNowRequest` | The parameters to create a sell now. LoanId is optional. |

#### Returns

`Promise`\<`Signature`\>

The signature to create a sell now.

**`Example`**

```ts
const params: SellNowRequest = {
loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',
nft: {collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId'}
}
const authToken = await api.sellNowSignature(authToken, params)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[UnlockdApi.ts:165](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/UnlockdApi.ts#L165)

___

### signatureMessage

▸ **signatureMessage**(`address`): `Promise`\<`SignatureMessageResponse`\>

Use this method to retrieve the signature message for a given address to sign .

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The ethereum address to sign. |

#### Returns

`Promise`\<`SignatureMessageResponse`\>

Retrieve the signature message for a given address. This is the first part of the authentication process.

**`Example`**

```ts
const address = '0x0000000000000000000000000000000000000000'
const result = await api.signatureMessage(address)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[UnlockdApi.ts:68](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/UnlockdApi.ts#L68)

___

### validateMessage

▸ **validateMessage**(`address`, `signature`): `Promise`\<`ValidateMessageResponse`\>

Use this method to validate a signature message signed by the user wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The ethereum address to sign. |
| `signature` | `string` | The signed message from the wallet or PK . |

#### Returns

`Promise`\<`ValidateMessageResponse`\>

The token for a valid signature message for a given address. This is the second part of the authentication process.

**`Example`**

```ts
const address = '0x0000000000000000000000000000000000000000'
const signature = '...'
const result = await api.validateMessage(address, signature)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[UnlockdApi.ts:90](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/UnlockdApi.ts#L90)
