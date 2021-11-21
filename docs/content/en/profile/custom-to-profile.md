---
title: Custom URL to Profile
description: 'Get a full profile from a steam custom url'
category: 'Profile'
position: 6
---

## Usage

This method returns a full profile from a custom url

Supports just the custom name or a full link.

```javascript[index.js]
await Resolve.fromCustomToFull('Demiann');
await await Resolve.fromCustomToFull('https://steamcommunity.com/id/Demiann');
```
