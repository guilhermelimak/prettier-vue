module.exports = {
  help: `
    Usage:
        You can run it without args and it will use the current
        directory as base and look for a .prettierrc file to use
        as prettier config and .vue files inside a ./src folder.

        You can change this behavior with the following options:

        --baseDir  'process.cwd()'
        Change path used as base for config and root paths.

        --rootDir   './src'
        Change dir where .vue files will be searched.

        --noisy     false
        Wether to print the path of files being formatted.

        --help | -h
        Show this help.
    `
}
