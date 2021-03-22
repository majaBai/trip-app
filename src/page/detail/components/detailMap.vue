<template>
  <router-link class="map" tag="div" to='map' append>
    <div class="left">
        <div class='left-desc'>
            无锡滨湖区
            <div class="label">酒店地址</div>
        </div>
        <div class='left-adress'>
            <van-icon name="location-o" />
            无锡滨湖区马山环山西路68号
        </div>
    </div>
    <div class="right">地图 <van-icon class='map-arrow' name="arrow" /></div>
  </router-link>
</template>

<script>
export default {
  name: "detailMap",
  components: {
  },
  data(){
    return{
      
    }
  },
  computed:{
    
  },
  methods: {
    goBack(){
        this.$router.go(-1)
    }
  },
  created() {
  },
};
</script>

<style scoped>
.map{
    background-color: white;
    margin-top:0.2rem;
    margin-bottom:0.2rem;
    overflow: hidden;
    padding:0.2rem;
}
.left{
    float: left;
}
.left-desc{
    margin-bottom: 0.2rem;
    font-weight: bold;
}
.label{
    color:#00bcd4;
    border: solid #00bcd4 1px;
    width: 1.2rem;
    display: inline-block;
    padding-left: 0.05rem;
    font-weight: normal;
}
.right{
    float: right;
    position: relative;
    top: 0.3rem;
    color: #00bcd4
}
.map-arrow{
    top: 0.05rem;
}
</style>
