---
title: ID64 to Profile
description: 'Get a full profile from a steam64 ID'
category: 'Profile'
position: 8
---

## Usage

This method returns a steam profile from id

Supports just the id, or a full url.

```javascript[index.js]
await Resolve.from64ToFull('76561198250920834');
await Resolve.from64ToFull('https://steamcommunity.com/profiles/76561198250920834');
```
