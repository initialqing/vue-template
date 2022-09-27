import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('~/views/index.vue'), name: 'Home' },
  {
    path: '/hello/:name',
    component: () => import('~/views/name/index.vue'),
    name: 'Name',
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
