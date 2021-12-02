---
title: ID to Profile
description: 'Get a full profile from a steam64 ID'
category: 'Profile'
position: 10
---

## Usage

This method returns a steam profile from id

Supports just the id, or a full url.

```javascript[index.js]
await Resolve.fromIDToProfile('76561198250920834');
await Resolve.fromIDToProfile('https://steamcommunity.com/profiles/76561198250920834');
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
