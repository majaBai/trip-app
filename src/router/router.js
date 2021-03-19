import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/page/home/Home.vue'
import Location from '@/page/location/Location.vue'
import Detail from '@/page/detail/detail.vue'
import Galary from '@/page/detail/components/galary.vue'

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
        {
            path: '/detail/:id',
            component: Detail,
            name: 'detail',
            children:[
                {
                path:'galary',
                component: Galary

                }
            ]
        },
    ]
})