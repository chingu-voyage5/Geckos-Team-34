'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// add environment variables here
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOODREADS_API_KEY: '""'
})
