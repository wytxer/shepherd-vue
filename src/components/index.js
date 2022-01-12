import Shepherd from 'shepherd.js'
import defaultConfig from './default-config'

import './driver.less'

const install = (Vue) => {
  if (install.installed) return
  install.installed = true
  Vue.prototype.$shepherd = (props = {}) => {
    // 设置初始化参数
    const newProps = {
      ...defaultConfig,
      ...props
    }
    return new Shepherd.Tour(newProps)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 通过函数的形式使用
const shepherd = (props = {}) => {
  const newProps = {
    ...defaultConfig,
    ...props
  }
  return new Shepherd.Tour(newProps)
}

export {
  shepherd
}
export default {
  install,
  version: '1.0.0'
}
