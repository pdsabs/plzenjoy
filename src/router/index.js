import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WritingView from '../views/WritingView.vue'
import MusicView from '@/views/MusicView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/writing', name: 'writing', component: WritingView },
  { path: '/music', name: 'music', component: MusicView },
  { path: '/login', name: 'login', component: LoginView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
