<template>
  <div class="home-hot">
    <div class="left">
      <div v-for="item in flashSaleList" :key='item.id'>
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
            :src="item.img"
            alt=""
          />
        </div>
        <div class="img-desc">
        {{item.desc}}
        </div>
      </div>
      <div class="left-footer">
        <div class="goods-count">仅限<span>{{item.num}}份</span></div>
        <div class="goods-prise">
          <span class="currency-unit">￥</span>
          <span class="currency-count">{{item.prise}}</span>
          <span class="discount-txt">起</span>
        </div>
      </div>
      </div>
    </div>
    <div class="right">
      <div
        class="right-content"
        v-for="(item, index) in hotList"
        :key="item.id"
        :class="{ 'has-border': index + 1 < flashSaleList.length }"
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
  props:{
    flashSaleList:{
      type:Array
    },
    hotList:{
      type:Array
    },
  },
  data() {
    return {
      
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
