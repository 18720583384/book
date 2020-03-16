<template>
  <div class="bookList">
    <!-- 头部 -->
    <div  class="fixed-top">
      <mt-header title="书籍列表">
        <div @click="$router.back()" slot="left">
          <mt-button icon="back"></mt-button>
        </div>
      </mt-header>
    </div>
  <!-- 书籍列表部分 -->
    <router-link tag="div" :to="'/bookinfo?bookId='+item['bookId']" class="row" v-for="(item,index) in $store.state.bookList" :key="index">
      <div class="listLeft col-3"><img :src="'../../static/img/'+item['img']" :alt="item['bookName']"></div>
      <div class="listRight col-9">
        <span>{{item['bookName']}}</span>
        <p class="bookxi">{{item['type']}} | {{item['writer']}}</p>
        <p class="bookxin">{{item['info']}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
    export default {
        mounted() {
          this.$store.dispatch('getBookList')
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  padding-top 45px
  .bookList
    background-color #fff
    border-bottom 1px solid #f3f3f3
    padding 5px
    .listLeft
      padding-right 0px
      img
        width 92%
    .listRight
      padding 10px 0
      .bookxi
        margin 5px 0
        font-size 0.8em
        color #666
      .bookxin
        font-size 0.8em
        color #999

</style>
