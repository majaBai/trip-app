<template>
  <div class="home">
    <!-- <div>Home page</div> -->
    <home-header class="home-header"></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import homeHeader from "./components/homeHeader.vue";
import homeSwiper from "./components/homeSwiper.vue";
export default {
  name: "Home",
  components: {
    homeHeader,
    homeSwiper,
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
</style>
