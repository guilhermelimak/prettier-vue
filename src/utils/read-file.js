const injectableReadFile = fs => {
  const readFile = path => {
    try {
      return fs.readFileSync(path, 'utf8')
    } catch (err) {
      console.log(err)
    }
  }

  return readFile
}

module.exports = injectableReadFile
