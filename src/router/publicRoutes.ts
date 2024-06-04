import { RouteRecordRaw } from 'vue-router'

const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: '/login',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '玉环人民医院门诊大屏',
    },
  },
]

export default publicRoutes