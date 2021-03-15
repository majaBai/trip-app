<template>
  <div class="location">
   <location-header></location-header>
  </div>
</template>

<script>
import locationHeader from "./components/locationHeader.vue";

export default {
  name: "Location",
  components: {
    locationHeader
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
}

</style>
