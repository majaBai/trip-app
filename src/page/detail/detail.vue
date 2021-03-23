<template>
  <div class="detail">
   <detail-header></detail-header>
   <detail-swiper :detailSwiperList="detailSwiperList"></detail-swiper>
   <detail-comment :comment="comment"></detail-comment>
   <detail-map></detail-map>
   
   <!-- 路由传参，在相应的组件中用 props 接收 -->
   <!-- <router-view
   :galaryTabName="galaryTabName"
   :galaryList="galaryList"
   :addressList="addressList"
   ></router-view> -->
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
      detailSwiperList:[],
      comment:[],
      // galaryTabName:[],
      // galaryList:[],
      // addressList:[]
    }
  },
  computed:{
    
  },
  methods: {
    InitDetailPage(result){
      console.log('detail page data', result.data)
      let data = result.data
      this.detailSwiperList = data.detailSwiperList
      this.comment = data.comment
      //可以将多层传递的数据写到 store 里，也可以在路由中传递
      this.$store.state.galaryTabName = data.galaryTabName
      this.$store.state.galaryList = data.galaryList
      this.$store.state.addressList = data.addressList

    }
  },
  created() {
    this.$axios.get("/api/detail.json?id=" + this.$route.params.id).then(this.InitDetailPage);
  },
};
</script>

<style scoped>

</style>
