const fs = require('fs')

const regexIndexOf = (text, regex, isEnd) => {
  isEnd = isEnd || false

  const match = text.match(regex)

  if (!match) return -1

  const startIdx = text.indexOf(match[0])
  const endIdx = text.indexOf(match[0]) + match[0].length

  return isEnd ? endIdx : startIdx
}

const writeToFile = (path, content) => {
  try {
    fs.writeFileSync(path, content, 'utf8')
  } catch (err) {
    console.log(error)
  }
}

module.exports = { regexIndexOf, writeToFile }
