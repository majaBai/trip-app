import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import "@/assets/style/border.css"
import "@/assets/style/reset.css"
import FastClick from 'fastclick'

FastClick.attach(document.body);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
