<template>
  <div class="mapContent">
  <div class='allMap' ref='allMap' :style="{height: height}">
  </div>
 <pop-up @changeHeight="changeHeight">
  <template v-slot:content>
      <div>
   <ly-tab
    v-model="selectedId"
    :items="tabItems"
    :options="options"
    class='map-tabColor'
    @change='changeTab'
    >
   </ly-tab>
          <div v-show="currentTab === 0" class='hotel-content'>
              <div class='hotel-info-box' 
              :class="{grayBackground: item.id %2 !== 0}" 
              v-for="item of addressList[0]" 
              :key="item.id"
              @click='changeAddress(item.id)'
              >
                  <div class='hotel-name'>{{item.name}}</div>
                  <div class='hotel-address'>{{item.address}}</div>
              </div>
          </div>
          <div v-show="currentTab === 1" class='tourist-attraction'>
              <div  
               class='tourist-info-box' 
               v-for="item of addressList[1]" 
               :key="item.id"
               @click='changeAddress(item.id)'
               >
                  <div class='tourist-name'>{{item.name}}</div>
                  <div class='tourist-address'>{{item.address}}</div>
              </div>
          </div>
      </div>
  </template>
 </pop-up>
  </div>
</template>

<script>
import popUp from './popUp.vue'
import loadBMap from '@/loadBMap/loadBMap'
import makerImg from '@/assets/img/marker.png'

export default {
  name: "MapContent",
  components: {
  popUp
  },
 
  data(){
    return{
     
      selectedId:0,
      Bmap:null,
      tabItems:[
          {label: '酒店'},
          {label: '景点'}
      ],
      options:{
          activeColor: '#1d98bd'
      },
      currentTab: 0,
      addressList:[
          [
              {
              name:'无锡拈花客栈',
              id: 0,
              address:'无锡滨湖区马山环山西路68号'

          },
          {
              name:'无锡拈花湾拈花客栈',
              id: 1,
              address:'滨湖区马山灵山路'

          },
          ],
          [
              {
              name: '拈花湾景区',
              id:0,
              address:'马山环山西路68号'
          }
          ]
      ],
     height: "60%"
    }
  },
  computed:{
    
  },
  methods: {
    changeTab(){
        this.currentTab = this.selectedId
    },
    changeHeight(height){
        this.height = height
    },
    // addMasker(m, n){
    //     let that = this
    //     console.log('addMasker', this.Bmap)
    //     let map = new that.Bmap.Map(this.$refs.allMap)
    //     let address = this.addressList[m][n].address
    //     map.enableScrollWheelZoom(true)
        
    //     let myGeo = new that.Bmap.Geocoder();
    //     for(let i = 0 ; i < this.addressList.length; i++){
    //         for(let j = 0; j < this.addressList[i].length; j++){
    //             myGeo.getPoint( this.addressList[i][j].address, function(point){
    //                 console.log('point', point)
    //                 if(point){
    //                     map.centerAndZoom(point, 16);
    //                     if(i===m&&j===n){
    //                     //当前位置（默认this.addressList[0][0]）添加特殊 marker : makerImg
    //                     console.log('添加特殊marker', i, j)
    //                         let myIcon = new that.Bmap.Icon(makerImg, new that.Bmap.Size(50,50), {imageOffset: new that.Bmap.Size(14, 2)})
    //                         map.addOverlay(new that.Bmap.Marker(point, {
    //                             icon: myIcon
    //                         }))
    //                     // 添加信息窗口
    //                     // InfoWindow(“信息内容”， {width: xxpx, height: xxpx, title: '信息窗口标题'})
    //                     let infoWindow = new that.Bmap.InfoWindow(that.addressList[i][j].address, {
    //                         title:that.addressList[i][j].name
    //                     }); 
    //                     map.openInfoWindow(infoWindow, map.getCenter());
    //                     }else{
    //                     //添加 marker
    //                         map.addOverlay(new that.Bmap.Marker(point))
    //                     }
                       
    //                 } else {
    //                     alert('您选择的地址没有解析到结果！');
    //                 }
    //             })
    //         }
    //     }
    // },
    changeAddress(id){
        console.log('this.currentTab', this.currentTab, 'id', id)
        this.addMasker(this.currentTab, id)
    },
    addMasker(m,n){
     let that = this
        console.log('addMasker', BMapGL)
        let map = new BMapGL.Map(this.$refs.allMap)
        let address = this.addressList[m][n].address
        map.enableScrollWheelZoom(true)
        
        let myGeo = new BMapGL.Geocoder();
        for(let i = 0 ; i < this.addressList.length; i++){
            for(let j = 0; j < this.addressList[i].length; j++){
                myGeo.getPoint( this.addressList[i][j].address, function(point){
                    console.log('point', point)
                    if(point){
                        map.centerAndZoom(point, 16);
                        if(i===m&&j===n){
                        //当前位置（默认this.addressList[0][0]）添加特殊 marker : makerImg
                        console.log('添加特殊marker', i, j)
                            let myIcon = new BMapGL.Icon(makerImg, new BMapGL.Size(20,20), {imageOffset: new BMapGL.Size(0, 0)})
                            map.addOverlay(new BMapGL.Marker(point, {
                                icon: myIcon
                            }))
                        // 添加信息窗口
                        // InfoWindow(“信息内容”， {width: xxpx, height: xxpx, title: '信息窗口标题'})
                        let infoWindow = new BMapGL.InfoWindow(that.addressList[i][j].address, {
                            title:that.addressList[i][j].name
                        }); 
                        map.openInfoWindow(infoWindow, map.getCenter());
                        }else{
                        //添加 marker
                            map.addOverlay(new BMapGL.Marker(point))
                        }
                       
                    } else {
                        alert('您选择的地址没有解析到结果！');
                    }
                })
            }
        }
    },
  },
//   async mounted(){
//     let that = this
//     if(this.$store.state.Bmap){
//         this.Bmap = this.$store.state.Bmap
//     }else{
//         let Bmap = await loadBMap(that.$AK)
//         this.$store.state.Bmap=Bmap
//         this.Bmap = Bmap
//         console.log('map', this.Bmap)
//     }
//     console.log('挂载mapContent', this.Bmap)
//     this.addMasker(0, 0)
//   },

// 在 main.js 中全局引入BMap 
mounted(){
    console.log('挂载mapContent', BMapGL)
    this.addMasker(0, 0)
},
  created() {
  },
};
</script>

