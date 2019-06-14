// ✨✨✨
import objTable from './table/index.js'
import objPopover from './popover/index.js'
let components = {
  objTable,
  objPopover
}

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[ key ])
  })
}

export default Object.assign(components, {install})
