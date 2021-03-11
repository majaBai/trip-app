<template>
  <div class="home-guess">
    <div class="title" :class="{ fixedDuringScroll: fixedDuringScroll }">
      <div class="name">猜你喜欢</div>
    </div>
    <div v-for="item in projectList" :key="item.id" class="projects-list">
      <div class="projects-list-content">
        <img :src="item.img" alt="" />
        <div class="comment">{{ item.comment }}</div>
      </div>
      <div class="projects-list-desc">
        {{ item.desc }}
      </div>
      <div class="projects-list-details">
        <div class="distance">{{ item.distance }}</div>
        <div class="prise">
          <span class="currency-unit">￥</span>
          <span class="currency-count">{{ item.prise }}</span>
          <span class="discount-txt">起</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeGuess",
  data() {
    return {
      projectList: [
        {
          img:
            "https://dimg01.c-ctrip.com/images/fd/tg/g3/M01/06/7D/CggYG1aONeKAPC1IAB6njDjLgiA931_C_750_375.jpg",
          comment: "1175点评 98%满意度",
          desc: "6日游超人气产品！网红酒店强烈建议早订！",
          distance: "酒店距离景点1.79km",
          prise: "299",
          id: "001",
        },
        {
          img:
            "https://dimg05.c-ctrip.com/images/100f180000013p2c086E4_C_750_375.jpg",
          comment: "975点评 97%满意度",
          desc: "星级酒店随心住！下单立减300+迎春礼物！",
          distance: "酒店距离景点2.79km",
          prise: "499",
          id: "002",
        },
        {
          img:
            "https://dimg07.c-ctrip.com/images/100e0h0000008rp39A12F_C_750_375.jpg",
          comment: "970点评 97%满意度",
          desc: "星级酒店随心住！下单立减300+迎春礼物！",
          distance: "酒店距离景点2.00km",
          prise: "399",
          id: "003",
        },
      ],
      // 滚动时让title固定悬浮在屏幕顶部
      fixedDuringScroll: false,
    };
  },
  methods: {
    watchScroll() {
      let topHeight = document.documentElement.scrollTop;
      console.log(topHeight);
      if (topHeight > 600) {
        this.fixedDuringScroll = true;
      } else {
        console.log("清空");
        this.fixedDuringScroll = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.watchScroll);
  },
};
</script>

<style lang='sass' scoped>
.home-guess
    background: white
    .fixedDuringScroll
        background-color: white
        z-index: 200
        position: fixed
        top: 44px
        border-top: 0.06rem solid #eee
    .title
        text-align: center
        // position: relative
        border-bottom: 0.06rem solid #eee
        height: 0.8rem
        width: 100%
        .name
            color: #23beae
            padding-bottom: 0.2rem
            padding-top: 0.3rem
            font-weight: bold
            width: 18%
            border-bottom: 0.06rem solid #23beae
            margin: 0 auto
            // position: absolute
            // top: 50%
            // left: 50%
            // transform: translate(-50%, -50%)
    .projects-list
        padding: 0.4rem 0.1rem
        padding-bottom: 0rem
        .projects-list-content
            position: relative
            img
                width: 100%
            .comment
                background-color: rgba(0, 0, 0, 0.5)
                color: white
                position: absolute
                bottom: 0.02rem
                width: 100%
                padding: 0.1rem 0.01rem
        .projects-list-desc
            font-size: 14px
            font-weight: bold
            padding: 0.2rem 0
        .projects-list-details
            display: flex
            justify-content: space-between
            margin-top: 0.1rem
            .distance
                color: gray
                font-size: 12px
            .prise
                color: gray
                .currency-unit
                    color: red
                .currency-count
                    color: red
                    font-size: 20px
                    font-weight: bold
                .discount-txt
                    font-size: 12px
</style>
