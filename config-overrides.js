const { override, addDecoratorsLegacy } = require("customize-cra");
const setGlobalObject = value => config => {
  config.output.globalObject = value
  return config
}

module.exports = override(setGlobalObject('this'), addDecoratorsLegacy());
