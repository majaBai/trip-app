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
import axios from 'axios'
import store from './store/store'
import LyTab from 'ly-tab'
// import loadBMap from './loadBMap/loadBMap'
// import BaiduMap from 'vue-baidu-map'

Vue.use(LyTab)
Vue.use(Vant);
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios
// 引入百度地图需要的 AK
// Vue.prototype.$AK = 'mq0sQRMYdOXsTbGeSAs2he5ATY0hd0Et'
// Vue.use(BaiduMap, {
//   ak: 'mq0sQRMYdOXsTbGeSAs2he5ATY0hd0Et'    //这个地方是官方提供的ak密钥
// })
FastClick.attach(document.body);

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
//   router,
//   store
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted(){
    console.log('main.js', BMapGL)
    // let map = new BMapGL.Map()
    let myCity = new BMapGL.LocalCity()
    myCity.get((result)=>{
      if(result){
        this.$store.state.currentCity = result.name
      }else{
        this.$store.state.currentCity='北京'
      }
    })
  }
})