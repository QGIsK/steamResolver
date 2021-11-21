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

```javascript[index.js]
const SteamResolver = require('@qgisk/steamresolver');
const resolve = new SteamResolver();
```
