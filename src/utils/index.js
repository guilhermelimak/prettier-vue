const isVueSFC = require('./is-vue-sfc')
const regexIndexOf = require('./regex-index-of')
const writeToFile = require('./write-to-file')
const readFile = require('./read-file')
const separateTags = require('./separate-tags')
const split = require('./split')
const splitChunks = require('./split-chunks')
const isChanged = require('./is-changed')
const constants = require('./constants')

const utils = fs => ({
  isVueSFC,
  regexIndexOf,
  split,
  splitChunks,
  separateTags,
  isChanged,
  writeToFile: writeToFile(fs),
  readFile: readFile(fs)
})

utils.constants = constants

module.exports = utils
