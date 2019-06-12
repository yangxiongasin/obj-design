/**
 * @file 本文件为路由对象实现
 * @author Yangxiong
 */

export default [{
  name: 'login',
  path: '/',
  component: require('../views/index.vue'),
  children: [{
    name: 'flex',
    path: '/flex',
    component: require('../views/flex')
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
