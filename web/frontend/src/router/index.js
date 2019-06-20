import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexPage from '@/components/IndexPage'
import LoginPage from '@/components/LoginPage'
import Monitoring from '@/components/Monitoring'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/monitoring/:id',
      name: 'monitoring',
      component: Monitoring
    }
  ]
})