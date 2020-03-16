<template>
    <div class="comment">
      <!-- 头部 -->
      <div class="fixed-top">
        <mt-header title="评论">
        <span @click="$router.back()" slot="left">
          <mt-button icon="back"></mt-button>
        </span>
        </mt-header>
      </div>
      <p class="flex justify-content-between">
        <textarea></textarea>
        <i class="iconfont icon-pinglun"></i>
      <p/>
      <div class="row">
        <div class="col-2">
          <img width="100%" src="../../../static/img/title_montent.png" alt="title">
        </div>
        <div class="col-10" style="border-bottom: 1px solid #f3f3f3;">
          <h6>人生是梦</h6>
          <div class="CommentFont">写的很好希望还有更好的作品</div>
          <div class="CommentFont">评分 <span style="color: red">★★★★★★</span></div>
          <div class="CommentFont d-flex justify-content-between">
            <span>2018/4/14 17:47</span>
            <span style="background-color: #f3f3f3;border-radius: 10px;padding: 0 10px">
              <i class="iconfont" :class="dianZ?'icon-dianzan':'icon-dianzan1'" @click="dianZ=!dianZ" style="font-size: 1.2em"></i>
              <span>17</span>
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            dianZ:true
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  padding-top 45px
  .comment
    padding 10px
    textarea
      width 90%
      height 30px
      border 2px solid #f3f3f3
      font-size 0.8em
    i
      font-size 1.7em
    .CommentFont
      font-size 0.8em
      color #777
      padding-bottom 6px
</style>
