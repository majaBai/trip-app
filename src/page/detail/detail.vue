<template>
  <div class="detail">
   <detail-header></detail-header>
   <detail-swiper></detail-swiper>
   <router-view></router-view>
  </div>
</template>

<script>
import detailHeader from './components/detailHeader.vue'
import detailSwiper from './components/detailSwiper.vue'
export default {
  name: "Detail",
  components: {
   detailHeader,
   detailSwiper
  },
  data(){
    return{
      
    }
  },
  computed:{
    
  },
  methods: {
    
  },
  created() {
  },
};
</script>

<style scoped>

</style>
