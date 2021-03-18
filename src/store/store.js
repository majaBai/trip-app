import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        currentCity: '北京',
    },
    getters:{
       

    },
    mutations:{
        changeCurrentCity(state, newval){
            state.currentCity = newval
        }

    },
    actions:{
        getNewCurrentCity({commit}, newval){
            commit('changeCurrentCity', newval)
        }
    }

})
