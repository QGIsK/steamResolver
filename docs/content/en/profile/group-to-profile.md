---
title: Group Url to Profile
description: 'Returns group profile'
category: 'Profile'
position: 9
---

## Usage

This method returns a steamid from a group url

Supports just the name or a full link.

```javascript[index.js]
await Resolve.fromGroupUrlToProfile('ROBOTAIM');
await Resolve.fromGroupUrlToProfile('https://steamcommunity.com/groups/ROBOTAIM');
```

## Output

- type: Object

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
    'https://steamcommunity.com/groups/ROBOTAIM/memberslistxml?xml=1&p=2'
  ],
  members: [ { steamID64: [Array] } ]
}
```
