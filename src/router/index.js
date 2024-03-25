// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/index',
    redirect: '/',
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layouts/Test.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Index.vue'),
      },
      {
        path: '/temperature',
        name: 'Temperature',
        component: () => import('@/views/Temperature.vue'),
      },
      {
        path: '/umidita',
        name: 'Umidita',
        component: () => import('@/views/Umidita.vue'),
      },
      {
        path: '/pressione',
        name: 'Pressione',
        component: () => import('@/views/Pressione.vue'),
      },
      {
        path: '/vento',
        name: 'Vento',
        component: () => import('@/views/Vento.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
