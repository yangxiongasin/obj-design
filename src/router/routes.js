/**
 * @file 本文件为路由对象实现
 * @author Yangxiong
 */

export default [
  {
    name: 'login',
    path: '/',
    component: require('../views/index.vue')
  },
  {
    path: '*',
    component: {
      template: '<div>not found</div>'
    }
  }
]
