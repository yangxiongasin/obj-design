/**
 * @file 本文件为路由对象实现
 * @author Yangxiong
 */

export default [
  {
    path: '/',
    component: require('../views/index.vue'),
    children: [
      {
        name: 'border',
        path: '/border',
        component: require('../views/border')
      },
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
        name: 'cursor',
        path: '/cursor',
        component: require('../views/cursor')
      },
      {
        name: 'position',
        path: '/position',
        component: require('../views/position')
      },
      {
        name: 'space',
        path: '/space',
        component: require('../views/space')
      },
      {
        name: 'table',
        path: '/table',
        component: require('../views/table')
      },
      {
        name: 'typography',
        path: '/typography',
        component: require('../views/typography')
      },
      {
        name: 'tree',
        path: '/tree',
        component: require('../views/tree')
      },
      {
        name: 'popover',
        path: '/popover',
        component: require('../views/popover')
      },
      {
        name: 'selectTrans',
        path: '/selectTrans',
        component: require('../views/selectTrans')
      },
      {
        name: 'upload',
        path: '/upload',
        component: require('../views/upload')
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
