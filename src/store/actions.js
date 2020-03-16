import axios from 'axios'
import {
  BOOKHOT,
  DELETEBOOKHOT,
  BOOKCASE,
  CLASSIFY,
  BOOKLIST,
  BOOKINFO,
  SWIPERIMG,
  BOOKMALL, BOOKCOMMENT
} from './mutation-types'
export default {
  //接收搜索界面信息
  getBookHot({commit}){
    axios.get('/bookhot').then((result)=>{
      const bookHot=result.data
      commit(BOOKHOT,{bookHot})
    })
  },
  //删除历史搜索信息
  deleteBookHot({commit}){
    commit(DELETEBOOKHOT)
  },
  //接收书架信息
  getBookCase({commit}){
    axios.get('/bookcase').then(result=>{
      const bookCase=result.data.bookCase
      commit(BOOKCASE,{bookCase})
    })
  },
  //接收分类信息
  getClassify({commit}){
    axios.get('/classify').then(result=>{
      const classify=result.data
      commit(CLASSIFY,{classify})
    })
  },
  //接收数据信息
  getBookList({commit}){
    axios.get('/book').then(result=>{
      const bookList=result.data['books']
      commit(BOOKLIST,{bookList})
    })
  },
  getBookInfo({commit},{bookId}) {
    axios.get('/book').then(result=>{
      const bookInfo = result.data['books'].filter(value => value.bookId==bookId)[0]
      commit(BOOKINFO, {bookInfo})
    })
  },
  getSwiperImg({commit}) {
    axios.get('/swiperimg').then(result=>{
      const swiperImg = result.data['swiperImg']
      commit(SWIPERIMG, {swiperImg})
    })
  },
  getBookMall({commit}) {
    axios.get('/bookmall').then(result=>{
      const bookMall = result.data.classify[0]
      commit(BOOKMALL, {bookMall})
    })
  },
  getBookComment({commit},{bookId}){
    axios.get('/bookComment').then(result=>{
      const bookComment = result.data['comment'].filter(value => value.bookId==bookId)[0]
      commit(BOOKCOMMENT,{bookComment})
    })
  },
  deleteBookCase({commit},{bookId,state}){
    const bookCase=state.bookCase.splice(state.bookCase.findIndex(item => item.bookId === bookId), 1)
    commit(BOOKCASE,{bookCase})
  }
}
