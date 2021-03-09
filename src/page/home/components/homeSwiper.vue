<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in headerImg" :key="item.id">
        <img class="swiper-img" alt="" :src="item.url" />
      </swiper-slide>
      <div class="swiper-pagination pagination-color" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "homeSwiper",
  data() {
    return {
      headerImg: [
        {
          id: "001",
          url:
            "https://pic5.40017.cn/02/000/ab/5c/rBLkCFrYQiGAVGX8AAMK2OFqY_8075_420x145_00.jpg",
        },
        {
          id: "002",
          url:
            "https://pic5.40017.cn/02/000/6e/62/rBLkCVqwih-AWtVsAAEDYNuPT8s074_420x145_00.jpg",
        },
      ],
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
</style>

