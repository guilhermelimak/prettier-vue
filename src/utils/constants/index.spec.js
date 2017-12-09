const constants = require('./')

it('should expose VUE_EXT as .vue', () => {
  expect(constants.VUE_EXT).toBeDefined()
  expect(constants.VUE_EXT).toBe('.vue')
})

it('should expose STYLE_START regex', () => {
  expect(constants.STYLE_START).toBeDefined()
  expect(constants.STYLE_START).toEqual(/<style.*>/gi)
})

it('should expose STYLE_END regex', () => {
  expect(constants.STYLE_END).toBeDefined()
  expect(constants.STYLE_END).toEqual(/<\/style>/gi)
})
it('should expose SCRIPT_START regex', () => {
  expect(constants.SCRIPT_START).toBeDefined()
  expect(constants.SCRIPT_START).toEqual(/<script.*>/gi)
})
it('should expose SCRIPT_END regex', () => {
  expect(constants.SCRIPT_END).toBeDefined()
  expect(constants.SCRIPT_END).toEqual(/<\/script>/gi)
})
