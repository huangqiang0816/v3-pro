import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: '/dashboard',
    component: () => import('@/pages/layout/index.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import('@/pages/dashboard.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/login-main.vue')
  }]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});


export default router
