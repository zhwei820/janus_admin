import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Container from './components/Container.vue'
import storage from './utils/storage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      beforeEnter: (to, from, next) => {
        if (!storage.getItem(storage.KEYS.tokenName)) {
          next({
            name: 'Login',
          })
          return
        }
        next()
      },
      path: '/',
      component: Container,
      redirect: { name: 'services' },
      children: [
        {
          name: 'services',
          path: 'services',
          component: () => import('./views/services/ServiceList.vue'),
        },
        ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
