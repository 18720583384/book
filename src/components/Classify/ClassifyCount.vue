<template>
    <div class="ClassifyCount">
      <router-link tag="div" :to="$route.path+'/booklist'" class="classifyList" v-for="(item,index) in classList[$route.path.substr(-1,1)]" :key="index">
        <img :src="'../../../static/img/'+item" :alt="index">{{index}}</router-link>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          classList:[{"都市":"1.png","玄幻":"1.png","仙侠":"1.png",
            "武侠":"1.png","奇幻":"1.png","历史":"1.png","军事":"1.png","校园":"1.png","科幻":"1.png","游戏":"1.png","竞技":"1.png"}]
        }
      },
      mounted() {
        //this.classList=this.$store.state.classify['classifyRight']
      },
      watch:{
        $route(){
          this.classList=this.$store.state.classify['classifyRight']
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .ClassifyCount
    float left
    width 80%
    height 100%
    overflow-y auto
    background-color #fff
    .classifyList
      float left
      width 50%
      img
        width 30%
        margin 12px 10px 5px 28px
</style>
