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
            "https://pic3.40017.cn/zzy/rimage/2015/04/18/17/hETxTo_420x228_00.jpg",
          comment: "1175点评 98%满意度",
          desc: "上海崇明东平国家森林公园房车1晚+森林公园门票2张+双人早餐",
          distance: "酒店距离景点1.79km",
          prise: "299",
          id: "001",
        },
        {
          img:
            "https://pic5.40017.cn/02/000/02/22/rBLkCVlkdDqAP4NzAAMCZSYX5mY633_420x228_00.jpg",
          comment: "975点评 97%满意度",
          desc:
            "无锡拈花客栈1晚，游拈花湾，自选酒店自助晚餐/禅食餐【灵山胜境】【亲子精选】",
          distance: "酒店距离景点2.79km",
          prise: "499",
          id: "002",
        },
        {
          img:
            "https://pic3.40017.cn/zzy/rimage/2015/03/17/11/506Nl6_420x228_00.jpg",
          comment: "18点评  100%满意度",
          desc:
            "【引爆双早双晚399】扬州中集格兰云天大酒店+自选瘦西湖/个园/瘦西湖温泉+双人早餐",
          distance: "酒店距离景点2.00km",
          prise: "269",
          id: "003",
        },
        {
          img:
            "https://pic3.40017.cn/zzy/rimage/2015/03/26/20/qLpvQc_420x228_00.jpg",
          comment: "975点评 97%满意度",
          desc:
            "住宋城千古情主题酒店（杭州西湖店），自选杭州宋城千古情景区，预订套餐包含贵宾席演出票！",
          distance: "酒店距离景点2.79km",
          prise: "399",
          id: "004",
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
