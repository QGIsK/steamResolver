---
title: Custom to ID
description: 'From a Custom URL steam id'
category: 'ID'
position: 5
---

## Usage

This method returns a steamid64 from a custom url

Supports just the custom id, or a full url.

```javascript[index.js]
await Resolve.fromCustomURL('Demiann');
await Resolve.fromCustomURL('https://steamcommunity.com/id/Demiann');
```

## Output

- type: String

```json
76561198250920834
```
