<template>
  <div class="home">
    <!-- <div>Home page</div> -->
    <home-header class="home-header"></home-header>
    <home-swiper></home-swiper>
    <home-catalog class="home-catalog"></home-catalog>
    <home-hot class="home-hot"></home-hot>
    <home-weekend class="home-weekend"></home-weekend>
  </div>
</template>

<script>
import homeHeader from "./components/homeHeader.vue";
import homeSwiper from "./components/homeSwiper.vue";
import homeCatalog from "./components/homeCatalog.vue";
import homeHot from "./components/homeHot.vue";
import homeWeekend from "./components/homeWeekend.vue";
export default {
  name: "Home",
  components: {
    homeHeader,
    homeSwiper,
    homeCatalog,
    homeHot,
    homeWeekend,
  },
};
</script>

<style lang='sass' scoped>
.home
  position: relative
  .home-header
    position: absolute
    z-index: 100
    width: 100%
  .home-catalog
    padding-bottom: 10px
</style>
