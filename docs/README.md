@verislabs/unlockd-sdk / [Exports](modules.md)

#

<p align="center" style="margin-bottom:32px">
  <a href="https://unlockd.finance">
    <img alt="Unlockd logo" src="https://miro.medium.com/max/660/1*YEp9mC_4sVUuFpBzatz3dQ.png" width="auto" height="92px" />
  </a>
</p>

<h1 align="center">Unlockd SDK</h1>

<p align="center">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
</p>
<p align="center">Couple of utils functions to create Loans and calculate values</p>

<p align="center">
    <a href="https://app.unlockd.finance/"><b>Website</b></a> •
    <a href="https://devs.unlockd.finance/"><b>Gitbook</b></a> •
    <a href="/docs"><b>Docs</b></a>
</p>

[//]: #
[//]: # '[![npm version](https://img.shields.io/npm/v/unlockd-ts.svg?style=flat-square)](https://www.npmjs.org/package/unlockd-ts)'
[//]: # '[![Build status](https://img.shields.io/github/actions/workflow/status/unlockd-ts/unlockd-ts/ci.yml?branch=v1.x&label=CI&logo=github&style=flat-square)](https://github.com/unlockd-ts/unlockd-ts/actions/workflows/ci.yml)'
[//]: # '[![code coverage](https://img.shields.io/coveralls/mzabriskie/unlockd-ts.svg?style=flat-square)](https://coveralls.io/r/mzabriskie/unlockd-ts)'
[//]: # '[![npm bundle size](https://img.shields.io/bundlephobia/minzip/unlockd-ts?style=flat-square)](https://bundlephobia.com/package/unlockd-ts@latest)'

## 🗂️ Table of Contents

- [Features](#features)
- [Browser Support](#browser-support)
- [Installing](#installing)
  - [Package manager](#package-manager)
  - [CDN](#cdn)
- [Example](#example)

## Features

- Create a signture for :
  - Borrow
  - Repay
  - Bid
  - Redeem
  - Sell now
  - Market calls
- Calculate minimum amount to repay a loan
- Calculate the liquidation price of a loan
- Calculate health factor of a loan
- Calculate the available amount to action

## Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                         | Latest ✔                                                                                            | Latest ✔                                                                                         | Latest ✔                                                                                      | Latest ✔                                                                                   | 11 ✔                                                                                                                                   |

### Package manager

Using npm:

```bash
$ npm install viem @verislabs/unlockd-sdk
```

Using bower:

```bash
$ bower install viem @verislabs/unlockd-sdk
```

Using yarn:

```bash
$ yarn add viem @verislabs/unlockd-sdk
```

Using pnpm:

```bash
$ pnpm add viem @verislabs/unlockd-sdk

```

## Example

### Fetch prices

```javascript
import { UnlockdApi } from '@verislabs/unlockd-sdk'

const api = new UnlockdApi()
const params = {
  nfts: [
    {
      collection: '0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358',
      tokenId: '10'
    }
  ],
  underlyingAsset: '0x7b79995e5f793a07bc00c21412e50ecae098e7f9'
}
const response = await api.prices(params)
```

### Login

```javascript
import { UnlockdApi } from '@verislabs/unlockd-sdk'

const api = new UnlockdApi()
const address = '0x0000000000000000000000000000000000000000'
const message = await api.signatureMessage(address)
//Sign message from your wallet o with Pk
//...
const signedMessage = '...'
const authToken = await api.validateMessage(signedMessage)
```

### Borrow signature

```javascript
//At least 1 of the props
import {ActionRequest, UnlockdApi} from "@verislabs/unlockd-sdk";
const api= new UnlockdApi()

const params: ActionRequest = {
  loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',//Optional
  nfts: [{collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 123n}]//Optional
}
const authToken = await api.borrowSignature(authToken, params)
```

### Minimum Repay

```javascript
import { minimumToRepay } from '@verislabs/unlockd-sdk'

const params = {
  initialLoans: [
    {
      valuation: 10000000n,
      ltv: 5000n
    },
    {
      valuation: 10000000n,
      ltv: 5000n
    }
  ],
  indicesToDelete: [1],
  totalDebt: 2n
}
const result = minimumToRepay(params)
```

### Liquidation price

```javascript
import { liquidationPrice } from '@verislabs/unlockd-sdk'
const oneEth = BigInt(1e18)

const params = {
  debt: BigInt(50) * oneEth,
  liquidationThreshold: BigInt(8500)
}
const result = liquidationPrice(params)
```

### Health Factor

```javascript
import { healthFactor } from '@verislabs/unlockd-sdk'
const oneEth = BigInt(1e18)

const params = {
  collateral: BigInt(100) * oneEth,
  debt: BigInt(50) * oneEth,
  liquidationThreshold: BigInt(8500)
}
const result = healthFactor(params)
```

### Available to action

```javascript
import { availableToBorrow } from '@verislabs/unlockd-sdk'

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

### Unlockd ABIs

```javascript
import { abis } from '@verislabs/unlockd-sdk/abis'

const { unlockd, action, auction, market, buyNow, sellNow, walletRegistry, walletFactory, nftBatchTransfer } = abis
```

### Options

- **Chain preference**: [See all chain options](./chain-parameter.md)
  ```javascript
  import { Chains } from '@verislabs/unlockd-sdk'
  await createWallet({
    provider,
    options: {
      chain: Chains.Sepolia
    }
  })
  ```

## Publish

1. Click on releases
2. Wrote the changes
3. Create new Tag
4. Publish

## Built With

- [Typescript](https://www.typescriptlang.org/)
- [Viem](https://viem.sh/)
- [axios](https://axios-http.com/)
- [joi](https://github.com/hapijs/joi)
- Love

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/UnlockdFinance/unlockd-ts/pkgs/npm/unlockd-ts).

## Authors

- **Enric Borrallo** - _Initial work_ - [eborrallo](https://github.com/eborrallo)
- **Alejandro Roige** - _All the other cool stuff_ - [roigecode](https://github.com/roigecode)

See also the list of [contributors](https://github.com/UnlockdFinance/unlockd-ts/contributors) who participated in this project.
