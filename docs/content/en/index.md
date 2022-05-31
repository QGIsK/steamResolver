---
title: Introduction
description: 'Introduction'
category: 'Getting Started'
position: 1
features:
    - ID to Custom url
    - Custom url to ID
    - ID to Full Profile
    - Custom url to full Profile
    - Group url to ID
    - Group ID to full profile
---

A NodeJS SteamResolver with only two dependencies [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch) and [xml2js](https://www.npmjs.com/package/xml2js).

## Features

<list :items="features"></list>

## Simple Example

```javascript[index.js]
// Import the wrapper library
import SteamResolver from '@qgisk/steamresolver';
// Import your preferred fetch library
import fetch from 'isomorphic-unfetch'

// Or for CommonJS
const {SteamResolver} = require('@qgisk/steamresolver');

// Initiate the client
const Resolve = new SteamResolver(fetch);

// Create a function that gets the custom url
const get = async () => {
  const fromID = await Resolve.toCustomURL('76561198250920834');
  const fromLink = await Resolve.toCustomURL('htts://steamcommunity.com/profiles/76561198250920834');

  console.log(fromID, fromLink);
};

// Execute the function
get();
```
