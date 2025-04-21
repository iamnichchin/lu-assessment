// utils/loadConfig.js
function getConfig(env = 'assessment') {
    return require(`../config/${env}.js`);
  }
  
  module.exports = { getConfig };