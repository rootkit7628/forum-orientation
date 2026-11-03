import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, saved) => saved ?? { top: 0 },
  routes: [
    { path: '/', name: 'home', component: () => import('./views/HomeView.vue') },
    { path: '/plan', name: 'plan', component: () => import('./views/PlanView.vue') },
    { path: '/stands/:id', name: 'stand', component: () => import('./views/StandView.vue') },
    { path: '/metiers', name: 'jobs', component: () => import('./views/JobsView.vue') },
    { path: '/metiers/:id', name: 'job', component: () => import('./views/JobView.vue') },
    { path: '/test', name: 'test', component: () => import('./views/TestView.vue') },
    { path: '/conferences', name: 'talks', component: () => import('./views/TalksView.vue') },
    { path: '/:rest(.*)*', name: 'not-found', component: () => import('./views/NotFoundView.vue') },
  ],
})
