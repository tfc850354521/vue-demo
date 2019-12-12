import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/iconfont.css'
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import animated from "animate.css"
import moment from 'moment'
Vue.use(VueAwesomeSwiper)
Vue.use(animated)



Vue.filter("movieTime", function(input, formatString = "YYYY-MM-DD"){
  return moment(input*1000).format(formatString)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
