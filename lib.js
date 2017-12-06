const regexIndexOf = require('./util').regexIndexOf
const writeToFile = require('./util').writeToFile
const findit = require('findit')
const fs = require('fs')
const prettier = require('prettier')

const prettierOptions = {
  semi: true,
  singleQuote: true,
  trailingComma: 'never'
}

const separateTags = substring => {
  const splitted = substring.trim().split('\n')

  if (!splitted.length || !splitted[0]) return

  return splitted.slice(1, splitted.length - 1).join('\n')
}

const split = (str, startTag, endTag) => {
  const sub = str.substring(
    regexIndexOf(str, startTag),
    regexIndexOf(str, endTag, true)
  )

  return { content: separateTags(sub) }
}

const splitChunks = str => {
  const scss = split(str, STYLE_START, STYLE_END)
  const js = split(str, SCRIPT_START, SCRIPT_END)

  return { scss, js }
}

const isChanged = lang => lang.content !== lang.formatted

const VUE_EXT = '.vue'

const STYLE_START = /<style(\sscoped)?(\slang="scss")?(\sscoped)?>/gi
const STYLE_END = /<\/style>/gi

const SCRIPT_START = /<script>/gi
const SCRIPT_END = /<\/script>/gi

const isVueSFC = filePath => filePath.indexOf(VUE_EXT) > -1

class PrettierVue {
  constructor(opts) {
    this.noisy = opts.noisy || false
    this.basePath = opts.basePath || process.cwd()
    this.configPath = opts.configPath || `${this.basePath}/.pretierrc`
    this.rootDir = opts.rootDir || `${this.basePath}/src`
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
