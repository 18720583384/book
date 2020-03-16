<template>
  <div id="bookInfo">
    <!-- 头部 -->
    <div class="fixed-top">
      <mt-header title="书籍详情">
        <span @click="$router.back()" slot="left">
          <mt-button icon="back"></mt-button>
        </span>
        <router-link to="/bookcase" slot="right">
          <mt-button>书架</mt-button>
        </router-link>
      </mt-header>
    </div>
  <!-- 书籍头部信息 -->
    <div class="row infoTop">
      <div class="listLeft col-3"><img :src="'../../static/img/'+$store.state.bookInfo['img']" :alt="$store.state.bookInfo['bookName']"></div>
      <div class="listRight col-9">
        <span>{{$store.state.bookInfo['bookName']}}</span>
        <p class="bookxi">作者：{{$store.state.bookInfo['writer']}}</p>
        <p class="bookxi">类型：{{$store.state.bookInfo['type']}}</p>
        <p class="bookxi">状态：{{$store.state.bookInfo['status']}}</p>
      </div>
    </div>
    <!-- 中间信息 -->
    <div class="infoCenter">
      <div>asdfdsf</div>
      <div class="bookText">
        <b class="infoB">简介</b>
        <p class="text-wrap" v-html="$store.state.bookInfo['text']"></p>
      </div>
      <div class="bookPage">
        <b class="infoB">目录</b>
        <p></p>
      </div>
      <!-- 书籍评论 -->
      <div class="bookComment">
        <div class="pt-2 pb-2 d-flex justify-content-between">
          <h5>评论</h5>
          <router-link tag="b" :to="'/comment?='+$route.query.bookId" style="color:darkred">写书评</router-link>
        </div>
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
        <div class="commentBottom">
          <router-link :to="'/comment?='+$route.query.bookId">
            <span>更多评论</span>
          </router-link>
        </div>
      </div>
      <!-- 作者更多-->
      <div class="writerMore">
        <b class="infoB">{{$store.state.bookInfo['writer']}} 还写过</b>
        <div class="mallContainer">
            <div class="flex flex-column">
              <router-link tag="div" :to="'/bookinfo?bookId='+item['bookId']" class="mallContainerList" v-for="(item,index) in nameBookList" :key="index">
                <img :src="'../../../static/img/'+item['img']" :alt="item['bookName']">
                <span>{{item['bookName']}}</span>
              </router-link>
            </div>
        </div>
      </div>
      <!-- 同类推荐 -->
      <div>
        <b class="infoB">同类推荐</b>
      </div>
    </div>
    <!-- 底部信息 -->
    <div class="fixed-bottom">
      <div class="infoBottom">
        <div @click="addBookCase">加入书架</div>
        <div style="background-color: #e26e6e;color: #fff">立即阅读</div>
        <div>全本缓存</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BookComment from "./BookComment";
    export default {
      data(){
        return{
          dianZ:true,
          nameBook:'',
          nameBookList:[],
          typeBook:''
        }
      },
      components:{
        BookComment
      },
      mounted() {
        const bookId=this.$route.query.bookId
        this.$store.dispatch('getBookInfo',{bookId})
        this.nameBook=this.$store.state.bookInfo.writer
      },
      watch:{
        $route:{
          handler(){
            const bookId=this.$route.query.bookId
            this.$store.dispatch('getBookInfo',{bookId})
          }
        }
      },
      methods:{
        addBookCase(){
          this.$store.state.bookCase.unshift({
            name:this.$store.state.bookInfo['bookName'],
            settime:"2020/03/09 10:03:30",
            update:"第一千一一章 大结局",
            url:this.$store.state.bookInfo['img'],
            bookId: this.$store.state.bookInfo['bookId']
          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  padding-top 45px
  padding-bottom 46px
  .infoB
    color #666
  .infoTop
    background-color #f3f3f3
    padding 20px 10px
    .listLeft
      padding-right 0px
      img
        width 92%
    .listRight
      .bookxi
        margin 5px 0
        font-size 0.8em
        color #666
  .infoCenter
    padding 0 7px
    .writerMore
      border-bottom 5px solid #f3f3f3
    .bookText
      border-top 4px solid #f3f3f3
      padding 5px 0
      p
        font-size 0.8em
        color #999
    .bookPage
      border-top 4px solid #f3f3f3
  .infoBottom
    border-top 1px solid #f3f3f3
    background-color #fff
    div
      display inline-block
      text-align center
      font-size 0.8em
      width 32%
      height 45px
      line-height 45px
  .bookComment
    border-top 5px solid #f3f3f3
    .CommentFont
      font-size 0.8em
      padding-bottom 6px
      color #777
    .commentBottom
      text-align center
      background-color #ffffff
      color blue
      padding 5px 0
      font-size 0.9em
      border-bottom 5px solid #f3f3f3
  .mallContainer
    width 100%
    .mallContainerList
      width 33%
      float left
      padding 5px 10px
      text-align center
      img
        width 100%
        border-radius 5%
      span
        font-size 0.8em
        color #666
</style>
