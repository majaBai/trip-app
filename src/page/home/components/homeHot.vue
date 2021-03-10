<template>
  <div class="home-hot">
    <div class="left">
      <div class="left-title">
        <div class="limit">限时抢购</div>
        <div class="end-time">
          距结束 <span class="timer-style">10</span>:<span class="timer-style"
            >20</span
          >:<span class="timer-style">40</span>
        </div>
      </div>
      <div class="left-content">
        <div class="left-content-img">
          <img
            src="http://pic4.40017.cn/shortTour/2016/05/23/11/anXByp_200x200_00.jpg"
            alt=""
          />
        </div>
        <div class="img-desc">
          同程推荐+韶山+含环保车+花明楼+毛泽东纪念馆1日跟团同程推荐+韶山+含环保车+花明楼+毛泽东纪念馆1日跟团游同程推荐+韶山+含环保车+花明楼+毛泽东纪念馆1日跟团游
        </div>
      </div>
      <div class="left-footer">
        <div class="goods-count">仅限<span>100份</span></div>
        <div class="goods-prise">
          <span class="currency-unit">￥</span>
          <span class="currency-count">299</span>
          <span class="discount-txt">起</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div
        class="right-content"
        v-for="(item, index) in rightList"
        :key="item.id"
        :class="{ 'has-border': index + 1 < rightList.length }"
      >
        <div class="decs">
          {{ item.title }}
          <p>{{ item.desc }}</p>
        </div>
        <div class="icon">
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeHot",
  data() {
    return {
      rightList: [
        {
          title: "快乐暑假",
          desc: "亲子游行记",
          img: "http://pic5.40017.cn/i/ori/X2qU1lrKc8_130x130_00.jpg",
          url: "https://m.ly.com/bustour/detail_1154238.html",
          id: "001",
        },
        {
          title: "温泉爆款",
          desc: "又到一年温泉季",
          img:
            "http://pic5.40017.cn/03/000/a0/47/rB5oQFu-xSOAREI9ABBXqJrKjDg381_130x130_00.jpg",
          id: "002",
          url: "https://m.ly.com/bustour/detail_22541.html",
        },
      ],
    };
  },
};
</script>

<style lang='sass' scoped>
.home-hot
  background-color: white
  width: 100%
  display: flex
  border-top: 0.2rem solid #eee
  border-bottom: 0.2rem solid #eee
  .left
    width: 50%
    padding: 0.3rem 0.1rem
    .left-title
      &::after
        display: block
        content: ' '
        clear: both
        height: 0
        visibility: hidden
      .limit
        color: red
        font-weight: bold
        font-size: 16px
        float: left
      .end-time
        float: right
        .timer-style
          background: black
          color: white
          border-radius: 4px
    .left-content
      display: flex
      justify-content: space-between
      margin-top: 0.3rem
      margin-bottom: 0.4rem
      .left-content-img
        margin-right: 8px
        img
          width: 1rem
      .img-desc
        width: 70%
        text-overflow: ellipsis
        overflow: hidden
        display: -webkit-box
        -webkit-line-clamp: 3
        -webkit-box-orient: vertical
        line-height: 18px
    .left-footer
      display: flex
      justify-content: space-between
      .goods-prise
        .currency-unit
          color: red
        .currency-count
          color: red
          font-size: 20px
          font-weight: bold
        .discount-txt
          color: gray
          font-size: 12px

  .right
    width: 47%
    border-left: solid 0.04rem #eee
    .has-border
      border-bottom: solid 0.04rem #eee
    .right-content
      display: flex
      justify-content: space-between
      padding-top: 0.3rem
      padding-bottom: 0.2rem
      .decs
        padding-left: 0.1rem
        font-weight: bold
        p
          margin-top: 13px
          font-weight: normal
          color: #0c0b0b87
      .icon
        margin-right: 0.1rem
        img
          width: 1rem
          border-radius: 50%
</style>
