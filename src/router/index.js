import { createRouter, createWebHistory } from 'vue-router'
import Project14 from '../views/Project14.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Project14
    },
    {
      path: '/project14',
      name: 'project14',
      component: () => import('../views/Project14.vue')
    },
    {
      path: '/project15',
      name: 'project15',
      component: () => import('../views/Project15.vue')
    },
    {
      path: '/project16',
      name: 'project16',
      component: () => import('../views/Project16.vue')
    },
    {
      path: '/project17',
      name: 'project17',
      component: () => import('../views/Project17.vue')
    },
    {
      path: '/project18',
      name: 'project18',
      component: () => import('../views/Project18.vue')
    },
    {
      path: '/debriefs',
      name: 'debriefs',
      component: () => import('../views/Debriefs.vue')
    }
  ]
})

export default router
