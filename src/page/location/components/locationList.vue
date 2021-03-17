/* eslint-disable no-unused-vars */
<template>
  <div class="location-list" ref='wrapper'>
      <div>
      <div class="current" ref="current">
          <div class='current-titel'>当前</div>
          <div class='current-city'>{{currentCity}}</div>
      </div>
      <div class='hot' ref="hot">
          <div class='hot-titel'>热门城市</div>
          <div class='hot-city-list'>
              <div 
              class='hot-city-item'
              v-for="item in hotCity"
              :key = "item.id"
              >{{item.name}}</div>
          </div>
      </div>
      <div class="alph-wrapper">
      <div class="alph" 
      v-for="(item, key) in cityList" 
      :key="key"
      :ref="key"
      >
          <div class='alph-tilte'>{{key}}</div>
          <div class='alph-city-wrapper'>
          <div class='alph-city-list' 
          v-for="(city, idx) in item.cities" 
          :class="{'border-bottom': idx+1 != item.cities.length}"
          :key="city.id">
              {{city.name}}
          </div>
          </div>
      </div>
      </div>
      </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import loadBMap from './loadBMap'

export default {
  name: "locationList",
  props:{
    currentLetter:{
        type: String
    },
    hotCity:{
        type: Array
    },
    cityList:{
        type: Object
    }
  },
  
  data(){
    return{
        currentCity: '正在获取位置信息...',
    }
  },
  watch:{
      currentLetter(){
          console.log('watch----', this.currentLetter)
          let elementAlph = this.$refs[this.currentLetter]
          let elementCurrent = this.$refs.current
          let elementHot = this.$refs.hot
        //   console.log('elementAlph[0]', elementAlph[0])
          if(elementAlph){
              let element = elementAlph[0]
              this.scroll.scrollToElement(element)
          } else {
              if(this.currentLetter === '当前'){
              this.scroll.scrollToElement(elementCurrent)
              } else{
              this.scroll.scrollToElement(elementHot)
              }
          }
      }
  },
  methods: {
    getCurrentCity(result){
        if(result && result.name){
            this.currentCity = result.name
            console.log(result, "当前定位城市:"+ this.currentCity);
        } else {
            console.log('定位当前城市出错')
        }
    }
  },
  async mounted(){
      let that = this
      let Bmap = await loadBMap(that.$AK)
      console.log('Bmap', Bmap)
      let myCity = new Bmap.LocalCity();
      myCity.get(that.getCurrentCity);

      this.$nextTick(()=>{
          this.scroll = new BetterScroll(that.$refs.wrapper, {
          click: true,
          mouseWheel:{
              speed: 20,
              invert: false,
              easeTime: 300,
          }
      })
      })
      
  },

  created() {
  },
};
</script>

<style scoped>
.location-list{
    background-color: #e9ecf1;
   /* 下面是 better-scroll 需要 
   better-scroll 作用于 wrapper, 并且只会滚动 wrapper 下的第一个子元素；
   只有当第一个子元素的高/宽度大于wrapper时才会滚动，因此最好设定wrapper的高/宽度以及overflow:hidden;
   */
   position: absolute;
   top:0.9rem;
   z-index: 2;
   /* 出发一个bfc */
   overflow:hidden; 
   bottom: 0;
    
}

.current{
    margin-bottom: 0.1rem
}

.current-titel, .hot-titel, .alph-tilte {
    margin-left: 0.2rem;
    padding:0.2rem 0;
}
.current-city{
    width:6.8rem;
    padding: 0.15rem;
    background-color: white;
    border: 1px solid #eee;
    border-radius: 2px;
    box-sizing: border-box;
    color: gray;
    margin-left:0.2rem
}
.hot-titel{
    padding: 0.2rem 0 0.1rem 0;
}

.hot-city-list{
    padding-left: 0.1rem;
}
.hot-city-item{
    text-align: center;
    padding: 0.1rem 0.2rem;
    border: 1px solid #8080803b;
    margin: 0.1rem;
    width: 1.1rem;
    display: inline-block;
    background-color: white;
    border-radius: 2px;
    color: rgb(128, 128, 128)
}

.alph-city-wrapper{
    background-color: white;
    padding-left: 0.2rem;
}
.alph-city-list{
    padding: 0.2rem 0;
    color:gray;
}
.border-bottom{
     border-bottom: 0.01rem solid #cccccc36;
}
</style>
