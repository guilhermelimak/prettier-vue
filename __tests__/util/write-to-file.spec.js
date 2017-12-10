const writeToFile = require('../../src/utils/write-to-file')

it('should call to fs.writeFileSync', () => {
  const testFs = {
    writeFileSync: jest.fn()
  }

  const testableWriteToFile = writeToFile(testFs)
  const testPath = './any/path/foo.bar'
  const testContent = 'content'

  testableWriteToFile(testPath, testContent)

  expect(testFs.writeFileSync).toHaveBeenCalledWith(
    testPath,
    testContent,
    'utf8'
  )
})

it('should handle error when thrown', () => {
  /** TODO: Find a better way to handle errors */
  console.log = jest.fn()

  const error = new Error('file missing')

  const problematicFs = {
    writeFileSync: () => {
      throw error
    }
  }

  const testableWriteToFile = writeToFile(problematicFs)

  const testPath = './any/path/foo.bar'
  const testContent = 'content'

  testableWriteToFile(testPath, testContent)

  expect(console.log).toBeCalledWith(error)

  console.log.mockRestore()
})
