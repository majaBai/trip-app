<template>
  <div class="home">
    <!-- <div>Home page</div> -->
    <home-header class="home-header"></home-header>
    <home-swiper></home-swiper>
    <home-catalog class="home-catalog"></home-catalog>
  </div>
</template>

<script>
import homeHeader from "./components/homeHeader.vue";
import homeSwiper from "./components/homeSwiper.vue";
import homeCatalog from "./components/homeCatalog.vue";
export default {
  name: "Home",
  components: {
    homeHeader,
    homeSwiper,
    homeCatalog,
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
</style>
