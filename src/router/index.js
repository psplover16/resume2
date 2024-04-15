import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/testslot',
      name: 'testslot',
      component: HomeView
    },
    {
      path: '/',
      name: '首頁',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/index.vue')
    },
    {
      path: '/abousMe',
      name: '自傳',
      component: () => import('../views/abousMe.vue')
    },
    {
      path: '/web',
      name: '網頁',
      component: () => import('../views/web.vue')
    }
    ,
    {
      path: '/game',
      name: '遊戲',
      component: () => import('../views/game.vue')
    }
    
  ]
})

export default router
