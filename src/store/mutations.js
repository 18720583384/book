import {
  BOOKHOT,
  DELETEBOOKHOT,
  BOOKCASE,
  CLASSIFY,
  BOOKLIST,
  BOOKINFO,
  SWIPERIMG,
  BOOKMALL,
  BOOKCOMMENT,
} from './mutation-types'
export default {
  [BOOKHOT](state,{bookHot}){
    state.bookHot=bookHot
  },
  [DELETEBOOKHOT](state){
    state.bookHot.history=[]
  },
  [BOOKCASE](state,{bookCase}){
    state.bookCase=bookCase
  },
  [CLASSIFY](state,{classify}){
    state.classify=classify
  },
  [BOOKLIST](state,{bookList}){
    state.bookList=bookList
  },
  [BOOKINFO](state,{bookInfo}){
    state.bookInfo=bookInfo
  },
  [SWIPERIMG](state,{swiperImg}){
    state.swiperImg=swiperImg
  },
  [BOOKMALL](state,{bookMall}){
    state.bookMall=bookMall
  },
  [BOOKCOMMENT](state,{bookComment}){
    state.bookComment=bookComment
  },
}
