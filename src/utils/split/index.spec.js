const {
  STYLE_START,
  STYLE_END,
  SCRIPT_START,
  SCRIPT_END
} = require('../constants')

const split = require('./')
const fixtures = require('../../../__tests__/fixtures')

it('should be a function', () => {
  expect(typeof split).toBe('function')
})

it('should be able to extract scss chunks', () => {
  const result = split(fixtures.removeStyleTagsParam, STYLE_START, STYLE_END)

  expect(result).toEqual({
    content: fixtures.removeStyleTagsExpectedResult
  })
})

it('should be able to extract js chunks', () => {
  const result = split(fixtures.removeScriptTagsParam, SCRIPT_START, SCRIPT_END)

  expect(result).toEqual({
    content: fixtures.removeScriptTagsExpectedResult
  })
})
