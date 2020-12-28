import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const _import = require('./import-' + process.env.NODE_ENV)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'dashboard' },
    component: _import('layout/index'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: _import('dashboard')
      },
      {
        path: '/details',
        name: 'details',
        component: _import('details')
      }
    ]
  }
]
// 基础路由配置
const globalRoutes: Array<RouteRecordRaw> = [
  {
    path: '/404',
    component: _import('404')
  },
  {
    path: '/login',
    component: _import('login')
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: globalRoutes.concat(routes)
})
