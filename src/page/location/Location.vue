<template>
  <div class="location">
   <location-header></location-header>
   <location-list></location-list>
  </div>
</template>

<script>
import locationHeader from "./components/locationHeader.vue";
import locationList from "./components/locationList.vue";

export default {
  name: "Location",
  components: {
    locationHeader,
    locationList
  },
  data(){
    return{
      
    }
  },
  methods: {
   
    
  },
 
  created() {
  },
};
</script>

<style scoped>
.location{
    background-color: white;
    /* height: 100vh;
    width: 100vw;
    overflow: hidden; */

}

/* .location::-webkit-scrollbar { width: 0 !important } */


</style>
