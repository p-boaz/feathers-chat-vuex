import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Signup from '../views/Signup'
import Chat from '../views/Chat'
import Dashboard from '@/components/Dashboard'
import DashboardHome from '@/views/Dashboard'
import DashboardAnalytics from '@/views/Analytics'

import Interview from '../views/Interview'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: '/', redirect: { name: 'DashboardHome' } },
      { path: 'home', name: 'DashboardHome', component: DashboardHome },
      {
        path: 'analytics',
        name: 'DashboardAnalytics',
        component: DashboardAnalytics
      }
    ]
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/chat', name: 'Chat', component: Chat },
  { path: '/interview', name: 'Interview', component: Interview },
  { path: '/login', name: 'Login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
