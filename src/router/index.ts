import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/pages/SoftwareActivation/Index.vue'),
  },
  // {
  //   name: 'home',
  //   path: '/home',
  //   component: () => import('@/pages/HomePage/Index.vue'),
  // },
  // {
  //   name: 'activation',
  //   path: '/activation',
  //   component: () => import('@/pages/SoftwareActivation/Index.vue'),
  // },
  {
    name: 'download',
    path: '/download',
    component: () => import('@/pages/SoftwareDownload.vue'),
  },
  // {
  //   name: 'help',
  //   path: '/help',
  //   component: () => import('@/pages/HelpCenter.vue'),
  // },
  // {
  //   name: 'service',
  //   path: '/service',
  //   component: () => import('@/pages/ServiceMonitor.vue'),
  // },
  // {
  //   name: 'kms',
  //   path: '/kms',
  //   redirect: 'http://192.168.100.232:1689',
  // },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
