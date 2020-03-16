<template>
    <div id="mine">
      <SearchTop>
        <span slot="right"><i class="iconfont icon-sousuo"></i></span>
      </SearchTop>
      <router-link tag="div" to="/login" class="Mine-login">
        <div class="Mine-title"><i class="nav-link iconfont icon-wode"></i></div>
        <p>登录阅读账号</p>
      </router-link>
      <section>
        <div class="mineList">
          <span class="spanleft"><i class="iconfont icon-xiaoxitongzhi"></i></span>
          <span class="spanright"><mt-cell title="消息通知" is-link></mt-cell></span>
        </div>
        <div class="mineList">
          <span class="spanleft"><i class="iconfont icon-zuijinliulan"></i></span>
          <span class="spanright"><mt-cell title="最近浏览" is-link></mt-cell></span>
        </div>
        <div class="mineList">
          <span class="spanleft"><i class="iconfont icon-shudan"></i></span>
          <span class="spanright"><mt-cell title="我的书单" is-link></mt-cell></span>
        </div>
        <div class="mineList">
          <span class="spanleft"><i class="iconfont icon-fenxiang"></i></span>
          <span class="spanright"><mt-cell title="分享应用" is-link></mt-cell></span>
        </div>
        <div class="mineList">
          <span class="spanleft"><i class="iconfont icon-haoping"></i></span>
          <span class="spanright"><mt-cell title="给个好评" is-link></mt-cell></span>
        </div>
        <div class="mineList">
          <span class="spanleft"><i class="iconfont icon-huancun"></i></span>
          <span class="spanright"><mt-cell title="缓存管理" is-link></mt-cell></span>
        </div>
        <div class="mineList">
          <span class="spanleft"><i class="iconfont icon-yijian"></i></span>
          <span class="spanright"><mt-cell title="意见反馈" is-link></mt-cell></span>
        </div>
        <div class="mineList">
          <span class="spanleft"><i class="iconfont icon-huaban"></i></span>
          <span class="spanright"><mt-cell title="设置" is-link></mt-cell></span>
        </div>
      </section>
    </div>
</template>

<script>
  import SearchTop from "../Search/SearchTop";
    export default {
        components:{
          SearchTop
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#mine
  .Mine-login
    width 94%
    background-color #f3f3f3
    text-align center
    margin 5px 11px 10px
    padding 15px 0
    border-radius 10px
    .Mine-title
      width 56px
      height 56px
      margin auto
      background-color #ccc
      border-radius 50%
      text-align center
      line-height 50px
      i
        font-size 1.7em
        color #fff
    p
      font bold 0.9em SimSun-ExtB
      padding-top 15px
  section
    vertical-align: middle;
    .mineList
      display flex
      justify-content space-between
      height 48px
      .spanleft
        line-height 56px
        i
          font-size 1.5em
          padding-left 7px
      .spanright
        width 90%
</style>
