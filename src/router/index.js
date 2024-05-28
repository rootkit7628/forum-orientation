import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/stand',
      name: 'stand',
      component: () => import('@/views/StandView.vue')
    },
    {
      path: '/conference',
      name: 'conference',
      component: () => import('@/views/ConferenceView.vue')
    },
    {
      path: '/fiche-metier',
      name: 'fiche-metier',
      component: () => import('@/views/FicheMetierView.vue')
    },
    {
      path: '/kavio-test',
      name: 'kavio-test',
      component: () => import('@/views/KavioTestView.vue')
    }
  ]
})

export default router
