import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/students', component: () => import('../pages/Students.vue') },
    { path: '/courses', component: () => import('../pages/Courses.vue') },
    { path: '/payments', component: () => import('../pages/Payments.vue') },
    { path: '/settings', component: () => import('../pages/Settings.vue') },
  ]
})

export default router;
