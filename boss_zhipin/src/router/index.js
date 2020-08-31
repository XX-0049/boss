import Vue from 'vue'
import Router from 'vue-router'
import loginMask from '@/components/loginMask'
import index_jobList from '@/components/index_jobList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginMask',
      component: loginMask
    },
    {
      path: '/index_jobList',
      name: 'index_jobList',
      component: index_jobList
    }
  ]
})