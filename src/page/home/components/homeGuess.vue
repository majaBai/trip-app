<template>
  <div class="home-guess">
    <div class="title" :class="{ fixedDuringScroll: fixedDuringScroll }">
      <div class="name">猜你喜欢</div>
    </div>
    <div v-for="item in guessList" :key="item.id" class="projects-list">
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
  props:{
    guessList:{
      type: Array
    }
  },
  data() {
    return {
      // 滚动时让title固定悬浮在屏幕顶部
      fixedDuringScroll: false,
    };
  },
  methods: {
    watchScroll() {
      let topHeight = document.documentElement.scrollTop;
      if (topHeight > 600) {
        this.fixedDuringScroll = true;
      } else {
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
    padding-bottom: 0.4rem
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
