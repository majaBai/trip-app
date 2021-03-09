<template>
  <div class="header">
    <div class="header-back">
      <van-icon name="arrow-left" />
    </div>
    <div class="header-search">
      <span class="horizontal-align">
        <van-icon name="search" />
        上海海洋公园
      </span>
    </div>
    <div class="header-city">
      <span class="horizontal-align">
        上海
        <van-icon name="arrow-down" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeHeader",
};
</script>

<style lang='sass' scoped>
.header
  line-height: 0.88rem
  text-align: center
  display: flex
  .header-back
    // background-color: red
    float: left
    width: 0.8rem
  .header-search
    flex: 1
    // background-color: green
    border-radius: 1rem
    margin-left: 0.1rem
    margin-right: 0.1rem
    margin-top: 0.13rem
    // border: solid 0.01rem gray
    box-shadow: 0 0 0.01rem 0.02rem #005
    height: 0.6rem
    line-height: 0.6rem
  .header-city
    // background-color: red
    float: right
    width: 1.4rem

.horizontal-align
  display: inline-flex
  align-items: center

.van-icon.van-icon-arrow-left
  font-size: 17px
  top: 0.08rem
  margin-right: 2px

.van-icon.van-icon-arrow-down
  margin-left: 2px
</style>
