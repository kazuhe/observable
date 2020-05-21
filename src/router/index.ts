import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter) // useでプラグイン使用宣言

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task',
    name: 'Task',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Task.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '../views/Calendar.vue')
  },
  {
    path: '/wiki/:id',
    name: 'Wiki',
    component: () => import(/* webpackChunkName: "about" */ '../views/Wiki.vue')
  }
]

const router = new VueRouter({
  mode: 'history', // URLからハッシュを削除
  base: process.env.BASE_URL, // 全てのアクセスをindex.htmlに集める
  routes
})

export default router
