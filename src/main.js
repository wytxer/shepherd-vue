import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from '@/app.vue'
import router from '@/router'
import ShepherdVue from '@/components'
import LayoutBox from '@/components/layout-box'

import '@wytxer/style-utils/lib/common.less'
import 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(ShepherdVue)
Vue.use(LayoutBox)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
