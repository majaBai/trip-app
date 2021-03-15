<template>
  <div class="header" :class="{'fixHeader':fixHeader}">
    <div class='search'>
      <van-icon class='search-icon' name="search" />
      <input class='search-input' type="text" :placeholder="placeholder" v-model="value">
    </div>
  </div>
</template>

<script>

export default {
  name: "locationHeader",
  
  data(){
    return{
      placeholder:"请输入城市名（如北京、bj、beijing）",
      value:'',
      fixHeader:false
    }
  },
  methods: {
    fixLocationHeader(){
      let scrollTop = document.documentElement.scrollTop
      console.log("scrollTop", scrollTop)
      if(scrollTop > 38){
        this.fixHeader = true
      } else {
        this.fixHeader = false
      }
    }
  },
   mounted(){
    window.addEventListener('scroll', this.fixLocationHeader)
  },
  created() {
  },
};
</script>

<style scoped>
.header{
    background-color: #eee;
    width:100%;
    padding:0.2rem;
    box-sizing: border-box;
}
.fixHeader{
  position: fixed;
  top:0;
  z-index: 10;

}
.search{
  position: relative;
}
.search-icon{
  position: absolute;
  top: 0.12rem;
  left: 0.12rem;
}
.search-input{
  width:100%;
  height: 0.5rem;
  padding-left: 0.5rem;
  box-sizing: border-box;
  border-radius: 0.04rem;
  background-color: white;
}

</style>
