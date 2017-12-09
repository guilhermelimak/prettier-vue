const { help: helpMessage } = require('./messages')

module.exports = (opts, runnable) => {
  if (opts.help || opts.h) {
    return helpMessage
  }

  runnable(opts)
}
