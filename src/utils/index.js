const isVueSFC = require('./is-vue-sfc')
const regexIndexOf = require('./regex-index-of')
const writeToFile = require('./write-to-file')
const separateTags = require('./separate-tags')
const split = require('./split')
const splitChunks = require('./split-chunks')
const isChanged = require('./is-changed')
const constants = require('./constants')

const utils = fs => ({
  isVueSFC: isVueSFC,
  regexIndexOf: regexIndexOf,
  split: split,
  splitChunks: splitChunks,
  separateTags: separateTags,
  isChanged: isChanged,
  writeToFile: writeToFile(fs)
})

utils.constants = constants

module.exports = utils
