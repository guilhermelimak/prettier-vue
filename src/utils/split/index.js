const regexIndexOf = require('../regex-index-of')
const separateTags = require('../separate-tags')

module.exports = (str, startTag, endTag) => {
  const sub = str.substring(
    regexIndexOf(str, startTag),
    regexIndexOf(str, endTag, true)
  )

  return { content: separateTags(sub) }
}
