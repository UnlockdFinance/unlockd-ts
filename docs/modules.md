[@verislabs/unlockd-sdk](README.md) / Exports

# @verislabs/unlockd-sdk

## Table of contents

### Enumerations

- [Chains](enums/Chains.md)
- [Collections](enums/Collections.md)
- [ModuleId](enums/ModuleId.md)
- [OrderType](enums/OrderType.md)
- [OrderTypes](enums/OrderTypes.md)
- [ProtocolAddresses](enums/ProtocolAddresses.md)
- [UnderlyingsAsset](enums/UnderlyingsAsset.md)

### Classes

- [Subgraph](classes/Subgraph.md)
- [UnlockdApi](classes/UnlockdApi.md)

### Type Aliases

- [Action](modules.md#action)
- [ActionRequest](modules.md#actionrequest)
- [Address](modules.md#address)
- [Addresses](modules.md#addresses)
- [Auction](modules.md#auction)
- [Bid](modules.md#bid)
- [BorrowValues](modules.md#borrowvalues)
- [BuyNow](modules.md#buynow)
- [BuyNowRequest](modules.md#buynowrequest)
- [Chain](modules.md#chain)
- [ClientOptions](modules.md#clientoptions)
- [CreateOrderInput](modules.md#createorderinput)
- [HealthFactorParams](modules.md#healthfactorparams)
- [HealthFactorVariations](modules.md#healthfactorvariations)
- [LiquitationPriceProps](modules.md#liquitationpriceprops)
- [Market](modules.md#market)
- [MarketRequest](modules.md#marketrequest)
- [MinimumRepayParams](modules.md#minimumrepayparams)
- [NFTValuation](modules.md#nftvaluation)
- [NFTWithValuation](modules.md#nftwithvaluation)
- [Nft](modules.md#nft)
- [Order](modules.md#order)
- [PricesResponse](modules.md#pricesresponse)
- [SellNow](modules.md#sellnow)
- [SellNowRequest](modules.md#sellnowrequest)
- [Signature](modules.md#signature)
- [SignatureLoanConfig](modules.md#signatureloanconfig)
- [SignatureMessageResponse](modules.md#signaturemessageresponse)
- [ValidateMessageResponse](modules.md#validatemessageresponse)

### Variables

- [LIQUIDATION\_THRESHOLD](modules.md#liquidation_threshold)
- [MAX\_LTV](modules.md#max_ltv)
- [MIN\_LTV](modules.md#min_ltv)
- [contractsAddresses](modules.md#contractsaddresses)

### Functions

- [addresses](modules.md#addresses-1)
- [availableToBorrow](modules.md#availabletoborrow)
- [bid](modules.md#bid-1)
- [borrow](modules.md#borrow)
- [buyNow](modules.md#buynow-1)
- [cancel](modules.md#cancel)
- [cancelClaim](modules.md#cancelclaim)
- [claim](modules.md#claim)
- [collections](modules.md#collections)
- [create](modules.md#create)
- [createWallet](modules.md#createwallet)
- [finalize](modules.md#finalize)
- [getWallet](modules.md#getwallet)
- [healthFactor](modules.md#healthfactor)
- [liquidationPrice](modules.md#liquidationprice)
- [marketBid](modules.md#marketbid)
- [minimumToRepay](modules.md#minimumtorepay)
- [redeem](modules.md#redeem)
- [repay](modules.md#repay)
- [sell](modules.md#sell)
- [sendNftsToWallet](modules.md#sendnftstowallet)
- [underlyingsAssets](modules.md#underlyingsassets)

## Type Aliases

### Action

Ƭ **Action**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assets` | `string`[] |
| `deadline` | `number` |
| `loan` | [`SignatureLoanConfig`](modules.md#signatureloanconfig) |
| `nonce` | `number` |
| `underlyingAsset` | `string` |

#### Defined in

[types/responses.ts:26](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/responses.ts#L26)

___

### ActionRequest

Ƭ **ActionRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `loanId?` | `string` |
| `nfts` | [`Nft`](modules.md#nft)[] |
| `underlyingAsset?` | `string` |

#### Defined in

[types/requests.ts:5](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/requests.ts#L5)

___

### Address

Ƭ **Address**: \`0x$\{string}\`

#### Defined in

[addresses.ts:28](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/addresses.ts#L28)

___

### Addresses

Ƭ **Addresses**: [`ModuleId`](enums/ModuleId.md) \| [`ProtocolAddresses`](enums/ProtocolAddresses.md)

#### Defined in

[addresses.ts:16](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/addresses.ts#L16)

___

### Auction

Ƭ **Auction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assetLtv` | `string` |
| `assetPrice` | `string` |
| `assets` | `string`[] |
| `deadline` | `number` |
| `endTime` | `number` |
| `loan` | [`SignatureLoanConfig`](modules.md#signatureloanconfig) |
| `nonce` | `number` |

#### Defined in

[types/responses.ts:34](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/responses.ts#L34)

___

### Bid

Ƭ **Bid**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amountOfDebt` | `string` |
| `amountToPay` | `string` |
| `bidAmount` | `string` |
| `bidder` | `string` |

#### Defined in

[types/subgraph.ts:22](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/subgraph.ts#L22)

___

### BorrowValues

Ƭ **BorrowValues**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `availableToBorrow` | `string` |
| `ltv` | `string` |
| `valuation` | `string` |

#### Defined in

[availableToBorrow.ts:6](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/availableToBorrow.ts#L6)

___

### BuyNow

Ƭ **BuyNow**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asset` | \{ `assetId`: `string` ; `collection`: `string` ; `deadline`: `number` ; `nonce`: `number` ; `price`: `string` ; `tokenId`: `string`  } |
| `asset.assetId` | `string` |
| `asset.collection` | `string` |
| `asset.deadline` | `number` |
| `asset.nonce` | `number` |
| `asset.price` | `string` |
| `asset.tokenId` | `string` |
| `assetLiquidationThreshold` | `number` |
| `assetLtv` | `string` |
| `data` | `string` |
| `deadline` | `number` |
| `from` | `string` |
| `marketAdapter` | `string` |
| `marketApproval` | `string` |
| `marketPrice` | `string` |
| `nonce` | `number` |
| `to` | `string` |
| `underlyingAsset` | `string` |
| `value` | `string` |

#### Defined in

[types/responses.ts:71](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/responses.ts#L71)

___

### BuyNowRequest

Ƭ **BuyNowRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `nft` | [`Nft`](modules.md#nft) |
| `underlyingAsset` | `string` |

#### Defined in

[types/requests.ts:15](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/requests.ts#L15)

___

### Chain

Ƭ **Chain**: ``"mainnet"`` \| ``"sepolia"`` \| ``"amoy"`` \| ``"localhost"``

#### Defined in

[types/networks.ts:4](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/networks.ts#L4)

___

### ClientOptions

Ƭ **ClientOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `network?` | [`Chain`](modules.md#chain) |

#### Defined in

[types/networks.ts:1](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/networks.ts#L1)

___

### CreateOrderInput

Ƭ **CreateOrderInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debtToSell` | `BigInt` |
| `endAmount` | `BigInt` |
| `endTime` | `number` |
| `startAmount` | `BigInt` |
| `startTime` | `number` |

#### Defined in

[contractCalls/market.ts:8](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/market.ts#L8)

___

### HealthFactorParams

Ƭ **HealthFactorParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collateral` | `bigint` |
| `debt` | `bigint` |
| `liquidationThreshold` | `bigint` |
| `variations?` | [`HealthFactorVariations`](modules.md#healthfactorvariations) |

#### Defined in

[healthFactor.ts:3](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/healthFactor.ts#L3)

___

### HealthFactorVariations

Ƭ **HealthFactorVariations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collateral?` | `bigint` |
| `debt?` | `bigint` |

#### Defined in

[healthFactor.ts:1](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/healthFactor.ts#L1)

___

### LiquitationPriceProps

Ƭ **LiquitationPriceProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debt` | `bigint` |
| `liquidationThreshold` | `bigint` |

#### Defined in

[liquidationPrice.ts:1](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/liquidationPrice.ts#L1)

___

### Market

Ƭ **Market**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assetId` | `string` |
| `assetLtv` | `number` |
| `assetPrice` | `string` |
| `collection` | `string` |
| `deadline` | `number` |
| `loan` | [`SignatureLoanConfig`](modules.md#signatureloanconfig) |
| `nonce` | `number` |
| `tokenId` | `string` |

#### Defined in

[types/responses.ts:43](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/responses.ts#L43)

___

### MarketRequest

Ƭ **MarketRequest**: [`Nft`](modules.md#nft)

#### Defined in

[types/requests.ts:20](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/requests.ts#L20)

___

### MinimumRepayParams

Ƭ **MinimumRepayParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `auction?` | `boolean` |
| `indicesToDelete` | `number`[] |
| `initialLoans` | [`NFTWithValuation`](modules.md#nftwithvaluation)[] |
| `liquidationThreshold?` | `bigint` |
| `totalDebt` | `bigint` |

#### Defined in

[minimumToRepay.ts:8](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/minimumToRepay.ts#L8)

___

### NFTValuation

Ƭ **NFTValuation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ltv` | `string` |
| `valuation` | `string` |

#### Defined in

[availableToBorrow.ts:1](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/availableToBorrow.ts#L1)

___

### NFTWithValuation

Ƭ **NFTWithValuation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ltv` | `bigint` |
| `valuation` | `bigint` |

#### Defined in

[minimumToRepay.ts:3](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/minimumToRepay.ts#L3)

___

### Nft

Ƭ **Nft**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `tokenId` | `string` |

#### Defined in

[types/requests.ts:1](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/requests.ts#L1)

___

### Order

Ƭ **Order**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assetId` | `string` |
| `bids` | [`Bid`](modules.md#bid)[] |
| `endTime` | `number` |
| `id` | `string` |
| `loan` | \{ `id`: `string` ; `nfts`: [`Nft`](modules.md#nft) & \{ `isOnAuction?`: `boolean`  }[] ; `underlyingAsset`: `string`  } |
| `loan.id` | `string` |
| `loan.nfts` | [`Nft`](modules.md#nft) & \{ `isOnAuction?`: `boolean`  }[] |
| `loan.underlyingAsset` | `string` |
| `nft` | [`Nft`](modules.md#nft) |
| `owner` | `string` |
| `type` | [`OrderType`](enums/OrderType.md) |

#### Defined in

[types/subgraph.ts:7](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/subgraph.ts#L7)

___

### PricesResponse

Ƭ **PricesResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `liquidationThreshold` | `number` |
| `ltv` | `string` |
| `tokenId` | `string` |
| `valuation` | `string` |

#### Defined in

[types/responses.ts:8](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/responses.ts#L8)

___

### SellNow

Ƭ **SellNow**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assetId` | `string` |
| `data` | `string` |
| `deadline` | `number` |
| `from` | `string` |
| `loan` | [`SignatureLoanConfig`](modules.md#signatureloanconfig) |
| `marketAdapter` | `string` |
| `marketApproval` | `string` |
| `marketPrice` | `string` |
| `nonce` | `number` |
| `to` | `string` |
| `underlyingAsset` | `string` |
| `value` | `number` |

#### Defined in

[types/responses.ts:53](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/responses.ts#L53)

___

### SellNowRequest

Ƭ **SellNowRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `loanId?` | `string` |
| `nft` | [`Nft`](modules.md#nft) |

#### Defined in

[types/requests.ts:11](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/requests.ts#L11)

___

### Signature

Ƭ **Signature**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `signature` | \{ `deadline`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  } |
| `signature.deadline` | `number` |
| `signature.r` | `string` |
| `signature.s` | `string` |
| `signature.v` | `number` |

#### Defined in

[types/responses.ts:96](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/responses.ts#L96)

___

### SignatureLoanConfig

Ƭ **SignatureLoanConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggLiquidationThreshold` | `number` |
| `aggLoanPrice` | `string` |
| `aggLtv` | `number` |
| `deadline` | `number` |
| `loanId` | `string` |
| `nonce` | `number` |
| `totalAssets` | `number` |

#### Defined in

[types/responses.ts:16](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/responses.ts#L16)

___

### SignatureMessageResponse

Ƭ **SignatureMessageResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Defined in

[types/responses.ts:1](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/responses.ts#L1)

___

### ValidateMessageResponse

Ƭ **ValidateMessageResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Defined in

[types/responses.ts:4](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/types/responses.ts#L4)

## Variables

### LIQUIDATION\_THRESHOLD

• `Const` **LIQUIDATION\_THRESHOLD**: `bigint`

#### Defined in

[minimumToRepay.ts:1](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/minimumToRepay.ts#L1)

___

### MAX\_LTV

• `Const` **MAX\_LTV**: ``"7500"``

#### Defined in

[availableToBorrow.ts:13](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/availableToBorrow.ts#L13)

___

### MIN\_LTV

• `Const` **MIN\_LTV**: ``"1000"``

#### Defined in

[availableToBorrow.ts:12](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/availableToBorrow.ts#L12)

___

### contractsAddresses

• `Const` **contractsAddresses**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amoy` | \{ `action`: \`0x$\{string}\` ; `auction`: \`0x$\{string}\` ; `buyNow`: \`0x$\{string}\` ; `market`: \`0x$\{string}\` ; `sellNow`: \`0x$\{string}\`  } |
| `amoy.action` | \`0x$\{string}\` |
| `amoy.auction` | \`0x$\{string}\` |
| `amoy.buyNow` | \`0x$\{string}\` |
| `amoy.market` | \`0x$\{string}\` |
| `amoy.sellNow` | \`0x$\{string}\` |
| `mainnet` | \{ `action`: \`0x$\{string}\` ; `auction`: \`0x$\{string}\` ; `buyNow`: \`0x$\{string}\` ; `market`: \`0x$\{string}\` ; `sellNow`: \`0x$\{string}\`  } |
| `mainnet.action` | \`0x$\{string}\` |
| `mainnet.auction` | \`0x$\{string}\` |
| `mainnet.buyNow` | \`0x$\{string}\` |
| `mainnet.market` | \`0x$\{string}\` |
| `mainnet.sellNow` | \`0x$\{string}\` |
| `sepolia` | \{ `action`: \`0x$\{string}\` ; `auction`: \`0x$\{string}\` ; `buyNow`: \`0x$\{string}\` ; `market`: \`0x$\{string}\` ; `sellNow`: \`0x$\{string}\`  } |
| `sepolia.action` | \`0x$\{string}\` |
| `sepolia.auction` | \`0x$\{string}\` |
| `sepolia.buyNow` | \`0x$\{string}\` |
| `sepolia.market` | \`0x$\{string}\` |
| `sepolia.sellNow` | \`0x$\{string}\` |

#### Defined in

[contractsAddresses/index.ts:7](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractsAddresses/index.ts#L7)

## Functions

### addresses

▸ **addresses**(`options?`): `AddressMap`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ClientOptions`](modules.md#clientoptions) |

#### Returns

`AddressMap`

#### Defined in

[addresses.ts:92](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/addresses.ts#L92)

___

### availableToBorrow

▸ **availableToBorrow**(`nfts`): [`BorrowValues`](modules.md#borrowvalues)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nfts` | [`NFTValuation`](modules.md#nftvaluation)[] | The NFTs to calculate the values for. |

#### Returns

[`BorrowValues`](modules.md#borrowvalues)

The total valuation, ltv, and available to borrow for a given array of NFTs.

**`Example`**

```ts
 const nfts = [
   {
     valuation: (BigInt(100) * oneEth).toString(),
     ltv: '5000'
   },
   {
     valuation: (BigInt(50) * oneEth).toString(),
     ltv: '3000'
   }
 ]

 const result = availableToBorrow(nfts)
 ```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[availableToBorrow.ts:35](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/availableToBorrow.ts#L35)

___

### bid

▸ **bid**(`amountToPay`, `amountOfDebt`, `signature`, `options?`): `Promise`\<\`0x$\{string}\`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amountToPay` | `BigInt` | The amount to pay. |
| `amountOfDebt` | `BigInt` | The amount of debt. |
| `signature` | [`Signature`](modules.md#signature)\<[`Auction`](modules.md#auction)\> | The signature of the bid. |
| `options?` | [`ClientOptions`](modules.md#clientoptions) | The client options, default value is browser wallet |

#### Returns

`Promise`\<\`0x$\{string}\`\>

The transaction hash of the bid.

**`Example`**

```ts
const signature = ...
const result = await bid(1, 1, signature)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/auction.ts:21](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/auction.ts#L21)

___

### borrow

▸ **borrow**(`amount`, `assets`, `signature`, `options?`): `Promise`\<\`0x$\{string}\`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BigInt` | The amount to borrow. |
| `assets` | [`Nft`](modules.md#nft)[] | The assets to borrow. |
| `signature` | [`Signature`](modules.md#signature)\<[`Action`](modules.md#action)\> | The signature of the borrow. |
| `options?` | [`ClientOptions`](modules.md#clientoptions) | The client options, default value is browser wallet |

#### Returns

`Promise`\<\`0x$\{string}\`\>

The transaction hash of the borrow action.

**`Example`**

```ts
const signature = ...
const options = {url: 'https://custom.spc.finance', network: 'randomNetwork'}
const nfts = [{collection:"...", tokenId:"..."}]
const result = await borrow(1, nfts, signature, options)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/action.ts:23](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/action.ts#L23)

___

### buyNow

▸ **buyNow**(`claimOnUWallet`, `orderId`, `amountToPay`, `amountOfDebt`, `signature`, `options?`): `Promise`\<\`0x$\{string}\`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `claimOnUWallet` | `boolean` | The claimOnUWallet flag. |
| `orderId` | `string` | The order id to claim. |
| `amountToPay` | `BigInt` | The amount to pay. |
| `amountOfDebt` | `BigInt` | The amount of debt. |
| `signature` | [`Signature`](modules.md#signature)\<[`Market`](modules.md#market)\> | The signature of the claim. |
| `options?` | [`ClientOptions`](modules.md#clientoptions) | The client options, default value is browser wallet |

#### Returns

`Promise`\<\`0x$\{string}\`\>

The transaction hash of the claim market item.

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/market.ts:157](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/market.ts#L157)

___

### cancel

▸ **cancel**(`orderId`, `options?`): `Promise`\<\`0x$\{string}\`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderId` | `string` | The order id to cancel. |
| `options?` | [`ClientOptions`](modules.md#clientoptions) | The client options, default value is browser wallet |

#### Returns

`Promise`\<\`0x$\{string}\`\>

The transaction hash of the cancel market item.

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/market.ts:52](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/market.ts#L52)

___

### cancelClaim

▸ **cancelClaim**(`orderId`, `signature`, `options?`): `Promise`\<\`0x$\{string}\`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderId` | `string` | The order id to cancel. |
| `signature` | [`Signature`](modules.md#signature)\<[`Market`](modules.md#market)\> | The signature of the cancel claim. |
| `options?` | [`ClientOptions`](modules.md#clientoptions) | The client options, default value is browser wallet |

#### Returns

`Promise`\<\`0x$\{string}\`\>

The transaction hash of the cancel claim market item.

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/market.ts:132](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/market.ts#L132)

___

### claim

▸ **claim**(`claimOnUWallet`, `orderId`, `signature`, `options?`): `Promise`\<\`0x$\{string}\`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `claimOnUWallet` | `boolean` | The claimOnUWallet flag. |
| `orderId` | `string` | The order id to claim. |
| `signature` | [`Signature`](modules.md#signature)\<[`Market`](modules.md#market)\> | The signature of the claim. |
| `options?` | [`ClientOptions`](modules.md#clientoptions) | The client options, default value is browser wallet |

#### Returns

`Promise`\<\`0x$\{string}\`\>

The transaction hash of the claim market item.

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/market.ts:105](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/market.ts#L105)

___

### collections

▸ **collections**(`chain?`): `CollectionMap`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain?` | [`Chain`](modules.md#chain) |

#### Returns

`CollectionMap`

#### Defined in

[addresses.ts:72](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/addresses.ts#L72)

___

### create

▸ **create**(`underlyingAsset`, `orderType`, `config`, `signature`, `options?`): `Promise`\<\`0x$\{string}\`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `underlyingAsset` | \`0x$\{string}\` | The address of the underlying asset. |
| `orderType` | [`OrderType`](enums/OrderType.md) | The type of the order. |
| `config` | [`CreateOrderInput`](modules.md#createorderinput) | The configuration of the order. |
| `signature` | [`Signature`](modules.md#signature)\<[`Market`](modules.md#market)\> | The signature of the create order. |
| `options?` | [`ClientOptions`](modules.md#clientoptions) | The client options, default value is browser wallet |

#### Returns

`Promise`\<\`0x$\{string}\`\>

The transaction hash of the create market item.

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/market.ts:25](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/market.ts#L25)

___

### createWallet

▸ **createWallet**(`options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ClientOptions`](modules.md#clientoptions) |

#### Returns

`Promise`\<`void`\>

**`Description`**

Create the Unlockd abstract wallet

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/wallet.ts:11](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/wallet.ts#L11)

___

### finalize

▸ **finalize**(`claimOnUWallet`, `orderId`, `signature`, `options?`): `Promise`\<\`0x$\{string}\`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `claimOnUWallet` | `boolean` | The claimOnUWallet flag. |
| `orderId` | `string` | The orderId. |
| `signature` | [`Signature`](modules.md#signature)\<[`Auction`](modules.md#auction)\> | The signature of the redeem. |
| `options?` | [`ClientOptions`](modules.md#clientoptions) | The client options, default value is browser wallet |

#### Returns

`Promise`\<\`0x$\{string}\`\>

The transaction hash of the redeem.

**`Example`**

```ts
const signature = ...
const result = await finalize(claimOnUWallet, orderId, signature)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/auction.ts:77](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/auction.ts#L77)

___

### getWallet

▸ **getWallet**(`options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ClientOptions`](modules.md#clientoptions) |

#### Returns

`Promise`\<`any`\>

The wallet address of the user

#### Defined in

[contractCalls/wallet.ts:31](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/wallet.ts#L31)

___

### healthFactor

▸ **healthFactor**(`params`): `BigInt`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`HealthFactorParams`](modules.md#healthfactorparams) | The collateral, debt and liquidation threshold. |

#### Returns

`BigInt`

The health factor for a given collateral, debt and liquidation threshold.

**`Example`**

Returns 17000, this is equals as 1.7:
```ts
const oneEth = BigInt(1e18)
const params = {
        collateral: (BigInt(100) * oneEth),
        debt: (BigInt(50) * oneEth),
        liquidationThreshold: BigInt(8500)
        }
const result = healthFactor(params)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[healthFactor.ts:26](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/healthFactor.ts#L26)

___

### liquidationPrice

▸ **liquidationPrice**(`params`): `BigInt`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`LiquitationPriceProps`](modules.md#liquitationpriceprops) | The debt and liquidation threshold. |

#### Returns

`BigInt`

The liquidation price for a given debt and liquidation threshold.

**`Example`**

Returns 58823529411764705882n:
```ts
const oneEth = BigInt(1e18)
const params = {
         debt: (BigInt(50) * oneEth),
         liquidationThreshold: BigInt(8500)
     }
const result = liquidationPrice(params)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[liquidationPrice.ts:21](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/liquidationPrice.ts#L21)

___

### marketBid

▸ **marketBid**(`orderId`, `amountToPay`, `amountOfDebt`, `signature`, `options?`): `Promise`\<\`0x$\{string}\`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderId` | `string` | The order id to bid. |
| `amountToPay` | `BigInt` | The amount to pay. |
| `amountOfDebt` | `BigInt` | The amount of debt. |
| `signature` | [`Signature`](modules.md#signature)\<[`Market`](modules.md#market)\> | The signature of the bid. |
| `options?` | [`ClientOptions`](modules.md#clientoptions) | The client options, default value is browser wallet |

#### Returns

`Promise`\<\`0x$\{string}\`\>

The transaction hash of the bid market item.

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/market.ts:76](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/market.ts#L76)

___

### minimumToRepay

▸ **minimumToRepay**(`params`): `bigint`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MinimumRepayParams`](modules.md#minimumrepayparams) | The NFTs to calculate the values for. |

#### Returns

`bigint`

The minimum amount of debt to repay for a given array of NFTValuations.

**`Example`**

Returns 40 eth:
 ```ts
    const params = {
         initialLoans: [
             {
                 valuation: BigInt(50) * oneEth,
                 ltv: BigInt(7000),
             },
             {
                 valuation: BigInt(100) * oneEth,
                 ltv: BigInt(4000),
             },
         ],
         indicesToDelete: [1],
         totalDebt: BigInt(75) * oneEth,
     }
    const result = minimumToRepay(params)
 ```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[minimumToRepay.ts:41](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/minimumToRepay.ts#L41)

___

### redeem

▸ **redeem**(`signature`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | [`Signature`](modules.md#signature)\<[`Auction`](modules.md#auction)\> | The signature of the redeem. |
| `options?` | [`ClientOptions`](modules.md#clientoptions) | The client options, default value is browser wallet |

#### Returns

`Promise`\<`any`\>

The transaction hash of the redeem.

**`Example`**

```ts
const signature = ...
const result = await redeem(signature)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/auction.ts:51](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/auction.ts#L51)

___

### repay

▸ **repay**(`amount`, `signature`, `options?`): `Promise`\<\`0x$\{string}\`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BigInt` | The amount to repay. |
| `signature` | [`Signature`](modules.md#signature)\<[`Action`](modules.md#action)\> | The signature of the repay. |
| `options?` | [`ClientOptions`](modules.md#clientoptions) | The client options, default value is browser wallet |

#### Returns

`Promise`\<\`0x$\{string}\`\>

The transaction hash of the repay action.

**`Example`**

```ts
const signature = ...
const options = {url: 'https://custom.spc.finance', network: 'randomNetwork'}
const result = await reapy(1, signature, options)
```

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/action.ts:55](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/action.ts#L55)

___

### sell

▸ **sell**(`asset`, `signature`, `options?`): `Promise`\<\`0x$\{string}\`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | [`Nft`](modules.md#nft) | The asset to sell. |
| `signature` | [`Signature`](modules.md#signature)\<[`SellNow`](modules.md#sellnow)\> | The signature of the sell operation. |
| `options?` | [`ClientOptions`](modules.md#clientoptions) | The client options, default value is browser wallet |

#### Returns

`Promise`\<\`0x$\{string}\`\>

The transaction hash of the sell operation.

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/sellNow.ts:16](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/sellNow.ts#L16)

___

### sendNftsToWallet

▸ **sendNftsToWallet**(`nfts`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nfts` | \{ `contractAddress`: `string` ; `tokenId`: `string`  }[] |
| `options?` | [`ClientOptions`](modules.md#clientoptions) |

#### Returns

`Promise`\<`void`\>

**`Description`**

Send NFTs to the unlockd user wallet

**`See`**

[📚Gitbook](http://devs.unlockd.finance)

#### Defined in

[contractCalls/nftBatchTransfer.ts:12](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/contractCalls/nftBatchTransfer.ts#L12)

___

### underlyingsAssets

▸ **underlyingsAssets**(`chain?`): `UnderlyingsAssetMap`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain?` | [`Chain`](modules.md#chain) |

#### Returns

`UnderlyingsAssetMap`

#### Defined in

[addresses.ts:82](https://github.com/UnlockdFinance/unlockd-ts/blob/98dff94/src/addresses.ts#L82)
