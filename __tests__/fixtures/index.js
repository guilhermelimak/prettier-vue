/** TODO: REMOVE THIS HORRIBLE HACK and ignore this file properly in jest config. */
it('exposes fixtures', () => {})

exports.removeStyleTagsParam = `
<style lang="scss" scoped>
.321312 {

}
</style>`

exports.removeStyleTagsExpectedResult = `.321312 {\n\n}`

exports.removeScriptTagsParam = `
<script>
import NavMenu from './NavMenu'

export default {
    name: 'app',

    components: {
    NavMenu
    }
}
</script>
`

exports.removeScriptTagsExpectedResult = `import NavMenu from './NavMenu'

export default {
    name: 'app',

    components: {
    NavMenu
    }
}`

exports.entireVueFile = `
<template>
<div></div>
</template>

<script>
import NavMenu from './NavMenu'

export default {
  name: 'app',

  components: {
    NavMenu
  }
}
</script>

<style lang="scss" scoped>
.class {
  border-style: dashed !important;
}
</style>
`
