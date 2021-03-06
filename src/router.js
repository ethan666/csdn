import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import History from './views/History.vue'
import Course from './views/Course.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    }
    // {
    //   path: '/course',
    //   name: 'course',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "course" */ './views/Course.vue')
    // }
  ]
})
