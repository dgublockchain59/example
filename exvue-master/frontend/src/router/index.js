import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Users from '@/components/AllUsersPage'
import User from '@/components/UsersPage'

import Monitoring from '@/components/Monitoring'
import LoginComplete from '@/components/LoginComplete'
import Course from '@/components/Course'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'user',
      component: Users
    },
    {
      path: '/user/:id',
      name: 'detail',
      component: User
    },
    {
      path: '/monitoring/:id',
      name: 'monitoring',
      component: Monitoring
    },
    {
      path: '/course/:id',
      name: 'course',
      component: Course
    },
    {
      path: '/userLogin/:id',
      name: 'logincomplete',
      component: LoginComplete
    },
  ]
})
