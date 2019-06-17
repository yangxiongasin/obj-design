
// 静态配置对象，此对象在 /static/conf/app-conf.js 内配置
const appConf = 'http://10.221.56.94/mock/49/'

/**
 * 服务调用对象配置
 * @type {Object}
 */
const conf = {
  commonConfig: {
    baseURL: appConf,
  },
  root: {}
}

// 将优先的静态配置覆盖本配置
function overrideConf() {
  let urls = (appConf || appConf.baseURL)
  let root = conf.root
  if (urls) {
    for (let key in urls) {
      if (key in root) {
        root[key].baseURL = urls[key]
      }
    }
  }
}

// 调整配置优先级
overrideConf()

export default conf
