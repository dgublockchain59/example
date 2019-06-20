'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint')
  }
}

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
