<template>
  <div id="app">
    <!-- 内容 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 底部 -->
    <TabBar v-if="$store.state.RouterShow.indexOf($route.path)==-1"></TabBar>
  </div>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TabBar from "./components/Tabbar";

export default {
  components:{
    TabBar
  },
  methods:{

  },
  mounted() {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  overflow-x hidden
  overflow-y auto
</style>
