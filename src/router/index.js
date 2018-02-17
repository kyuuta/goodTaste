import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import("%/HelloWorld"); // 首页

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
