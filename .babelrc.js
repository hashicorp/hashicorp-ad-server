/**
 * Copyright IBM Corp. 2020
 */

const pkg = require('./package.json')

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: pkg.engines.node,
        },
      },
    ],
  ],
}
