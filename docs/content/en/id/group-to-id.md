---
title: Group Url to id
description: 'Gets a group id'
category: 'ID'
position: 7
---

## Usage

This method returns a steamid from a group url

Supports just the name or a full link.

```javascript[index.js]
await Resolve.fromGroupURLToID('ROBOTAIM');
await Resolve.fromGroupURLToID('https://steamcommunity.com/groups/ROBOTAIM');
```

## Output

- type: String

```json
103582791463600727
```
