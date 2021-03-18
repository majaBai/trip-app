<template>
  <div class="home">
    <!-- <div>Home page</div> -->
    <home-header :city="currentCity" class="home-header"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-catalog class="home-catalog" :catalogList="catalogList" :recommendationList="recommendationList"></home-catalog>
    <home-hot class="home-hot" :flashSaleList="flashSaleList" :hotList="hotList"></home-hot>
    <home-weekend class="home-weekend" :weekendList="weekendList"></home-weekend>
    <home-guess :guessList="guessList"></home-guess>
  </div>
</template>

<script>
import homeHeader from "./components/homeHeader.vue";
import homeSwiper from "./components/homeSwiper.vue";
import homeCatalog from "./components/homeCatalog.vue";
import homeHot from "./components/homeHot.vue";
import homeWeekend from "./components/homeWeekend.vue";
import homeGuess from "./components/homeGuess.vue";
import { mapState } from 'vuex'
export default {
  name: "Home",
  components: {
    homeHeader,
    homeSwiper,
    homeCatalog,
    homeHot,
    homeWeekend,
    homeGuess,
  },
  data(){
    return{
      city:'',
      swiperList:[],
      catalogList:[],
      recommendationList:[],
      flashSaleList:[],
      hotList:[],
      weekendList:[],
      guessList:[],
    }
  },
  computed:{
    ...mapState({
      currentCity: state => state.currentCity
    })
  },
  methods: {
    getInitData(res) {
      console.log("res", res.data.data);
      let data = res.data.data
      this.city = data.city
      this.swiperList = data.swiperList
      this.catalogList = data.catalogList
      this.recommendationList = data.recommendationList
      this.flashSaleList = data.flashSaleList
      this.hotList = data.hotList
      this.weekendList = data.weekendList
      this.guessList = data.guessList
    },
  },
  created() {
    this.$axios.get("/api/index.json").then(this.getInitData);
  },
};
</script>

<style lang='sass' scoped>
.home
  position: relative
  .home-catalog
    padding-bottom: 10px
</style>
