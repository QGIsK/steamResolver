const SteamResolver = require('.');
const Resolve = new SteamResolver();

const get = async () => {
  const idFromCustom = await Resolve.toCustomURL('76561198250920834');

  //   console.log(idFromCustom);
  //   console.log(typeof   idFromCustom);

  const customToID = await Resolve.fromCustomURL('Demiann');

  //   console.log(customToID);
  //   console.log(typeof   customToID);

  const groupToID = await Resolve.fromGroupURLToID('ROBOTAIM');

  //   console.log(groupToID);
  //   console.log(typeof groupToID);

  const customToProfile = await Resolve.fromCustomToProfile('Demiann');

  //   console.log(customToProfile);
  //   console.log(typeof customToProfile);

  const groupUrlToProfile = await Resolve.fromGroupUrlToProfile('ROBOTAIM');

  //   console.log(groupUrlToProfile);
  //   console.log(typeof groupUrlToProfile);

  const idToProfile = await Resolve.from64ToProfile('76561198250920834');

  //   console.log(idToProfile);
  //   console.log(typeof idToProfile);
};

get();