import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

Vue.use(VueRouter) // useでプラグイン使用宣言

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue'),
  },
]

const router = new VueRouter({
  mode: 'history', // URLからハッシュを削除
  base: process.env.BASE_URL, // 全てのアクセスをindex.htmlに集める
  routes,
})

// beforeEachで遷移前に実行(to(現在遷移しようとしている対象), from(遷移元ルートの情報), next)
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   if (requiresAuth) {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         next()
//       } else {
//         next({
//           path: '/signin',
//           query: { redirect: to.fullPath }
//         })
//       }
//     })
//   } else {
//     next()
//   }
// });

export default router
