<template>
  <div class="header" :class="{'fixHeader':fixHeader}">
    <div class='search'>
      <van-icon class='search-icon' name="search" />
      <input 
      class='search-input' 
      :class="[changeInput]"
      type="text" 
      :placeholder="placeholder" 
      v-model="value"
      id = "inputBox"
      ref='input'
      >
      <van-icon :class="[changeIcon]" class= 'clear-icon' name="clear" @click="clearInput" />
      <div class='cancel-btn' :class="[changeBtn]"  @click="cancelSearch">取消</div>
    </div>
    <div class='search-content' ref="contentWrapper" v-show="searchContent.length > 0">
      <ul>
        <li class='first-li'>{{this.resultTip}}</li>
        <li
        v-for="item in searchContent"
        :key="item.id"
        class="content-item"
        >
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

import dissolve from '@/utils/utils.js'
export default {
  name: "locationHeader",
  props:{
    cityList:{
      type: Object
    }
  },
  data(){
    return{
      placeholder:"请输入城市名（如北京、beijing）",
      value:'',
      fixHeader:false,
      showAfterFocus: false,
      changeInput:'',
      changeIcon:'',
      changeBtn:'',
      searchContent:[],
      resultTip:'请输入城市名（如北京、beijing）',
      flag: 1,
      iLetter:'',
      iWord:''
      
      // searchContent:[
      //   {
      //     id: '001',
      //     name:'请输入城市名（如北京、beijing）'
      //   },
      //   {
      //     id: '002',
      //     name: '北京'
      //   },
      //   {
      //     id: '003',
      //     name: '北京'
      //   },
      //   {
      //     id: '004',
      //     name: '北京'
      //   },
      //   {
      //     id: '005',
      //     name: '北京'
      //   },
      //   {
      //     id: '006',
      //     name: '北京'
      //   },
      //   {
      //     id: '007',
      //     name: '北京'
      //   },
      //   {
      //     id: '008',
      //     name: '北京'
      //   },
      //   {
      //     id: '009',
      //     name: '北京'
      //   },
      //   {
      //     id: '010',
      //     name: '北京'
      //   },
      //   {
      //     id: '011',
      //     name: '北京'
      //   },
      //   {
      //     id: '012',
      //     name: '北京'
      //   },
      //   {
      //     id: '013',
      //     name: '北京'
      //   },
      //   {
      //     id: '014',
      //     name: '北京'
      //   },
      //   {
      //     id: '015',
      //     name: '北京'
      //   },
      //   {
      //     id: '016',
      //     name: '北京'
      //   },

      //   {
      //     id: '017',
      //     name: '北京'
      //   },
      //   {
      //     id: '018',
      //     name: '北京'
      //   },
      //   {
      //     id: '019',
      //     name: '北京'
      //   },
      //   {
      //     id: '020',
      //     name: '北京'
      //   },
      //   {
      //     id: '021',
      //     name: '北京'
      //   },
      //   {
      //     id: '022',
      //     name: '北京'
      //   },
      //   {
      //     id: '023',
      //     name: '新疆'
      //   }
        
      // ],
    }
  },
  watch:{
    value(){
      this.addClass()
      let content = this.value.trim()
      
      if(content === ''){
        // 空内容
        if(this.flag === 1){
          // 手动逐字清除
          this.deleteOneByOne()
        } else if(this.flag === 2){
          // 点击 x ,清除搜索内容
          console.log('flag 2')
          this.value = ''
          this.searchContent = [' ']
          this.resultTip='请输入城市名（如北京、beijing）'
        } else {
          // 点击 取消搜索
           this.value = ''
           this.resultTip = ''
           this.searchContent = []
           this.removeClass()
        }
      } else if(/^[0-9]+$/.test(content)){
        //数字
        this.showError()
      }else if(/^[a-zA-Z]+$/.test(content)){
        //字母
        this.searchAlph(content)
      }else if(/^[\u4e00-\u9fa5]+$/.test(content)){
        //汉字
        // console.log('进入汉字分支')
        this.searchWord(content)
        
      } else {
        //其他特殊字符
        this.showError()
        
      }
    }
  },
  methods: {
    fixLocationHeader(){
      let scrollTop = document.documentElement.scrollTop
      console.log("scrollTop", scrollTop)
      if(scrollTop > 38){
        this.fixHeader = true
      } else {
        this.fixHeader = false
      }
    },
    addClass(){
      this.changeBtn = "changeBtn"
      this.changeInput= "changeInput"
      this.changeIcon = "changeIcon"
    },
    removeClass(){
      this.changeBtn = ""
      this.changeInput= ""
      this.changeIcon = ""
    },
    showError(){
      this.searchContent = ['']
      this.resultTip="对不起，找不到"+this.value
    },
    deleteOneByOne(){
      this.searchContent = []
      this.resultTip = ''
      this.removeClass()
    },
    clearInput(){
      console.log('xclear')
      this.flag = 2
      this.value = ' '
    },
    cancelSearch(){
      this.flag = 3
      this.value = ' '

    },
    loopAlphabet(lowerContent){
      const citiesWrapper = this.cityList
      for(let i in citiesWrapper){
        if(i.toLowerCase().indexOf(lowerContent.substr(0,1))>-1){ 
          let arr = []
          let set = new Set()
          citiesWrapper[i].cities.forEach((value)=>{
            set.add(value.spell.substr(lowerContent.length-1,1))
            let a = Array.from(set) 
            this.iLetter = a.toString()
          })
        }
      }
    },
    loopWord(content){
      const citiesWrapper = this.cityList
      for(let i in citiesWrapper){
        if(i.toLowerCase().indexOf(dissolve(content.substr(0,1)).substr(0,1))>-1){ 
          let arr = []
          citiesWrapper[i].cities.forEach((item)=>{
            arr.push(item.name.substr(content.length-1,1))
            let a = Array.from(new Set(arr)) 
            this.iWord = a.toString()
          })
        }
      }
    },
   searchAlph(content){
     let result = []
        let lowerContent = content.toLowerCase()
        for(let key in this.cityList){
          let hasAlph = key.toLowerCase() === lowerContent[0]
          console.log('hasAlph', hasAlph)
          if(hasAlph){
            this.cityList[key].cities.forEach(item =>{
              if(item.spell.indexOf(lowerContent) > -1){
                result.push(item)
                this.searchContent = result
                this.resultTip = '请输入城市名（如北京、beijing）'
              } else if(lowerContent.indexOf(item.spell) > -1){
                console.log('11111')
                this.resultTip = "对不起，找不到"+this.value
              } else {
                this.loopAlphabet(lowerContent)
                console.log('this.iLetter', this.iLetter)
                if(!(this.iLetter.indexOf(lowerContent.substr(lowerContent.length-1,1))>-1)){
                     console.log('2222')
                     this.resultTip="对不起，找不到"+this.value
                     this.iLetter=''
                  }
              }
            })
          } else if('vuio'.indexOf(lowerContent[0]) > -1) {
            if(this.searchContent.length === 0){
                    this.searchContent = ['']
                  }
            this.resultTip = "对不起，找不到"+this.value
          }
        }
   },
   searchWord(content){
     const citiesWrapper = this.cityList
        let result = []
          for(let i in citiesWrapper){
            let haveAlph = i.toLowerCase().indexOf(dissolve(content.substr(0,1)).substr(0,1))>-1
            if(haveAlph){
              console.log('有汉字', citiesWrapper[i])
              citiesWrapper[i].cities.forEach(item =>{
                if(item.name.indexOf(content)>-1){
                  this.resultTip="请输入城市名（如北京、beijing）"
                  result.push(item)
                  this.searchContent = result
                }else if(content.indexOf(item.name)>-1){
                  if(this.searchContent.length === 0){
                    this.searchContent = ['']
                  }
                  this.resultTip="对不起，找不到"+this.value
                }else{
                  this.loopWord(content)
                  if(!(this.iWord.indexOf(content.substr(content.length-1,1))>-1)){
                    if(this.searchContent.length === 0){
                      this.searchContent = ['']
                    }
                     this.resultTip="对不起，找不到"+this.value
                     this.iWord=''
                  }
                }
              })
            }
          }
   }

  },
   mounted(){
    window.addEventListener('scroll', this.fixLocationHeader)
    this.$nextTick(()=>{
          this.scroll = new BetterScroll(this.$refs.contentWrapper, {
          click: true,
          mouseWheel:{
              speed: 20,
              invert: false,
              easeTime: 300,
          }
      })
      })
  },
  created() {
  },
};
</script>

