import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import "@/assets/style/border.css"
import "@/assets/style/reset.css"
import FastClick from 'fastclick'
import 'vant/lib/index.css';
import Vant from 'vant';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// import 'swiper/dist/css/swiper.css'

Vue.use(Vant);
Vue.use(VueAwesomeSwiper)

FastClick.attach(document.body);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
