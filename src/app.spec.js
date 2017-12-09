const app = require('./app')
const { help: helpMessage } = require('./messages')

describe('src/app.js', () => {
  it('should return help string if help is provided', () => {
    const output = app({ help: true })

    expect(output).toBe(helpMessage)
  })

  it('should run runnable passing opts if help is not provided', () => {
    const runnable = jest.fn()

    const options = {
      any: 321
    }

    const output = app(options, runnable)

    expect(output).toBeUndefined()
    expect(runnable).toHaveBeenCalledWith(options)
  })
})
