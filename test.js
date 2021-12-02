const test = require('ava');

const ResolveSteam = require('.');
const Utils = require('./src/helpers/utils');

// These are my steam id and custom url, They will not be changed.
const SteamID = '76561198250920834';
const SteamCustomID = 'Demiann';
const SteamCustomURL = 'https://steamcommunity.com/id/Demiann';

// Random group
const SteamGroupID = '103582791463600727';
const SteamGroupCustom = 'ROBOTAIM';
const SteamGroupCustomURL = 'https://steamcommunity.com/groups/ROBOTAIM';

test('toCustomURL Returns Custom URL', async (t) => {
  const Resolve = new ResolveSteam();

  const res = await Resolve.toCustomURL(SteamID);

  t.is(res, SteamCustomID);
});

test('fromCustomURL Returns SteamID64', async (t) => {
  const Resolve = new ResolveSteam();

  const res = await Resolve.fromCustomURL(SteamCustomID);

  t.is(res, SteamID);
});

test('fromIDToProfile Returns Object with user information', async (t) => {
  const Resolve = new ResolveSteam();

  const res = await Resolve.fromIDToProfile(SteamID);

  // Check a few values
  t.assert('steamID64' in res);
  t.assert('steamID' in res);
  t.assert('onlineState' in res);
  t.assert('stateMessage' in res);
  t.is(res.steamID64[0], SteamID);
});

test('fromCustomToProfile Returns Object with user information', async (t) => {
  const Resolve = new ResolveSteam();

  const res = await Resolve.fromCustomToProfile(SteamCustomID);

  // Check a few values
  t.assert('steamID64' in res);
  t.assert('steamID' in res);
  t.assert('onlineState' in res);
  t.assert('stateMessage' in res);
  t.is(res.steamID64[0], SteamID);
});

test('fromGroupURLToID Returns steam group id', async (t) => {
  const Resolve = new ResolveSteam();

  const res = await Resolve.fromGroupURLToID(SteamGroupCustomURL);

  t.is(res, SteamGroupID);
});

test('fromGIDToCustomURL Returns steam group custom url', async (t) => {
  const Resolve = new ResolveSteam();

  const res = await Resolve.fromGIDToCustomURL(SteamGroupID);

  t.is(res, SteamGroupCustom);
});

test('fromGroupUrlToProfile Returns Object with group information', async (t) => {
  const Resolve = new ResolveSteam();

  const res = await Resolve.fromGroupUrlToProfile(SteamGroupCustomURL);

  // Check a few values
  t.assert('groupID64' in res);
  t.assert('groupName' in res.groupDetails[0]);
  t.assert('groupURL' in res.groupDetails[0]);
  t.is(res.groupID64[0], SteamGroupID);
});

test('fromGIDToProfile Returns Object with group information', async (t) => {
  const Resolve = new ResolveSteam();

  const res = await Resolve.fromGIDToProfile(SteamGroupID);

  // Check a few values
  t.assert('groupID64' in res);
  t.assert('groupName' in res.groupDetails[0]);
  t.assert('groupURL' in res.groupDetails[0]);
  t.is(res.groupID64[0], SteamGroupID);
});

test('Parse params only returns the custom url', async (t) => {
  const res = Utils.parseParams(SteamCustomURL);

  t.is(res, SteamCustomID);
});
