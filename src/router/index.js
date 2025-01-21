import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WritingView from '../views/WritingView.vue'
import MusicView from '@/views/MusicView.vue'
import LoginView from '@/views/LoginView.vue'
import SubmitView from '@/views/SubmitView.vue'
import axios from '@/services/axios'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/writing', name: 'writing', component: WritingView },
  { path: '/music', name: 'music', component: MusicView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/submit', name: 'submit', component: SubmitView, meta: { requireAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('authToken')

  if (to.meta.requireAuth) {
    if (!token) {
      next({ path: '/login', query: { redirect: to.fullPath } })
      return
    }
  }

  next()
})

export default router
