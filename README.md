# steamid-finder
Based off [ HerrEurobeat/node-steamid-resolver](https://github.com/HerrEurobeat/node-steamid-resolver/) but refactored to fit my needs

This package does one thing and that is go from a custom steam url to an id

For now please check index.js for methods untill this is updated

example
```javascript
const steamResolver = require('steamResolver');

const id = await steamResolver.fromCustomURL('Demian');

console.log(id)
```



