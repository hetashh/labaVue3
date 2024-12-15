import { createRouter, createWebHistory } from 'vue-router'

import UsersPage from '../pages/UsersPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import AuthPage from '../components/Auth.vue'
import MoviePage from '../components/Movie.vue'
import TicketPage from '../components/Ticket.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users-page',
      component: async () => await UsersPage,
    },
    {
      path: '/auth',
      name: 'auth-page',
      component: async () => await AuthPage,
    },
    {
      path: '/movies',
      name: 'movie-page',
      component: async () => await MoviePage,
    },
    {
      path: '/tickets',
      name: 'ticket-page',
      component: async () => await TicketPage,
    },
    { 
      path: '/:pathMatch(.*)*', 
      component: async () => await NotFoundPage 
    },
  ],
})

export default router
