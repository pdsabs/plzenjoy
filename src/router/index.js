import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WritingView from '../views/WritingView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/writing', name: 'writing', component: WritingView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
