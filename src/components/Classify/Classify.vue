<template>
  <div id="classify">
    <SearchTop>
      <span slot="right"><i class="iconfont icon-sousuo"></i></span>
    </SearchTop>
    <div class="classifyCountain">
      <nav class="nav flex-column">
        <router-link v-for="(item,index) in $store.state.classify['classifyLeft']" :to="/classify/+index" :key="index" class="nav-link">{{item}}</router-link>
      </nav>
    </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
  import SearchTop from "../Search/SearchTop";
    export default {
      components:{
        SearchTop
      },
      mounted() {
        this.$store.dispatch('getClassify')
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#classify
  height 100%
  .classifyCountain
    width 20%
    height 100%
    float left
    background-color #f3f3f3
    nav
      width 100%
      .router-link-active
        background-color #fff
</style>
