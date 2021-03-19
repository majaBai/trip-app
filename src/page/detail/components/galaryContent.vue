<template>
  <div class="galaryContent">
      <div class='content-wrapper'>
        <div class='content-img-wrapper' 
        v-for="item in galaryList[currentTabIndex]" 
        :key="item.id"
        @click="handleImgClick(item.id)" 
        >
            <img class='content-image' :src="item.url" >
        </div>
    </div>
    <!-- 下面也应该拆分成一个组件 -->
  <div class='swiper-galary' v-show='showSwiper'>
      <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
      v-for="item in galaryList[currentTabIndex]" :key="item.id"
      >
      <div class='swiper-page'>{{item.id + 1}}/{{swiperTotalPage}}</div>
        <div class='swiper-img-box'>
          <img class="swiper-img"  :src="item.url" />
        </div>
        <div class="swiper-closeBtn" @click="closeImgSwiper">X</div>
      </swiper-slide>
    </swiper>
     
  </div>
  </div>
</template>

<script>

export default {
  name: "galaryContent",
  props:{
      currentTabIndex:{
          type: Number,
          default:0
      }
  },
  components: {
   
  },
  data(){
    return{
    showSwiper: false,
    swiperTotalPage: 0,
    currentPage:0,
    swiperOptions:{
        loop: false,
        // direction: "horizontal",
        initialSlide: 2,
    },
     galaryList:[
         [
             {
             id:0,
             url:'https://dimg06.c-ctrip.com/images/fd/tg/g4/M01/4A/BF/CggYHVXjzyeAOeymABuBTaHIgFc792_C_1000_560_Q80.jpg'
            },
            
            {
             id:1,
             url:'https://dimg07.c-ctrip.com/images/fd/tg/g2/M09/8E/2A/Cghzf1WxCriAW4dXABSVU-vqayI115_C_1000_560_Q80.jpg'
            },
            
            {
             id:2,
             url:'https://dimg04.c-ctrip.com/images/100o1f000001gp41vC05F_C_1000_560_Q80.jpg'
            },
            {
             id:3,
             url:'https://dimg02.c-ctrip.com/images/100v0u000000jeoiuAC5F_C_1000_560_Q80.jpg'
            }
            
         ],
         [
             {
             id:0,
             url:'https://dimg06.c-ctrip.com/images/10030z000000mizq0E4B1_C_1000_560_Q80.jpg'
            },
            {
             id:1,
             url:'https://dimg07.c-ctrip.com/images/100d0h0000008s394800B_C_1000_560_Q80.jpg'
            },
            {
             id:2,
             url:'https://dimg07.c-ctrip.com/images/fd/tg/g2/M09/8E/2A/Cghzf1WxCriAW4dXABSVU-vqayI115_C_1000_560_Q80.jpg'
            },
         ],
         [
             {
             id:0,
             url:'https://dimg06.c-ctrip.com/images/10030z000000mizq0E4B1_C_1000_560_Q80.jpg'
            },
            {
             id:1,
             url:'https://dimg06.c-ctrip.com/images/10030z000000mizq0E4B1_C_1000_560_Q80.jpg'
            }
         ],
         [
             {
             id:0,
             url:'https://dimg04.c-ctrip.com/images/100o1f000001gp41vC05F_C_1000_560_Q80.jpg'
            },
            {
             id:1,
             url:'https://dimg04.c-ctrip.com/images/100o1f000001gp41vC05F_C_1000_560_Q80.jpg'
            }
         ],
         [
             {
             id:0,
             url:'https://dimg02.c-ctrip.com/images/100v0u000000jeoiuAC5F_C_1000_560_Q80.jpg'
            },
            {
             id:1,
             url:'https://dimg02.c-ctrip.com/images/100v0u000000jeoiuAC5F_C_1000_560_Q80.jpg'
            }
         ],
        [
             {
             id:0,
             url:'https://dimg06.c-ctrip.com/images/10030z000000mizq0E4B1_C_1000_560_Q80.jpg'
            },
            {
             id:1,
             url:'https://dimg06.c-ctrip.com/images/10030z000000mizq0E4B1_C_1000_560_Q80.jpg'
            },
         ]
     ]
         
    }
  },
  computed:{
    
  },
  methods: {
    handleImgClick(id){
        console.log('this.currentTabIndex',this.currentTabIndex)
        console.log('点击第几张', id)
        this.currentPage = id
        this.swiperTotalPage = this.galaryList[this.currentTabIndex].length
        this.showSwiper = true
        this.$refs.mySwiper.swiper.slideTo(id)
        console.log('this.showSwiper', this.showSwiper, 'this.swiperTotalPage', this.swiperTotalPage)
    },
    closeImgSwiper(){
        this.showSwiper = false
    }
  },
  created() {
  },
};
</script>

<style scoped>
.content-img-wrapper{
    width: 47%;
    display: inline-block;
    margin: 0.1rem;
    touch-action: none; 
}
.content-image{
    max-width: 100%;
}

.swiper-galary{
    position:absolute;
    bottom: 0;
    top:-0.8rem;
    background-color: #000;
    color: #fff;
    width: 100vw
}
.swiper-img-box{
    height: 4rem;
    margin-top: 4.3rem;
    position: relative;
}
.swiper-img{
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    left: 0.2rem;
}
.swiper-page{
  
}

.swiper-closeBtn{
    width: 100vw;
    text-align: center;
    margin-top: 4rem;
   
}
      
    
</style>

