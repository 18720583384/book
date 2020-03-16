<template>
  <div class="Tabbar">
    <ul class="nav fixed-bottom">
      <router-link tag="li" class="nav-item" :class="{active:$route.path.indexOf('/bookcase')!=-1}" to="/bookcase">
        <i class="nav-link iconfont icon-shujia"></i>
        <div>书架</div>
      </router-link>
      <router-link tag="li" class="nav-item" :class="{active:$route.path.indexOf('/bookmall')!=-1}" to="/bookmall">
        <i class="nav-link iconfont icon-icon_shuchengnor"></i>
        <div>书城</div>
      </router-link>
      <router-link tag="li" class="nav-item" :class="{active:$route.path.indexOf('/classify')!=-1}" to="/classify">
        <i class="nav-link iconfont icon-fenlei1"></i>
        <div>分类</div>
      </router-link>
      <router-link tag="li" class="nav-item" :class="{active:$route.path.indexOf('/mine')!=-1}" to="/mine">
        <i class="nav-link iconfont icon-wode"></i>
        <div>我的</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    padding-bottom 58px
    .Tabbar
      .nav
        border-top 1px solid whitesmoke
        background-color: #fff
        li
          width 25%
          text-align center
          i
            font-size 1.3em
            padding-bottom 0
          div
            font-size 12px
        .active
          color red
</style>
