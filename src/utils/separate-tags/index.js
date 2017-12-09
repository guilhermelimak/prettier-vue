module.exports = substring => {
  const splitted = substring.trim().split('\n')

  if (!splitted.length || !splitted[0]) return

  return splitted.slice(1, splitted.length - 1).join('\n')
}
