<template>
  <div class="home-weekend">
    <div class="weekend-title">
      ////// <span class="title">周末出游</span> //////
      <p class="slogan">致力推荐超完美套餐</p>
    </div>
    <!-- <div class="weekend-item"> -->
    <swiper class="weekend-item" ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        class="weekend-slide"
        v-for="item in weekendList"
        :key="item.id"
      >
        <div class="slide-box">
          <div>
            <img class="swiper-img" :src="item.img" alt="" />
          </div>
          <div class="swiper-desc">
            <p class="swiper-desc-title">{{ item.title }}</p>
            <p class="swiper-desc-txt">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "homeWeekend",
   props:{
    weekendList:{
      type: Array
    }
  },
  data() {
    return {
      swiperOptions: {
        // loop: true,
        slidesPerView: 3,
      },
      
    };
  },
};
</script>

<style lang='sass' scoped>
.home-weekend
  background-color: white
  width: 100%
  padding-bottom: 0.2rem
  border-bottom: 0.2rem solid #eee
  .weekend-title
    text-align: center
    padding: 0.2rem 0.1rem
    color: gray
    .title
      font-weight: bold
      color: black
      .slogan
        font-size: 14px
        margin-top: 5px
  .weekend-item
    .slide-box
      border: 1px solid rgba(128 128 128 / 20%)
      padding-bottom: 0.05rem
      .swiper-img
        max-width: 100%
      .swiper-desc
        text-align: center
        .swiper-desc-title
          margin-top: 0.3rem
          margin-bottom: 0.2rem
          font-weight: bold
          .swiper-desc-txt
            font-size: 12px
            margin-bottom: 0.2rem
            color: gray
</style>

<style>
.weekend-slide {
  width: 30% !important;
  margin: 0 0.12rem !important;
}
</style>
