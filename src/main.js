// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/* 引入路由 */
import router from './router'
/* 引入vuex */
import store from './store'
/* 引入过滤器 */
import './filter/index'
/* 引入Mock数据 */
import './Mock/mockServer'
/* 引入Mint-ui */
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.min.css'
import '../node_modules/mint-ui/lib/index.js'
Vue.use(Mint)
/* 按需引入部分组件 */
import { Header,Navbar,TabItem,Swipe,SwipeItem,Cell } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
