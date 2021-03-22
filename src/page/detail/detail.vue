<template>
  <div class="detail">
   <detail-header></detail-header>
   <detail-swiper></detail-swiper>
   <detail-comment></detail-comment>
   <detail-map></detail-map>
   
   <router-view></router-view>
  </div>
</template>

<script>
import detailHeader from './components/detailHeader.vue'
import detailSwiper from './components/detailSwiper.vue'
import detailMap from './components/detailMap.vue'
import detailComment from './components/detailComment.vue'
export default {
  name: "Detail",
  components: {
   detailHeader,
   detailSwiper,
   detailMap,
   detailComment
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
