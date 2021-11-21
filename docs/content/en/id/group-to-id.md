---
title: Group Url to id
description: 'Gets a group id'
category: 'ID'
position: 5
---

## Usage

This method returns a steamid from a group url

Supports just the name or a full link.

```javascript[index.js]
await Resolve.fromGroupUrlToFull('ROBOTAIM');
await Resolve.fromGroupUrlToFull('https://steamcommunity.com/groups/ROBOTAIM');
```
