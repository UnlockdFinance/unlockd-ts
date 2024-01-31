@unlockdfinance/unlockd-ts / [Exports](modules.md)

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
    <a href="https://devs.unlockd.finance/"><b>Documentation</b></a>
</p>

[//]: # ()
[//]: # ([![npm version]&#40;https://img.shields.io/npm/v/unlockd-ts.svg?style=flat-square&#41;]&#40;https://www.npmjs.org/package/unlockd-ts&#41;)

[//]: # ([![Build status]&#40;https://img.shields.io/github/actions/workflow/status/unlockd-ts/unlockd-ts/ci.yml?branch=v1.x&label=CI&logo=github&style=flat-square&#41;]&#40;https://github.com/unlockd-ts/unlockd-ts/actions/workflows/ci.yml&#41;)

[//]: # ([![code coverage]&#40;https://img.shields.io/coveralls/mzabriskie/unlockd-ts.svg?style=flat-square&#41;]&#40;https://coveralls.io/r/mzabriskie/unlockd-ts&#41;)

[//]: # ([![npm bundle size]&#40;https://img.shields.io/bundlephobia/minzip/unlockd-ts?style=flat-square&#41;]&#40;https://bundlephobia.com/package/unlockd-ts@latest&#41;)

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
- Calculate the available amount to borrow

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## Installing

- Creates token https://github.com/settings/tokens
   - Login, the GitHub token should has enabled
      - [x] **write:packages** Upload packages to GitHub Package Registry
      - [x] **read:packages** Download packages from GitHub Package Registry

```sh
npm login --scope=@unlockdfinance --registry=https://npm.pkg.github.com

Username: <your github user>
Password: <github token>
Email: <your github user>
```

### Package manager

Using npm:

```bash
$ npm install @unlockdfinance/unlockd-ts
```

Using bower:

```bash
$ bower install @unlockdfinance/unlockd-ts
```

Using yarn:

```bash
$ yarn add @unlockdfinance/unlockd-ts
```

Using pnpm:

```bash
$ pnpm add @unlockdfinance/unlockd-ts

```

## Example
### Fetch prices 
```javascript
import { UnlockdApi} from "@unlockdfinance/unlockd-ts";

const api= new UnlockdApi()
 const params = {
            "nfts":
                [
                    {
                        "collection": "0x1750d2e6f2fb7fdd6a751833f55007cf76fbb358",
                        "tokenId": "10"
                    }
                ],
            "underlyingAsset": "0x7b79995e5f793a07bc00c21412e50ecae098e7f9"
        }
const response = await api.prices(params.nfts, params.underlyingAsset)
```

### Login
```javascript
import { UnlockdApi} from "@unlockdfinance/unlockd-ts";

const api= new UnlockdApi()
const address='0x0000000000000000000000000000000000000000'
const message = await api.signatureMessage(address)
//Sign message from your wallet o with Pk
//...
const signedMessage='...'
const authToken = await api.validateMessage(signedMessage)
```

### Borrow signature 
```javascript
//At lease 1 of the props
import {ActionRequest, UnlockdApi} from "@unlockdfinance/unlockd-ts";
const api= new UnlockdApi()

const params: ActionRequest = {
  loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',//Optional
  nfts: [{collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId'}]//Optional 
}
const authToken = await api.borrowSignature(authToken, params)
```
### Minimum Repay
```javascript
import {minimumToRepay} from "@unlockdfinance/unlockd-ts";

const params = {
    initialLoans: [
        {
            valuation: 10000000n,
            ltv: 5000n,
        },
        {
            valuation: 10000000n,
            ltv: 5000n,
        },
    ],
    indicesToDelete: [1],
    totalDebt: 2n,
}
const result = minimumToRepay(params)
```

### Liquidation price
```javascript
import {liquidationPrice} from "@unlockdfinance/unlockd-ts";
const oneEth = BigInt(1e18)

const params = {
    debt: (BigInt(50) * oneEth),
    liquidationThreshold: BigInt(8500)
}
const result = liquidationPrice(params)
````

### Health Factor
```javascript
import {healthFactor} from "@unlockdfinance/unlockd-ts";
const oneEth = BigInt(1e18)

const params = {
  collateral: (BigInt(100) * oneEth),
  debt: (BigInt(50) * oneEth),
  liquidationThreshold: BigInt(8500)
}
const result = healthFactor(params)
````

### Available to borrow
```javascript
import {availableToBorrow} from "@unlockdfinance/unlockd-ts";

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
````

## Publish 
1. Click on releases
2. Wrote the changes
3. Create new Tag
4. Publish

## Built With

* Typescript 
* Love

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/UnlockdFinance/unlockd-ts/pkgs/npm/unlockd-ts).

## Authors

* **Enric Borrallo** - *Initial work* - [eborrallo](https://github.com/eborrallo)
* **Alejandro Roige** - *All the other cool stuff* - [roigecode](https://github.com/roigecode)

See also the list of [contributors](https://github.com/UnlockdFinance/unlockd-ts/contributors) who participated in this project.
