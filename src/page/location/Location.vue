<template>
  <div class="location">
    <div class="loading" v-if="loading">loading...</div>
   <location-header :cityList="cityList"></location-header>
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
      cityList:{},
      alphabetList:[],
      loading: true
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
     this.loading = false
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
.loading{
  position: absolute;
  top: 7rem;
  text-align: center;
  z-index:1500;
  left: 3rem;
  opacity: 0.3;
}

/* .location::-webkit-scrollbar { width: 0 !important } */


</style>
