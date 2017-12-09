const split = require('../split')

const {
  STYLE_START,
  STYLE_END,
  SCRIPT_START,
  SCRIPT_END
} = require('../constants')

module.exports = str => {
  const scss = split(str, STYLE_START, STYLE_END)
  const js = split(str, SCRIPT_START, SCRIPT_END)

  return { scss, js }
}
