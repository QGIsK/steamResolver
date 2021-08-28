const resolveSteam = require('.');

const get = async () => {
  const id = await resolveSteam.fromCustomURL('https://steamcommunity.com/id/Demiann');

  console.log(id);
};

get();
