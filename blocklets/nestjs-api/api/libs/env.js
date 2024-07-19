const env = require('@blocklet/sdk/lib/env');

console.log('env: ', env);
module.exports = {
  ...env,
  chainHost: process.env.CHAIN_HOST || '',
};
