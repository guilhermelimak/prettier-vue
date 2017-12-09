const splitChunks = require('./')
const fixtures = require('../../../__tests__/fixtures')
it('should be a function', () => {
  expect(typeof splitChunks).toBe('function')
})

it('should extract both scss and js chunks and return as an object', () => {
  const result = splitChunks(fixtures.entireVueFile)

  expect(result.js).toBeDefined()
  expect(result.scss).toBeDefined()

  expect(result.js).toEqual({
    content: `import NavMenu from \'./NavMenu\'\n\nexport default {\n  name: \'app\',\n\n  components: {\n    NavMenu\n  }\n}`
  })

  expect(result.scss).toEqual({
    content: `.class {\n  border-style: dashed !important;\n}`
  })
})
