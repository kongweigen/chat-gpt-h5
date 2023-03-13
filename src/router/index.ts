import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: Home
    }
  ]
})

export default router
