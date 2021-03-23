<template>
  <div class="galary">
   <ly-tab
    v-model="selectedId"
    :items="tabItems"
    :options="options"
    class='tabColor'
    @change='changeTab'
    >
   </ly-tab>
   <div class='sub-select'>
     <span class='all' :class="{'activ-sub-select': currentSubSelect ===0}" @click="clickSubSlect(0)">全部</span>
     <span :class="{'activ-sub-select': currentSubSelect ===1}" @click="clickSubSlect(1)">其他</span>
   </div>
   <component :is="currentTabComponent" :currentTabIndex="currentTabIndex"></component>

  </div>
</template>

<script>
import galaryContent from './galaryContent.vue'
export default {
  name: "Galary",
  components: {
   galaryContent
  },
  data(){
    return{
      selectedId: 0,
      tabItems: [],
      // galaryTabName:[
      //   '无锡拈花客栈',
      //   '无锡拈花客栈',
      //   '无锡拈花客栈',
      //   '无锡拈花客栈',
      //   '无锡拈花客栈',
      //   '无锡拈花客栈'
      // ],
      options: {
        activeColor: '#1d98bd'
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      currentTabComponent: galaryContent,
      currentTabIndex: 0,
      currentSubSelect: 0
    }
  },
  computed:{
    galaryTabName(){
      return this.$store.state.galaryTabName
    }
  },
  methods: {
    changeTab(item, indx){
      console.log('item', item, 'indx', indx, 'selectId', this.selectedId)
      this.currentTabIndex = indx
    },
    clickSubSlect(flag){
      this.currentSubSelect = flag
    },
    creatTabs(){
      for(let i = 0; i < this.galaryTabName.length; i++){
        let name = this.galaryTabName[i]
        let obj = {
          label: name
        }
        this.tabItems.push(obj)
      }
    }
  },
  created() {
    this.creatTabs()
  },
};
</script>

<style lang='sass' scoped>

.galary
    position: absolute
    top: 0.73rem
    left: 0
    right: 0
    bottom: 0
    z-index: 100
    background: white
    .sub-select
      background: #edf0f5
      padding: 0.15rem
      padding-left: 0.3rem
      .activ-sub-select
        color:#1d98bd
      .all
        display: inline-block
        margin-right: 0.3rem

    .tabColor
      background: #fff
      border-color:#fff
      
    
</style>

