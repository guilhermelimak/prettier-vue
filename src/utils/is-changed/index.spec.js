const isChanged = require('./')

it('should be a function', () => {
  expect(typeof isChanged).toBe('function')
})
it('should return if lang.content is different from lang.formatted', () => {
  const param = {
    content: 'foo',
    formatted: 'bar'
  }

  const result = isChanged(param)

  expect(result).toBeTruthy()
})
