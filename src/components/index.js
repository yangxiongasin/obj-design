// ✨✨✨
import objTable from './table/index.js'
let components = {
  objTable
}

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[ key ])
  })
}

export default Object.assign(components, {install})
