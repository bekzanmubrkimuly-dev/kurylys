import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Login from '../views/Login.vue'   // 🔥 жаңа login беті

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login },

    { path: '/', component: Dashboard, meta: { requiresAuth: true }},
    { path: '/students', component: () => import('../pages/Students.vue'), meta: { requiresAuth: true }},
    { path: '/courses', component: () => import('../pages/Courses.vue'), meta: { requiresAuth: true }},
    { path: '/payments', component: () => import('../pages/Payments.vue'), meta: { requiresAuth: true }},
    { path: '/settings', component: () => import('../pages/Settings.vue'), meta: { requiresAuth: true }},
  ]
})

export default router;

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem("user");

  if (to.meta.requiresAuth && !user) {
    next("/login");
  } else {
    next();
  }
});
