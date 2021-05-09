import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '购物优惠'
      },
      component: () => import('@/views/index.vue')
    },
    {
      path: '/takeout',
      name: 'takeout',
      meta: {
        title: '外卖优惠'
      },
      component: () => import('@/views/takeout.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: '关于作者'
      },
      component: () => import('@/views/contact.vue')
    }
  ]
})

export default router
