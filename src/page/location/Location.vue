<template>
  <div class="location">
   <location-header></location-header>
   <location-list :currentLetter="currentLetter" :hotCity="hotCity" :cityList="cityList"></location-list>
   <location-alphabet @changeAlphabet="handeleChangeAlphabet" :alphabetList="alphabetList"></location-alphabet>
   
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
      currentLetter:'',
      hotCity:[],
      cityList:[],
      alphabetList:[]
    }
  },
  methods: {
   handeleChangeAlphabet(letter){
     console.log('alphabet change', letter)
     this.currentLetter = letter

   },
   initLocationPage(result){
     console.log('location data:', result.data)
     let data = result.data
     this.hotCity = data.hotCity
     this.cityList = data.cityList
     this.alphabetList = data.alphabetList
   }
    
  },
 
  created() {
    this.$axios.get('api/city.json').then(this.initLocationPage)
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
