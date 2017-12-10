const injectableWriteToFile = fs => {
  const writeToFile = (path, content) => {
    try {
      fs.writeFileSync(path, content, 'utf8')
    } catch (err) {
      console.log(err)
    }
  }

  return writeToFile
}

module.exports = injectableWriteToFile
