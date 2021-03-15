<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" alt="" :src="item.url" />
      </swiper-slide>
      <div class="swiper-pagination pagination-color" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "homeSwiper",
  props:{
    swiperList:{
      type: Array
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // direction: "vertical",
        loop: true,
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style lang='sass' scoped>
.wrapper
  --swiper-theme-color: #fff
.swiper-img
  width: 100%
  height: 125px
</style>

