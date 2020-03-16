<template>
    <div id="bookcase">
      <div class="fixed-top" >
        <mt-header title="书 架" style="background-color: #f3f3f3;color: black">
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      </div>
      <router-link to="freezone">免费专区</router-link>

      <div class="bookList" v-for="(item,index) in $store.state.bookCase" :key="index">
        <div class="row">
          <div class="listLeft col-3"><img :src="'../../../static/img/'+item.url" :alt="item.name"></div>
          <div class="listRight col-7">
            <span>{{item.name}}</span>
            <p class="bookxin">最新：{{item.update}}</p>
            <p class="bookxin">{{item.settime}}</p>
          </div>
          <table class="col-2" @click="deleteBookCase(item.bookId)">
            <tr>
              <td><span class="align-middle">删除</span></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
  import SearchTop from "../Search/SearchTop";
    export default {
      data(){
        return{
          tt:undefined
        }
      },
      components:{
          SearchTop
      },
      mounted() {
          this.$store.dispatch('getBookCase')
      },
      methods:{
        deleteBookCase(value){
          this.$store.state.bookCase.splice(this.$store.state.bookCase.findIndex(item => item.bookId==value), 1)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  padding-top 45px
  #bookcase
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
        .bookxin
          margin 5px 0
          font-size 0.8em
          color #999
      table
        color #aaa
        background-color #f3f3f3
        height 98px
        td
          text-align center
</style>
