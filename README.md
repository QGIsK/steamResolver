# Joke API Client for NodeJS

<span class="badge-npmversion"><a href="https://www.npmjs.com/package/@faceit-helpers/steamResolver" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@faceit-helpers/steamResolver.svg" alt="NPM version"/></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@faceit-helpers/steamResolver" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@faceit-helpers/steamResolver.svg" alt="NPM downloads" /></a></span>
[![CodeQL](https://github.com/faceit-helpers/steamResolver/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/faceit-helpers/steamResolver/actions/workflows/codeql-analysis.yml)
[![Test package](https://github.com/faceit-helpers/steamResolver/actions/workflows/test.js.yml/badge.svg?branch=main)](https://github.com/faceit-helpers/steamResolver/actions/workflows/test.js.yml)

A nodejs SteamResolver with only two dependencies [node-fetch](https://www.npmjs.com/package/node-fetch).

## • Description

This package converts custom steam urls into ids and the other way around, Also converts it into full profiles.

## • Installation

```bash
npm i github:faceit-helpers/steamResolver
```

## • Constants

This module provides helper constants for use in calls.

| Key    | Usage                | Description        |
| ------ | -------------------- | ------------------ |
| `BASE` | `SteamResolver.BASE` | Base url for steam |

## • Quick Start Example

```javascript
// Import the wrapper library
const SteamResolver = require('@faceit-helpers/steamResolver');

// Initiate the client
const Resolver = new SteamResolver();

// Create a function that gets a joke
const get = async () => {
  const fromID = await Resolve.toCustomURL('76561198250920834');
  const fromLink = await Resolve.toCustomURL('htts://steamcommunity.com/profiles/76561198250920834');

  console.log(fromID, fromLink);
};

// Execute the function
get();
```

## • From id to custom url

Converts a steamID64 into a custom url

### • Example

```javascript
const res = await Resolve.toCustomURL('76561198250920834');
const res = await Resolve.toCustomURL('https://steamcommunity.com/profiles/76561198250920834');
```

## • From custom url to id

Converts a custom url into a steamID64

### • Example

```javascript
const res = await Resolve.fromCustomURL('Demiann');
const res = await Resolve.fromCustomURL('https://steamcommunity.com/id/Demiann');
```

## • From steamID64 to full information

Converts a steamID64 into a full profile

### • Example

```javascript
const res = await Resolve.from64ToFull('76561198250920834');
const res = await Resolve.from64ToFull('https://steamcommunity.com/profiles/76561198250920834');
```

## • From Custom URL to full information

Converts a Custom URL into a full profile

### • Example

```javascript
const res = await Resolve.fromCustomToFull('Demiann');
const res = await Resolve.fromCustomToFull('https://steamcommunity.com/id/Demiann');
```

## • From Group url to id

Converts a Goup URL into an id

### • Example

```javascript
const res = await Resolve.fromGroupURLToID('ROBOTAIM');
const res = await Resolve.fromGroupURLToID('https://steamcommunity.com/groups/ROBOTAIM');
```

## • From Group url to Full information

Converts a Goup URL into a full profile

### • Example

```javascript
const res = await Resolve.fromGroupUrlToFull('ROBOTAIM');
const res = await Resolve.fromGroupUrlToFull('https://steamcommunity.com/groups/ROBOTAIM');
```

## • Inspiration

[miscavage/CoinGecko-API](https://github.com/miscavage/CoinGecko-API/)
[HerrEuroBeat/node-steamid-resolver](https://github.com/HerrEurobeat/node-steamid-resolver/)

## • License

[MIT](LICENSE)
