/**
 * @file 本文件为路由对象实现
 * @author Yangxiong
 */

export default [
  {
    name: 'login',
    path: '/',
    component: require('../views/index.vue'),
    children: [
      {
        name: 'flex',
        path: '/flex',
        component: require('../views/flex')
      },
      {
        name: 'display',
        path: '/display',
        component: require('../views/display')
      },
      {
        name: 'float',
        path: '/float',
        component: require('../views/float')
      },
      {
        name: 'color',
        path: '/color',
        component: require('../views/color')
      },
      {
        name: 'position',
        path: '/position',
        component: require('../views/position')
      },
      {
        name: 'sizing',
        path: '/sizing',
        component: require('../views/sizing')
      },
      {
        name: 'typography',
        path: '/typography',
        component: require('../views/typography')
      }
    ]
  },
  {
    path: '*',
    component: {
      template: '<div>not found</div>'
    }
  }
]
