import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import register from '@/components/Register'
import {store} from '@/store/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: register
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = store.getters.loggedIn
  console.log('user', currentUser)

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('hello')
  else next()
})

export default router
