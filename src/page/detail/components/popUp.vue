<template>
  <div class="pop-up">
      <div class='tittle'>
          <van-icon class='switch-icon' v-show='showDown' @click='close' name="arrow-down" />
          <van-icon class='switch-icon' v-show='!showDown' @click='open' name="arrow-up" />
      </div>
      <div v-show='showContent' class='content' :style="{height: height}">
          <slot name='content'></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "popUp",
  components: {
  
  },
  props:{
      height:{
          type:String,
          default:'5rem'
      },
      changeHeight:{
          type:Function

      }
  },
  data(){
    return{
      showContent: true,
      showDown: true
     
    }
  },
  computed:{
    
  },
  methods: {
      close(){
          this.showDown = false
          this.showContent = false
          this.$emit("changeHeight", '97%')
      },
      open(){
          this.showDown = true
          this.showContent = true
          this.$emit("changeHeight", '60%')
      }
    
  },
  created() {
  },
};
</script>

<style scoped>
.pop-up{
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1000;
}
.tittle{
   padding-top: 0.1rem;
   background-color: #eee;
}
.switch-icon{
    left: 50%;
    color: gray;
}
.content{
    transition: all ease 1s;
}
</style>


