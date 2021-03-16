<template>
  <div class="location">
   <location-header></location-header>
   <location-list :currentLetter="currentLetter"></location-list>
   <location-alphabet @changeAlphabet="handeleChangeAlphabet"></location-alphabet>
   
  </div>
</template>

<script>
import locationHeader from "./components/locationHeader.vue";
import locationList from "./components/locationList.vue";
import locationAlphabet from "./components/locationAlphabet.vue";

export default {
  name: "Location",
  components: {
    locationHeader,
    locationList,
    locationAlphabet
  },
  data(){
    return{
      currentLetter:''
    }
  },
  methods: {
   handeleChangeAlphabet(letter){
     console.log('alphabet change', letter)
     this.currentLetter = letter

   }
    
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
