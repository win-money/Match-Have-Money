import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Destination from '../views/Destination.vue'
import Contact from '../views/Contact.vue'
import Privacy from '../views/Privacy.vue'
import Conditions from '../views/Conditions.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/categories', name: 'categories', component: Categories },
  { path: '/destination', name: 'destination', component: Destination },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/privacy', name: 'privacy', component: Privacy },
  { path: '/conditions', name: 'conditions', component: Conditions }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
