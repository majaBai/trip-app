<template>
  <div class="home-catalog">
    <div class="catalog-wrapper">
      <div v-for="item in catalogList" :key="item.id" class="icon-wrapper">
        <div class="icon-img">
          <img class="img" :src="item.url" alt="" />
        </div>
        <div class="description">{{ item.desc }}</div>
      </div>
    </div>
    <div class="recommendation">
      <ul>
        <li v-for="item in recommendationList" :key="item.id">
          <img :src="item.url" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeCatalog",
  props:{
    catalogList:{
      type: Array
    },
    recommendationList:{
      type: Array
    }
  },
  data() {
    return {
    };
  },
};
</script>

<style lang='sass' scoped>
.home-catalog
    background-color: white
.catalog-wrapper
    display: flex
    justify-content: space-around
    .icon-wrapper
        // width: 25%
        // float: left
        .img
            margin: 0 auto
            display: block
            margin-top: 0.2rem
            width: 35px
            height: 35px
        .description
            text-align: center
            margin-top: 0.1rem
.recommendation
    margin-top: 0.3rem
    padding: 0px 10px
    ul
        width: 100%
        &::before
            display: table
            content: " "
            clear: both
        &::after
            display: table
            content: " "
            clear: both
        li
            width: calc(50% - 10px)
            float: left
            margin: 0px 5px
            &::after
                display: table
                content: " "
            img
                width: 100%
                border-radius: 0.1rem
</style>
