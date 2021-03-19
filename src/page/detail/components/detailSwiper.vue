<template>
  <div class="detail-swiper">
    <router-link
    to="galary" append>
      <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide 
      v-for="item in swiperList" 
      :key="item.id"
      >
        <div class='img-wrapper'>
          <img class="swiper-img" alt="" :src="item.url" />
        </div>
        <div class='desc-wrapper'>
          <span class='desc-right'>{{item.date}}</span>
          <span class='desc-middle'>{{item.number}}</span>
          <span class='desc-left'>{{item.page}}</span>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination pagination-color" slot="pagination"></div> -->
    </swiper>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "detailSwiper",
  components: {
  },
  data(){
    return{
      swiperOptions: {
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        // direction: "vertical",
        loop: true,
      },
    swiperList:[
      {
        id:'00001',
        url:'https://pic5.40017.cn/02/000/02/22/rBLkCVlkdDqAP4NzAAMCZSYX5mY633_420x228_00.jpg',
        date:'2天一晚',
        number:'编号：101453',
        page:'150张'

      },
      {
        id:'00002',
        url:'https://pic3.40017.cn/zzy/rimage/2015/03/17/11/506Nl6_420x228_00.jpg',
        date:'2天一晚',
        number:'编号：101453',
        page:'150张'

      },
    ]
    }
  },
  computed:{
    
  },
  methods: {
    
  },
  created() {
  },
};
</script>

<style scoped>
.detail-swipper{
  background-color: white;
}
.desc-wrapper{
    position: absolute;
    bottom: 0rem;
    background: #19181878;
    width: 100%;
    color: white;
    display: flex;
    padding: 0.08rem 0.1rem;
    box-sizing: border-box;
}
.desc-right{
  float: right;
}
.desc-middle{
  text-align: right;
  flex:1;
}
.desc-left{
  float: left;
  margin-left: 0.5rem
}

</style>