<style scoped>
.header{
    background-color: #eee;
    width:100%;
    padding:0.2rem;
    box-sizing: border-box;
}
.fixHeader{
  position: fixed;
  top:0;
  z-index: 10;

}
.search{
  position: relative;
  
}

.search-icon{
  position: absolute;
  top: 0.12rem;
  left: 0.12rem;
  display: block;
}
.search-input{
  width:100%;
  height: 0.5rem;
  padding-left: 0.5rem;
  box-sizing: border-box;
  border-radius: 0.04rem;
  background-color: white;
}
.cancel-btn{
  display: none;
}
.clear-icon{
  display: none;
}

.changeInput{
  width: 88% !important;
}
.changeBtn{
    position: absolute;
    top: 0.13rem;
    right: 0;
    display: inline-block
}
.changeIcon{
  position:absolute;
  top: 0.11rem;
  right: 1.1rem;
  color: #80808085;
  display: inline-block
}

.search-content{
    z-index: 600;
    position: absolute;
    background: #eee;
    width: 100%;
    padding-top: 0.1rem;
    top:1rem;
    left: 0;
    bottom:0;
    right: 0;
    overflow:hidden;
}
.first-li{
  line-height:.22rem;
    padding:.1rem;
    margin-bottom:.06rem;
    color:#666;
    background:#fff;
    font-size:.1rem;
    color:#aaa
}
.content-item{
  padding: 0.2rem 0.2rem;
  background-color: white;
  border-bottom: 0.01rem solid #cccccc36;
}
</style>
