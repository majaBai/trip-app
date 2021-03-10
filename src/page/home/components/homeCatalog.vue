<template>
  <div class="home-catalog">
    <div class="catalog-wrapper">
      <div v-for="item in iconList" :key="item.id" class="icon-wrapper">
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
  data() {
    return {
      iconList: [
        {
          url:
            "https://pic5.40017.cn/03/000/f7/f7/rBANB1ykgrGAHeQqAAAK6S6Ptyc182.png",
          desc: "海滨岛屿",
          id: "001",
        },
        {
          url:
            "https://pic5.40017.cn/03/000/6b/b5/rB5oQFykgnaAX8MYAAALPO5ToOE755.png",
          desc: "城市观光",
          id: "002",
        },
        {
          url:
            "https://pic5.40017.cn/03/000/f8/01/rBANB1ykguWAIMiGAAAMLCV__p4275.png",
          desc: "亲子游",
          id: "003",
        },
        {
          url:
            "https://pic5.40017.cn/03/000/6b/ec/rB5oQFykg5SAFttgAAAMmtJBy1o096.png",
          desc: "温泉养生",
          id: "004",
        },
      ],
      recommendationList: [
        {
          url: "https://pic5.40017.cn/i/ori/NnlrqWinvi.jpg",
          id: "r-001",
        },
        {
          url: "https://pic5.40017.cn/i/ori/Oda2C2cnK0.jpg",
          id: "r-002",
        },
      ],
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
