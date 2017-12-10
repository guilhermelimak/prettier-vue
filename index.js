#!/usr/bin/env node
const opts = require('minimist')(process.argv.slice(2))

const PrettierVue = require('./src/lib')
const app = require('./src/app')

const output = app(opts, () => new PrettierVue(opts))

if (typeof output === 'string') {
  console.log(output)
}
