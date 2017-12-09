const fs = require('fs')
const findit = require('findit')
const prettier = require('prettier')

const pureUtils = require('./utils')

const { isVueSFC, writeToFile, splitChunks, isChanged } = pureUtils(fs)
const { STYLE_START, STYLE_END, SCRIPT_START, SCRIPT_END } = pureUtils.constants

class PrettierVue {
  constructor(opts) {
    this.noisy = opts.noisy || false
    this.baseDir = opts.baseDir || process.cwd()
    this.configPath = opts.configPath || `${this.baseDir}/.pretierrc`
    this.rootDir = opts.rootDir || `${this.baseDir}/src`
    this.modified = {}
    this.prettierOpts = {}

    prettier.resolveConfig(this.configPath).then(options => {
      this.prettierOpts = options
      this.searchFiles()
    })
  }

  formatChunk(data, type) {
    const opt = { ...this.prettierOpts }

    if (type) {
      opt.parser = type
    }

    return prettier.format(data, opt).trim()
  }

  writeModified() {
    const paths = Object.keys(this.modified)

    paths.forEach(path => {
      const m = this.modified[path]

      if (!m) return

      if (this.noisy) {
        console.log('Fixing: ', path)
      }

      let result = m.strFile

      if (m.js && m.js.formatted && isChanged(m.js)) {
        result = result.replace(m.js.content, m.js.formatted)
      }

      if (m.scss && m.scss.formatted && isChanged(m.scss)) {
        result = result.replace(m.scss.content, m.scss.formatted)
      }

      writeToFile(m.path, result)
    })
  }

  searchFiles() {
    const finder = findit(this.rootDir)

    finder.on('file', filePath => {
      if (!isVueSFC(filePath)) {
        return
      }

      this.format(filePath)
    })

    finder.on('end', () => {
      this.writeModified(this.modified)
    })
  }

  format(path) {
    try {
      const strFile = fs.readFileSync(path, 'utf8')
      const { scss, js } = splitChunks(strFile)

      this.modified[path] = { js, scss, path, strFile }

      if (js && js.content) {
        this.modified[path].js.formatted = this.formatChunk(js.content)
      }

      if (scss && scss.content) {
        this.modified[path].scss.formatted = this.formatChunk(
          scss.content,
          'scss'
        )
      }
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = PrettierVue
