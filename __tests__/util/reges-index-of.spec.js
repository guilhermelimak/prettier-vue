const regexIndexOf = require('../../src/utils/regex-index-of')

it('should return the index of matching regex', () => {
  const txt = '<style>testText000'

  expect(regexIndexOf(txt, /sty.*>/gi)).toEqual(1)
  expect(regexIndexOf(txt, /test/gi)).toEqual(7)
})

it('should return the last index of matching regex', () => {
  const txt = '<style>testText000'

  expect(regexIndexOf(txt, /sty.*>/gi, true)).toEqual(7)
  expect(regexIndexOf(txt, /test/gi, true)).toEqual(11)
})
