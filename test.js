const resolveSteam = require('.');

const get = async () => {
  const id = await resolveSteam.customUrlTosteamID64('Demiann');

  console.log(id);
};

get();
