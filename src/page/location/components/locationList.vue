/* eslint-disable no-unused-vars */
<template>
  <div class="location-list" ref='wrapper'>
      <div>
      <div class="current">
          <div class='current-titel'>当前</div>
          <div class='current-city'>{{currentCity}}</div>
      </div>
      <div class='hot'>
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
      v-for="item in alphList" 
      :key="item.id">
          <div class='alph-tilte'>{{item.alph}}</div>
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
  
  data(){
    return{
        currentCity: '正在获取位置信息...',
     hotCity:[
         {
             id:'001',
             name:'北京'
         },
          {
             id:'002',
             name:'上海'
         }, 
         {
             id:'003',
             name:'广州'
         }, 
         {
             id:'004',
             name:'杭州'
         }, 
         {
             id:'005',
             name:'天津'
         }, 
         {
             id:'006',
             name:'成都'
         }, 
         {
             id:'007',
             name:'南京'
         },
     ],
     alphList:[
         {
             alph:'A',
             id:'001',
             cities:[
                 {
                     id:'A-01',
                     name:'安庆'
                 },
                 {
                     id:'A-02',
                     name:'安顺'
                 },
                 {
                     id:'A-03',
                     name:'安阳'
                 },
                 {
                     id:'A-04',
                     name:'鞍山'
                 },
                 {
                     id:'A-05',
                     name:'安康'
                 },
                 {
                     id:'A-06',
                     name:'阿里'
                 },
                 {
                     id:'A-07',
                     name:'阿坝'
                 },
                 {
                     id:'A-08',
                     name:'阿克苏'
                 },

             ]
         },
         {
             alph:'B',
             id:'002',
             cities:[
                 {
                     id:"B-01",
                     name:"蚌埠"
                 },
                 {
                     id:"B-02",
                     name:"亳州"
                 },
                 {
                     id:"B-03",
                     name:"北京"
                 },
                 {
                     id:"B-04",
                     name:"白银"
                 },
                 {
                     id:"B-05",
                     name:"北海"
                 },
                 {
                     id:"B-06",
                     name:"毕节"
                 },
             ],
         },
         {
             alph:'C',
             id:'003',
             cities:[
                 {
                     id:"C-01",
                     name:"重庆"
                 },
                 {
                     id:"C-02",
                     name:"成都"
                 },
                 {
                     id:"C-03",
                     name:"长沙"
                 },
                 {
                     id:"C-04",
                     name:"常州"
                 },
                 {
                     id:"C-05",
                     name:"长春"
                 },
                 {
                     id:"C-06",
                     name:"承德"
                 },
                 {
                     id:"C-07",
                     name:"沧州"
                 }
                 
             ]
         }

     ]
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
          let bs = new BetterScroll(that.$refs.wrapper, {
          click: true,
          mouseWheel:{
              speed: 20,
              invert: false,
              easeTime: 300,
              outOfBoundaryDampingFactor: 1,
          }
      })
    //   console.log(bs)
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
