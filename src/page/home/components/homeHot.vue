<template>
  <div class="home-hot">
    <div class="left">
      <div class="left-title">
        <div class="limit">限时抢购</div>
        <div class="end-time">
          距结束 <span>10</span>:<span>20</span>:<span>40</span>
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
          同程推荐+韶山+含环保车+花明楼+毛泽东纪念馆1日跟团游
        </div>
      </div>
      <div class="left-footer">
        <div class="goods-count">仅限<span>100份</span></div>
        <div class="goods-prise">
          <span>￥</span>
          <span>299</span>
          <span>起</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-content">
        <div class="decs">
          快乐暑假
          <p>亲子游行记</p>
        </div>
        <div class="icon">
          <img
            src="http://pic5.40017.cn/02/001/eb/30/rBANDFleC5uAZk08AAAvlO9YkWM300.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeHot",
  data() {
    return {};
  },
};
</script>

<style lang='sass' scoped>
.home-hot
  background-color: white
  width: 100%
  display: flex
  border-top: 0.3rem solid #eee
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
    .left-content
      display: flex
      justify-content: space-between
      margin-top: 0.3rem
      margin-bottom: 0.3rem
      .left-content-img
        margin-right: 8px
        img
          width: 1rem
        .img-desc
          width: 70%
    .left-footer
      display: flex
      justify-content: space-between
  .right
    width: 47%
    padding: 0.3rem 0rem
    border-left: solid 0.04rem #eee
    .right-content
      display: flex
      justify-content: space-between
      padding-bottom: 0.3rem
      border-bottom: solid 0.04rem #eee
          // padding-left: 0.1rem
      .decs
        padding-left: 0.1rem
        font-weight: bold
        p
          margin-top: 10px
          font-weight: normal
          color: #0c0b0b87
      .icon
        img
          width: 1rem
</style>
