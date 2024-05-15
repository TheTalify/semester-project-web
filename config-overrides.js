const { override, fallback } = require('customize-cra');

module.exports = override(
  fallback({
    util: false
  })
);