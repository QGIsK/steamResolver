---
title: Group ID to Custom URL
description: 'From steamGroupID 64 to Custom URL'
category: 'Custom'
position: 5
---

## Usage

This method returns a steam custom url from a steamid64

Supports just the id, and a full url.

```javascript[index.js]
await Resolve.fromGIDToCustomURL('103582791463600727');
await Resolve.fromGIDToCustomURL('https://steamcommunity.com/gid/103582791463600727');
```

## Output

- type: String

```json
ROBOTAIM
```
