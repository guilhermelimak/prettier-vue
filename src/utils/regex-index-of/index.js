const regexIndexOf = (text, regex, isEnd) => {
  isEnd = isEnd || false

  const match = text.match(regex)

  if (!match) return -1

  const startIdx = text.indexOf(match[0])
  const endIdx = text.indexOf(match[0]) + match[0].length

  return isEnd ? endIdx : startIdx
}

module.exports = regexIndexOf
