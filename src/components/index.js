// ✨✨✨
import objTable from './table/index.js'
import objPopover from './popover/index.js'
import objLeftTree from './objLeftTree/index.js'
import selectTrans from './selectTrans/index.js'
let components = {
  objTable,
  objPopover,
  objLeftTree,
  selectTrans
}

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[ key ])
  })
}

export default Object.assign(components, {install})
