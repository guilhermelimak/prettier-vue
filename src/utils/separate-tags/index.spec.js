const separateTags = require('./')
const fixtures = require('../../../__tests__/fixtures')

it('should remove style tags and return tag content', () => {
  const param = fixtures.removeStyleTagsParam
  const expectedResult = fixtures.removeStyleTagsExpectedResult

  const result = separateTags(param)
  expect(result).toBe(expectedResult)
})

it('should remove script tags and return tag content', () => {
  const param = fixtures.removeScriptTagsParam
  const expectedResult = fixtures.removeScriptTagsExpectedResult

  const result = separateTags(param)
  expect(result).toBe(expectedResult)
})

it('should return undefined when string is empty', () => {
  const result = separateTags('')
  expect(result).toBeUndefined()
})
