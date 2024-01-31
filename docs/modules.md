[@unlockdfinance/unlockd-ts](README.md) / Exports

# @unlockdfinance/unlockd-ts

## Table of contents

### Enumerations

- [Environment](enums/Environment.md)

### Classes

- [UnlockdApi](classes/UnlockdApi.md)

### Type Aliases

- [BorrowValues](modules.md#borrowvalues)
- [HealthFactorParams](modules.md#healthfactorparams)
- [HealthFactorVariations](modules.md#healthfactorvariations)
- [LiquitationPriceProps](modules.md#liquitationpriceprops)
- [MinimumRepayParams](modules.md#minimumrepayparams)
- [NFTValuation](modules.md#nftvaluation)
- [NFTWithValuation](modules.md#nftwithvaluation)

### Variables

- [LIQUIDATION\_THRESHOLD](modules.md#liquidation_threshold)
- [MAX\_LTV](modules.md#max_ltv)
- [MIN\_LTV](modules.md#min_ltv)

### Functions

- [availableToBorrow](modules.md#availabletoborrow)
- [healthFactor](modules.md#healthfactor)
- [liquidationPrice](modules.md#liquidationprice)
- [minimumToRepay](modules.md#minimumtorepay)

## Type Aliases

### BorrowValues

Ƭ **BorrowValues**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `availableToBorrow` | `string` |
| `ltv` | `string` |
| `valuation` | `string` |

#### Defined in

[availableToBorrow.ts:6](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/availableToBorrow.ts#L6)

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

[healthFactor.ts:3](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/healthFactor.ts#L3)

___

### HealthFactorVariations

Ƭ **HealthFactorVariations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collateral?` | `bigint` |
| `debt?` | `bigint` |

#### Defined in

[healthFactor.ts:1](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/healthFactor.ts#L1)

___

### LiquitationPriceProps

Ƭ **LiquitationPriceProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debt` | `bigint` |
| `liquidationThreshold` | `bigint` |

#### Defined in

[liquidationPrice.ts:1](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/liquidationPrice.ts#L1)

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

[minimumToRepay.ts:8](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/minimumToRepay.ts#L8)

___

### NFTValuation

Ƭ **NFTValuation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ltv` | `string` |
| `valuation` | `string` |

#### Defined in

[availableToBorrow.ts:1](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/availableToBorrow.ts#L1)

___

### NFTWithValuation

Ƭ **NFTWithValuation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ltv` | `bigint` |
| `valuation` | `bigint` |

#### Defined in

[minimumToRepay.ts:3](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/minimumToRepay.ts#L3)

## Variables

### LIQUIDATION\_THRESHOLD

• `Const` **LIQUIDATION\_THRESHOLD**: `bigint`

#### Defined in

[minimumToRepay.ts:1](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/minimumToRepay.ts#L1)

___

### MAX\_LTV

• `Const` **MAX\_LTV**: ``"7500"``

#### Defined in

[availableToBorrow.ts:13](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/availableToBorrow.ts#L13)

___

### MIN\_LTV

• `Const` **MIN\_LTV**: ``"1000"``

#### Defined in

[availableToBorrow.ts:12](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/availableToBorrow.ts#L12)

## Functions

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

[availableToBorrow.ts:35](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/availableToBorrow.ts#L35)

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

[healthFactor.ts:26](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/healthFactor.ts#L26)

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

[liquidationPrice.ts:21](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/liquidationPrice.ts#L21)

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

[minimumToRepay.ts:41](https://github.com/UnlockdFinance/unlockd-ts/blob/05277b2/src/minimumToRepay.ts#L41)
