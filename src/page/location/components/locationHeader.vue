<template>
  <div class="search">
    <div>
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
      value:''
      
    }
  },
  methods: {
    
  },
  created() {
  },
};
</script>

<style scoped>
.search{
    background-color: #eee;
    height: 0.8rem;
    width:100%;
    padding:0.2rem;
    box-sizing: border-box;
    position: relative;
}
.search-icon{
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
}
.search-input{
  width:100%;
  height: 0.5rem;
  padding-left: 0.7rem;
  box-sizing: border-box;
}

</style>
