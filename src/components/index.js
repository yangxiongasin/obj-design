// ✨✨✨
import objTable from './table/index.js'
import objPopover from './popover/index.js'
import objTree from './ocj-tree/index.js'
import selectTrans from './selectTrans/index.js'
import objUpload from './upload/index.js'
let components = {
  objTable,
  objPopover,
  objTree,
  selectTrans,
  objUpload
}

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  })
}

export default Object.assign(components, {
  install
})
