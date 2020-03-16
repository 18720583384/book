<template>
      <div>
        <div to="/search" class="fixed-top" id="search">
          <span class="left" @click="routerBack"><i class="iconfont icon-fanhui"></i></span>
          <input type="text" class="search_input" placeholder="请输入搜索内容">
          <span class="right"><i class="iconfont icon-sousuo"></i></span>
        </div>
        <div class="searchContent">
          <div class="searchList">
            <h6>书籍热搜</h6>
            <ul>
              <li v-for="(item,index) in $store.state.bookHot.hot" :key="index"><div>{{index}}</div>{{item}}</li>
            </ul>
          </div>
          <div class="searchList">
            <h6 class="lt">搜索历史<span class="wip" @click="wip">清空</span></h6>
            <ul>
              <li v-for="(item,index) in $store.state.bookHot.history" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
      methods:{
        routerBack(){
          this.$router.back()
        },
        wip(){
          this.$store.dispatch('deleteBookHot')
        }
      },
      mounted() {
        this.$store.dispatch('getBookHot')
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  padding-top 45px
  #search
    padding 7px 11px
    margin-bottom 0
    background-color #fff
    input
      outline none
      background-color #f3f3f3
      border 1px solid #f3f3f3
      border-radius 15px
      width 80%
      height 30px
      padding-left 15px
    .right>i
      font-size 1.2em
      padding-left 8px
    .left>i
      font-size 1.2em
      padding-right 4px
  .searchContent
    padding 0px 10px
    width 100%
    h6
      font-weight 600
    h6.lt
      padding-top 108px
      .wip
        color red
        float right
        font-size 0.8em
    ul>li
      overflow hidden
      float left
      width 50%
      font-size 0.8em
      line-height 20px
      margin 3px 0
      div
        width 20px
        height 20px
        display inline-block
        text-align center
        line-height 20px
        margin-right 8px
        background-color #f3f3f3
</style>
