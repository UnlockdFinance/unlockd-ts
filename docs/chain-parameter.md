# Chain parameter

Chain to use when calling the Unlockd SDK functions.

_Example:_

```ts
import { Chains } from '@verislabs/unlockd-sdk'
await buyNow({
  provider,
  signature,
  args: {},
  options: {
    chain: Chains.Sepolia
  }
})
```

The chain is passed in the options object and it's **optional**.

If no chain is referenced, it will **default to mainnet network**.

---

There are **three options** available and they are **mutually exclusive**.

### Option 1: `chain`

Can use the exported `Chains` object from the SDK.

```ts
import { Chains } from '@verislabs/unlockd-sdk'
await createWallet({ provider, options: { chain: Chains.Sepolia } })
```

Or can use the exported chain object from `viem/chains`

```ts
import { sepolia } from 'viem/chains'
await createWallet({ provider, options: { chain: sepolia } })
```

Both will be valid options.

### Option 2: `chainId`

Pass the chain id as number.

```ts
await createWallet({ provider, options: { chain: 11155111 } })
```

### Option 3: `network`

Pass the network name as string.

```ts
await createWallet({ provider, options: { network: 'sepolia' } })
```

---

Only one chain option can be passed at a time. Referencing multiple options, even if they point to the same network, it will throw an error.

```
await createWallet({provider, options: { network: 'sepolia', chain: sepolia }})
// InvalidChainOptionError: Only one of network, chain, or chainId should be defined.
```

---

### Supported networks:

- By network: `'mainnet', 'sepolia', 'polygonAmoy', 'localhost'`
- By chainId: `1, 11155111, 1337, 80002`
- By chain (from the sdk): `Chains.Mainnet, Chains.Sepolia, Chains.PolygonAmoy, Chains.Localhost`
- By chain (from viem/chains): `mainnet, sepolia, polygonAmoy, localhost`

[See Chains page](./enums/Chains.md)
