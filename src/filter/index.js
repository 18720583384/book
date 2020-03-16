import Vue from 'vue'

//过滤 \n --> <br/>
Vue.filter('msgWrap', (msg) => {    // msg 为固定的参数 即是你需要过滤的数据
  return msg.replace(/[\n]/g,'<br/>')
})

/* 通过writer属性值找到相同的对象 */
Vue.filter('passNameBookInfo',(msg)=>{
  return this.$store.state.bookList.filter((value)=>{
    return value.writer==msg
  })
})

/* 通过type属性值找到相同的对象 */
Vue.filter('passTypeBookInfo',(msg)=>{
  return this.$store.state.bookList.filter((value)=>{
    return value.type==msg
  })
})

