<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import loadBMap from './loadBMap/loadBMap'

export default {
  name: "App",
  components: {},
  methods:{
    getCurrentCity(result){
        if(result && result.name){
            let currentCity = result.name
            // console.log(result, "当前定位城市:"+ this.currentCity);
            this.$store.dispatch('getNewCurrentCity', currentCity)
        } else {
            console.log('定位当前城市出错')
        }
    }
  },
  async mounted(){
    let that = this
    let Bmap = await loadBMap(that.$AK)
    // console.log('Bmap', Bmap)
    let myCity = new Bmap.LocalCity();
    myCity.get(that.getCurrentCity);
  }
};
</script>

<style lang='sass' scoped>
</style>