<style scoped>
.mapContent{
    background: white;
        width: 100%;
    bottom: 0;
    position: absolute;
    left: 0;
    top: 0.7rem;
    z-index: 1000;
}
.hotel-info-box, .tourist-info-box{
    padding: 0.2rem;
    border-bottom: 1px solid #80808014;
    background-color: white;
}
.hotel-name, .tourist-name{
    margin-bottom: 0.1rem;
    font-weight: bold;
}
.hotel-address, .tourist-address{
    font-size: 12px;
    color: gray;
}
.map-tabColor{
    background-color: #eee;
}
.grayBackground{
    background-color: #eee;
}
.allMap{
    position: relative;
    top:0;
    left:0;
    right:0;
    bottom:0.6rem;
    /* background: red; */
    /* height: 60%; */
}

</style>
<style >
.ly-tabbar{
    background-color: #eee !important
}

/* .BMap_top {
    display: none;
}
        
.BMap_bottom {
    display: none;
}

.BMap_center {
    display: none;
} */

/* .BMap_pop:nth-child(1) div{
    display: none;
}
.BMap_pop:nth-child(2) div{
    display: none;
}
.BMap_pop:nth-child(3) div{
    display: none;
}
.BMap_pop:nth-child(4) div{
    display: none;
}
.BMap_pop:nth-child(5) div{
    display: none;
}
.BMap_pop:nth-child(6) div{
    display: none;
}
.BMap_pop:nth-child(7) div{
    display: none;
} */


/* .BMap_pop:nth-child(9) div{
    border-radius: 7px;
    width: 227px;
    height: 77px;
    left: 16px;
    top: 10px;
} */

/* .BMap_bubble_title{
    color: white;
    font-size: 13px;
    font-weight: bold;
    text-align: left;
    padding-left: 5px;
    padding-top: 5px;
    border-bottom: 1px solid #0bb300;
    background-color: #0bb300;
}

.BMap_bubble_content{
    padding-left: 5px;
    padding-top: 5px;
    padding-bottom: 10px;
    background-color: white;
} */



</style>

