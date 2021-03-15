import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/page/home/Home.vue'
import Location from '@/page/location/Location.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/location',
            component: Location,
            name: 'location'
        },
    ]
})