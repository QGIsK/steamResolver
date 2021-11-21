---
title: Group Url to Full profile
description: 'Returns group profile'
category: 'Profile'
position: 7
---

## Usage

This method returns a steamid from a group url

Supports just the name or a full link.

```javascript[index.js]
await Resolve.fromGroupUrlToFull('ROBOTAIM');
await Resolve.fromGroupUrlToFull('https://steamcommunity.com/groups/ROBOTAIM');
```
