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
    path: '/signup',
    name: 'Signup',
    // component: Signup
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import('../views/Task.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/wiki/:id',
    name: 'Wiki',
    component: () => import('../views/Wiki.vue')
  }
]

const router = new VueRouter({
  mode: 'history', // URLからハッシュを削除
  base: process.env.BASE_URL, // 全てのアクセスをindex.htmlに集める
  routes
})

export default router
