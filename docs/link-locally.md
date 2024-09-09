## Link the package locally for local dev

Install bun: https://bun.sh/docs/installation

```bash
bun install
```

```bash
bun run build
```

Now you should have a new `dist` folder. Let's link the project using npm:

```bash
npm link
```

Now head to your main project and run:

```bash
npm link @verislabs/unlockd-sdk
```

You should be **all set** and be able to import from the package normally:

```ts
import { Chains, UnlockdApi, createWallet, getWallet } from '@verislabs/unlockd-sdk'
```

If you need the abis, these are exported separately:

```ts
import { abis } from '@verislabs/unlockd-sdk/abis'
```

> _viem is a peer dependency for the sdk. if you don't have it already run `npm install viem` in your main project_

---

### Dev

If you encounter issues and you want to update the package source code, here's the way:

Run in the package directory:

```bash
bun run dev
```

This will watch over the package files so you can edit `/src` directly. There will be a slight delay (~5s) because it's doing a cleanup then recreate all files. When updated you will see the changes directly in your project where you're importing it. Including types. Refresh and retry!

Once you're done and **ready to push** the package updates, first run:

```base
bun run test
```

Make sure all tests pass. Update the test if needed.

Commit and push to a new PR!

We'll determine together when to create a new release and **publish to npm**.

---

### Prod

When the package is stable, in your main project you'll want to install the sdk and its dependencies before pushing your changes to prod.

```bash
npm install viem @verislabs/unlockd-sdk
```
