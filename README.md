# Steam ID Resolver for NodeJS

<span class="badge-npmversion"><a href="https://www.npmjs.com/package/@qgisk/steamresolver" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@qgisk/steamresolver.svg" alt="NPM version"/></a></span>
<span class="badge-npmdownloads"><a href="https://www.npmjs.org/package/@qgisk/steamresolver" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@qgisk/steamresolver.svg" alt="NPM downloads" /></a></span>
[![Test package](https://github.com/QGIsK/steamResolver/actions/workflows/test.js.yml/badge.svg?branch=main)](https://github.com/QGIsK/steamResolver/actions/workflows/test.js.yml)

A NodeJS SteamResolver with only two dependencies [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch) and [xml2js](https://www.npmjs.com/package/xml2js).

## • NOTICE
Steam is now blocking most of these requests ( Half the time -ish), I suggest using their api from now on, see [docs](https://wiki.teamfortress.com/wiki/WebAPI/ResolveVanityURL)

## • Description

This package converts custom steam urls into ids and the other way around, Also converts it into full profiles.

## • Installation

```bash
npm i @qgisk/steamresolver
```

## • Quick Start Example

```javascript
// Import the wrapper library
import SteamResolver from '@qgisk/steamresolver';
// Or for CommonJS
const {SteamResolver} = require('@qgisk/steamresolver');

// Initiate the client
const Resolve = new SteamResolver();

// Create a function that gets the custom url
const get = async () => {
    const fromID = await Resolve.toCustomURL('76561198250920834');
    const fromLink = await Resolve.toCustomURL('htts://steamcommunity.com/profiles/76561198250920834');

    console.log(fromID, fromLink);
};

// Execute the function
get();
```

## • CDN

Common JS

```
https://cdn.jsdelivr.net/npm/@qgisk/steamresolver@2.1.2/dist/index.js
```

Module

```
https://cdn.jsdelivr.net/npm/@qgisk/steamresolver@2.1.2/dist/index.mjs
```

## • Full documentation

Full documentation can be found [here](https://steamresolver.docs.demiann.dev)

## • Inspiration

[miscavage/CoinGecko-API](https://github.com/miscavage/CoinGecko-API/)

[HerrEuroBeat/node-steamid-resolver](https://github.com/HerrEurobeat/node-steamid-resolver/)

## • License

[MIT](LICENSE)
