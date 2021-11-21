---
title: ID to Custom URL
description: 'From steamID 64 to Custom URL'
category: 'Custom'
position: 3
---

## Usage

This method returns a steam custom url from a steamid64

Supports just the id, and a full url.

```javascript[index.js]
await Resolve.toCustomURL('76561198250920834');
await Resolve.toCustomURL('https://steamcommunity.com/profiles/76561198250920834');
```

## Output

- type: String

```json
Demiann
```
