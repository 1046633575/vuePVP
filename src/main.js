import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import './assets/iconFont/iconfont.css'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' 
import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.component('m-card', Card)
Vue.component('m-list-card', ListCard)
Vue.use(VueAwesomeSwiper),
Vue.config.productionTip = false,
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
