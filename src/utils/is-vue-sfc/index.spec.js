const isVueSFC = require('./')
const { VUE_EXT } = require('../constants')

it(`return true if has ${VUE_EXT} in path`, () => {
  expect(isVueSFC(`./file${VUE_EXT}`)).toBeTruthy()
})

it(`return false if it doesn't has  ${VUE_EXT} in path`, () => {
  expect(isVueSFC('./file.js')).toBeFalsy()
})
