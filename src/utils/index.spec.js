const utils = require('./')
const constants = require('./constants')

it('should expose a function that accepts the filesystem as dependency', () => {
  expect(typeof utils).toBe('function')
})

it('should return an object with utils methods', () => {
  const fs = jest.fn()

  const testUtils = utils(fs)

  expect(testUtils.isVueSFC).toBeDefined()
  expect(testUtils.writeToFile).toBeDefined()
  expect(testUtils.regexIndexOf).toBeDefined()
  expect(testUtils.separateTags).toBeDefined()
  expect(testUtils.split).toBeDefined()
  expect(testUtils.splitChunks).toBeDefined()
  expect(testUtils.isChanged).toBeDefined()
})

it('should expose constants', () => {
  expect(utils.constants).toBe(constants)
})
