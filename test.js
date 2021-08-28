const resolveSteam = require('.');

const get = async () => {
  const id = await resolveSteam.fromCustomURL('Demiann');

  console.log(id);
};

get();
