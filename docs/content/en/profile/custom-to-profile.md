---
title: Custom URL to Profile
description: 'Get a full profile from a steam custom url'
category: 'Profile'
position: 8
---

## Usage

This method returns a full profile from a custom url

Supports just the custom name or a full link.

```javascript[index.js]
await Resolve.fromCustomToProfile('Demiann');
await Resolve.fromCustomToProfile('https://steamcommunity.com/id/Demiann');
```

## Output

- type: Object

```javascript
{
  steamID64: [ '76561198250920834' ],
  steamID: [ 'Demian' ],
  onlineState: [ 'offline' ],
  stateMessage: [ 'Offline' ],
  privacyState: [ 'public' ],
  visibilityState: [ '3' ],
  avatarIcon: [
    ''
  ],
  avatarMedium: [
    ''
  ],
  avatarFull: [
    ''
  ],
  vacBanned: [ '0' ],
  tradeBanState: [ 'None' ],
  isLimitedAccount: [ '0' ],
  customURL: [ 'Demiann' ],
  memberSince: [ 'September 18, 2015' ],
  steamRating: [ '' ],
  hoursPlayed2Wk: [ '0.0' ],
  headline: [ '' ],
  location: [ 'Faroe Islands' ],
  realname: [ 'Demian' ],
  summary: [ '' ],
  groups: [ { group: [Array] } ]
}

```
