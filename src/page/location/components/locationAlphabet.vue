<template>
  <div class="alphabet">
      <ul class="list">
          <li
          v-for=" item in alphabetList"
          :key= "item.id"
          @click="clickAlphabet($event, item)"
          >{{item.content}}</li>
      </ul>
      <div v-show="showContent" class='content' ref="distance">{{content}}</div>
  </div>
</template>

<script>

export default {
  name: "locationAlphabet",
  props:{
    alphabetList:{
        type:Array
    }
  },
  data(){
    return{
        content:'热门城市',
        showContent: false,
    }
  },
  methods: {
      clickAlphabet(event, item){
        //   console.log('clicked alphabet', event, item.content)
          this.$emit('changeAlphabet', item.content)
          let contentDiv = this.$refs.distance
        //   console.log('contentDiv', contentDiv)
          let distanceTop
          for(let i = 0; i < this.alphabetList.length; i++){
              if(item.id === this.alphabetList[i].id){
                  // 1.3rem 时 contentDiv 大概和 alphabet 的开头齐平
                   distanceTop = 1.3 + i * 0.34
                   break;
              }
          }
          this.content = item.content
        //   console.log('distanceTop', distanceTop)
          contentDiv.style = "top: " + distanceTop + "rem"
          this.showContent = true
          setTimeout(()=>{
              this.showContent= false
          }, 500)
      }
    
  },
   mounted(){
  },
  created() {
  },
};
</script>

<style scoped>
.alphabet{
    z-index: 500;
    position:fixed;
    top: 1.2rem;
    right: 0;
    text-align: center;
    background-color: #e9ecf1;
    color:#53cabf;
    padding-bottom: 100rem;
    opacity: 0.7;
    width: 1rem;
    font-size:12px;
}
.content{
    z-index: 500;
    position:fixed;
    right: 1rem;
    text-align: center;
    background-color: #53cabf;
    border-radius: 0.05rem;
    padding: 0.05rem;
    color: white;
}
.list > li{
margin: 0.1rem 0;
}
</style>
