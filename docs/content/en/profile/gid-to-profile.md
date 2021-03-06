---
title: Group ID to Profile
description: 'Returns group profile'
category: 'Profile'
position: 11
---

## Usage

This method returns a steamid from a group url

Supports just the name or a full link.

```javascript[index.js]
await Resolve.fromGIDToProfile('103582791463600727');
await Resolve.fromGIDToProfile('https://steamcommunity.com/gid/103582791463600727');
```

## Output

-   type: Object

```javascript
{
  groupID64: [ '103582791463600727' ],
  groupDetails: [
    {
      groupName: [Array],
      groupURL: [Array],
      headline: [Array],
      summary: [Array],
      avatarIcon: [Array],
      avatarMedium: [Array],
      avatarFull: [Array],
      memberCount: [Array],
      membersInChat: [Array],
      membersInGame: [Array],
      membersOnline: [Array]
    }
  ],
  memberCount: [ '256938' ],
  totalPages: [ '257' ],
  currentPage: [ '1' ],
  startingMember: [ '0' ],
  nextPageLink: [
    'https://steamcommunity.com/gid/103582791463600727/memberslistxml?xml=1&p=2'
  ],
  members: [ { steamID64: [Array] } ]
}
```
