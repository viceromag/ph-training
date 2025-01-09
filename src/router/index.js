import { createRouter, createWebHistory } from 'vue-router'
import Project21 from '../views/Project21.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Project21
    },
    {
      path: '/project21',
      name: 'project21',
      component: () => import('../views/Project21.vue')
    },
    {
      path: '/debriefs',
      name: 'debriefs',
      component: () => import('../views/Debriefs.vue')
    }
  ]
})

export default router
