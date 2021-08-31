const ResolveSteam = require('.');

const client = new ResolveSteam();

const get = async () => {
  const id = await client.fromCustomURL('https://steamcommunity.com/id/Demiann');

  console.log(id);
};

get();
