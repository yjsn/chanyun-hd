import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import MetaInfo from 'vue-meta-info'
Vue.use(VueAwesomeSwiper)
Vue.use(MetaInfo)
import VModal from 'vue-js-modal'
Vue.use(VModal, { dialog: true })
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

import VDistpicker from 'v-distpicker'

Vue.component('v-distpicker', VDistpicker)

// import { MessageBox, Message } from 'element-ui'
// Vue.use(MessageBox)

import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/permission' // permission control

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
