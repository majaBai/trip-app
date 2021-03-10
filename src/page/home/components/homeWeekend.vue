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
        v-for="item in swiperItems"
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
  data() {
    return {
      swiperOptions: {
        // loop: true,
        slidesPerView: 3,
      },
      swiperItems: [
        {
          id: "001",
          img:
            "http://pic5.40017.cn/02/000/59/74/rBLkCVkyrKOAW_9gAAEAAPEX4T8922_450x250_00.jpg.webp",
          title: "桂林",
          desc: "桂林山水甲天下",
        },

        {
          id: "002",
          img: "http://pic5.40017.cn/i/ori/SF1daBTsuQ_450x250_00.jpg.webp",
          title: "深圳西冲",
          desc: "游艇冲浪 徒步沙滩",
        },
        {
          id: "003",
          img:
            "http://pic5.40017.cn/01/000/ad/d4/rBANC1pq0AeADTUjAANpe2OjYaY502_450x250_00.jpg.webp",
          title: "韶关丹霞山",
          desc: "世界自然遗产",
        },
        {
          id: "004",
          img: "http://pic5.40017.cn/i/ori/RZmcp8c5kk_450x250_00.jpg.webp",
          title: "连山梯田",
          desc: "中国十大梯田之一",
        },
      ],
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
        swiper-slide
        .slide-box
            border: 1px solid #8080803b
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
