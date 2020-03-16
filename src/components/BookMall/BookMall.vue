<template>
    <div id="bookmall">
      <SearchTop>
        <span slot="right"><i class="iconfont icon-sousuo"></i></span>
      </SearchTop>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">精选</mt-tab-item>
        <mt-tab-item id="2">男生</mt-tab-item>
        <mt-tab-item id="3">女生</mt-tab-item>
        <mt-tab-item id="4">出版</mt-tab-item>
        <mt-tab-item id="5">包月</mt-tab-item>
        <mt-tab-item id="6">新书</mt-tab-item>
      </mt-navbar>
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="(item,index) in $store.state.swiperImg" :key="index"><img width="100%" :src="`../../../static/img/`+item" :alt="index"></mt-swipe-item>
      </mt-swipe>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="mallContainer">
            <div v-for="(item,index) in $store.state.bookMall" :key="index">
              <h5>{{index}}</h5>
              <div class="flex flex-column">
                <router-link tag="div" :to="'/bookinfo?bookId='+value['bookId']" class="mallContainerList" v-for="(value,bbt) in item" :key="bbt">
                  <img :src="'../../../static/img/'+value['img']" :alt="value['bookName']">
                  <span>{{value['bookName']}}</span>
                </router-link>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'content ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'content ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell v-for="n in 6" :title="'content ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell v-for="n in 6" :title="'content ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="6">
          <mt-cell v-for="n in 6" :title="'content ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>

<script>
  import SearchTop from "../Search/SearchTop";
    export default {
        data(){
          return{
            selected:'1'
          }
        },
      components:{
        SearchTop
      },
      mounted() {
          this.$store.dispatch('getSwiperImg')
          this.$store.dispatch('getBookMall')
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#bookmall
  .is-selected
    color #e54534
  .mint-swipe
    width 100%
    height 200px
    background-color #f3f3f3
  .mallContainer
    width 100%
    h5
      padding-left 10px
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
