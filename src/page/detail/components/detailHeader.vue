<template>
  <div class="detail-header">
      <div class='goback' @click="goBack">
          <van-icon name="arrow-left" />
      </div>
      <div class='title'>景点+酒店</div>
      <div class='option'>
          <van-icon name="ellipsis" />
      </div>
  </div>
</template>

<script>
export default {
  name: "detailHeader",
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
.detail-header{
    display: flex;
    padding:0.2rem;
    background: #ffff;
}
.goback{
    float: left;
    color: #53cabf;
    font-size: 0.3rem;
}
.title{
    flex: 1;
    text-align: center;
    font-size: 0.3rem;
    font-weight: bold;
}
.option{
    float: right;
    color: #53cabf;
    font-size: 0.3rem;
}
</style>
