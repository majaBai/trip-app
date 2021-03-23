<template>
  <div class="comment">
      <div class='tittle'><van-icon class="good-job" name="good-job" />推荐理由</div>
      <ul class='content'>
          <li v-for="txt in comment" :key='txt'>{{txt}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "detailComment",
  components: {
  },
  props:{
      comment:{
          type:Array
      }
  },
  data(){
    return{
      
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
.comment{
    background: white;
    margin-top: 0.2rem;
    padding: 0.2rem;
}
.tittle{
    background-color: red;
    color: white;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0.3rem;
    margin-bottom: 0.2rem;
    width: 1.5rem;
    padding: 0.1rem;
    font-weight: bold;
}
ul {
    list-style: none
}
li{
    margin: 0.1rem 0;
}
li::before {
    content:"。"; 
    color: red;
    position: relative;
    margin-left: 0.1rem;
    bottom: 0.08rem;
    display: inline-block;
    }
.good-job{
    margin-right: 0.05rem;
    top: 0.02rem;
}
</style>
