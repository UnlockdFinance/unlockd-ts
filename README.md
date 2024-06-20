#

<p align="center" style="margin-bottom:32px">
  <a href="https://unlockd.finance">
    <img alt="Unlockd logo" src="https://miro.medium.com/v2/resize:fit:478/1*XczVr9Gw1fm5duTt1IvvYA.png" width="auto" height="92px" />
  </a>
</p>

<h1 align="center">Unlockd SDK</h1>

<p align="center">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
</p>
<p align="center">The Unlockd SDK is a tool that enables developers to integrate blockchain-based RWA-backed lending and borrowing functionalities into their applications. With the Unlockd SDK, you can easily interact with the Unlockd protocol, which allows users to collateralize their tokenized assets and obtain instant, open-ended loans.</p>

<p align="center">
    <a href="https://unlockd.finance/"><b>Website</b></a> •
    <a href="https://app.unlockd.finance"><b>App</b></a> •
    <a href="https://sdk.unlockd.finance"><b>SDK Docs</b></a>•
    <a href="https://docs.unlockd.finance"><b>Protocol Docs</b></a> •
    <a href="https://devs.unlockd.finance/"><b>Dev Docs</b></a> •
    <a href="https://risk.unlockd.finance"><b>Risc Docs</b></a> •
    <a href="https://linktr.ee/unlockd"><b>Socials</b></a> •
    <a href="/docs"><b>Docs</b></a>
</p>

[//]: # ()
[//]: # ([![npm version]&#40;https://img.shields.io/npm/v/unlockd-ts.svg?style=flat-square&#41;]&#40;https://www.npmjs.org/package/unlockd-ts&#41;)

[//]: # ([![Build status]&#40;https://img.shields.io/github/actions/workflow/status/unlockd-ts/unlockd-ts/ci.yml?branch=v1.x&label=CI&logo=github&style=flat-square&#41;]&#40;https://github.com/unlockd-ts/unlockd-ts/actions/workflows/ci.yml&#41;)

[//]: # ([![code coverage]&#40;https://img.shields.io/coveralls/mzabriskie/unlockd-ts.svg?style=flat-square&#41;]&#40;https://coveralls.io/r/mzabriskie/unlockd-ts&#41;)

[//]: # ([![npm bundle size]&#40;https://img.shields.io/bundlephobia/minzip/unlockd-ts?style=flat-square&#41;]&#40;https://bundlephobia.com/package/unlockd-ts@latest&#41;)


## 🗂️ Table of Contents

- [About](#about)
- [Features](#features)
- [Browser Support](#browser-support)
- [Installing](#installing)
   - [Package manager](#package-manager)
- [Example](#example)
- [Keywords](#keywords)


## About
    
Unlockd is a permissionless RWA liquidity protocol powered by advanced AI, enabling users to participate as depositors or borrowers. It provides a secure and cost-effective way to borrow against tokenized Real-World Assets and financial assets with instant loans and auto-compounding yield for lenders. Built on Ethereum and Polygon with plans for expansion to multiple Layer 2 networks, Unlockd offers a Peer-to-Pool model that ensures efficient and fair lending and borrowing.

The Unlockd SDK allows developers to integrate these RWA-backed borrowing functionalities into their applications. It is particularly useful for Unlockd partners with supported and whitelisted assets, enabling them to offer borrowing against assets or portfolios directly within their interfaces and provide financing options at the point of purchase.


## Features

- Create signatures for:
    - Borrow
    - Repay
    - Bid
    - Redeem
    - Sell now
    - Market calls
- Calculate:
    - Minimum amount to repay a loan
    - Liquidation price of a loan
    - Health factor of a loan
    - Available amount to action


## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |


## Installing

### Package manager

Using npm:

```bash
$ npm install @verislabs/unlockd-sdk
```

Using bower:

```bash
$ bower install @verislabs/unlockd-sdk
```

Using yarn:

```bash
$ yarn add @verislabs/unlockd-sdk
```

Using pnpm:

```bash
$ pnpm add @verislabs/unlockd-sdk

```


## Example

### Fetch prices 
```javascript
import { UnlockdApi} from "@verislabs/unlockd-sdk";

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
import { UnlockdApi} from "@verislabs/unlockd-sdk";

const api= new UnlockdApi()
const address='0x0000000000000000000000000000000000000000'
const message = await api.signatureMessage(address)
//Sign message from your wallet or with Pk
//...
const signedMessage='...'
const authToken = await api.validateMessage(signedMessage)
```

### Borrow signature 
```javascript
//At least one of the props
import {ActionRequest, UnlockdApi} from "@verislabs/unlockd-sdk";
const api= new UnlockdApi()

const params: ActionRequest = {
  loanId: '0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0',//Optional
  nfts: [{collection: '0x1234567890abcdefABCDEF1234567890abcdefAB', tokenId: 'testTokenId'}]//Optional 
}
const authToken = await api.borrowSignature(authToken, params)
```

### Minimum Repay
```javascript
import {minimumToRepay} from "@verislabs/unlockd-sdk";

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
import {liquidationPrice} from "@verislabs/unlockd-sdk";
const oneEth = BigInt(1e18)

const params = {
    debt: (BigInt(50) * oneEth),
    liquidationThreshold: BigInt(8500)
}
const result = liquidationPrice(params)
````

### Health Factor
```javascript
import {healthFactor} from "@verislabs/unlockd-sdk";
const oneEth = BigInt(1e18)

const params = {
  collateral: (BigInt(100) * oneEth),
  debt: (BigInt(50) * oneEth),
  liquidationThreshold: BigInt(8500)
}
const result = healthFactor(params)
````


### Available to action
```javascript
import {availableToBorrow} from "@verislabs/unlockd-sdk";

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

## Keywords

- RWA
- Real World Assets
- Tokenization
- NFT lending
- Liquidity pool
- Blockchain
- Decentralized Finance
- DeFi
- Crypto
- Permissionless
- Loans


## Publish 
1. Click on releases
2. Write the changes
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

