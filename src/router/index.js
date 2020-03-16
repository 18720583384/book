import Vue from 'vue'
import Router from 'vue-router'

import BookCase from '../components/BookCase/BookCase'
import FreeZone from "../components/BookCase/FreeZone"; //免费专区
import BookMall from "../components/BookMall/BookMall";
import Classify from "../components/Classify/Classify";
import ClassifyCount from "../components/Classify/ClassifyCount";
import BookList from "../components/Book/BookList";
import Mine from "../components/Mine/Mine";
import Search from "../components/Search/Search";
import BookInfo from "../components/Book/BookInfo";
import BookComment from "../components/Book/BookComment";
import Login from "../components/Login/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/bookmall'
    },
    {
      path:'/bookcase',//书架
      component:BookCase
    },
    {
      path:'/bookmall',//书城
      component:BookMall
    },
    {
      path:'/classify',//分类
      component:Classify,
      children:[
        {
          path:':id',
          component:ClassifyCount,
        },
        {
          path: '/classify',
          redirect:'/classify/0'
        }
      ]
    },
    {
      path:'/classify/:id/booklist',
      component:BookList
    },
    {
      path:'/mine',//我的
      component:Mine
    },
    {
      path:'/comment',  //评论
      component:BookComment
    },
    {
      path:'/freezone',//免费专区
      component:FreeZone
    },
    {
      path:'/search',//搜索
      component:Search
    },
    {
      path:'/bookinfo',//书籍详情
      component:BookInfo
    },
    {
      path:'/login', //登录界面
      component:Login
    }
  ]
})
