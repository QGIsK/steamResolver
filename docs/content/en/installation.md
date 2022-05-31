---
title: Installation
description: 'Installing the resolver'
position: 2
category: 'Getting Started'
---

Add `@qgisk/steamresolver` to your project

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @qgisk/steamresolver
```

</code-block>
<code-block label="NPM">

```bash
npm install @qgisk/steamresolver
```

</code-block>
</code-group>

then import `@qgisk/steamresolver` in your main file and initiate the client
Don't forget to use a fetch library, I suggest either [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch) or [cross-fetch](https://www.npmjs.com/package/cross-fetch)

```javascript[index.js]
// for modules
import SteamResolver from '@qgisk/steamresolver';

// or for commonjs
const {SteamResolver} = require('@qgisk/steamresolver)

// Your fetch library of choice
import fetch from 'isomorphic-unfetch'

const resolve = new SteamResolver(fetch);
```
