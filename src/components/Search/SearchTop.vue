<template>
        <router-link to="/search" class="search fixed-top">
              <input type="text" class="search_input" placeholder="请输入搜索内容">
            <slot name="right"></slot>
        </router-link>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  padding-top 45px
  .search
    padding 7px 11px
    margin-bottom 0
    background-color #fff
    input
      outline none
      background-color #f3f3f3
      border 1px solid #f3f3f3
      border-radius 15px
      width 90%
      height 30px
      padding-left 15px
    i
      font-size 1.2em
      padding-left 8px

</style>
