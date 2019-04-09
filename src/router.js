import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/shou',
      name: 'shou',
      component: () => import('./views/Shou.vue')
    },
    {
      path: '/xiang',
      name: 'xiang',
      component: () => import('./views/xiangqing.vue')
    },
    {
      path: '/duihuang',
      name: 'duihuang',
      component: ()=>import('./views/Duihuang.vue')
    }
  ]
})
