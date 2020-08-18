import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Error404 from './components/404.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/viz/:vizId',
      name: 'viz',
      component: () => import('./views/Viz.vue')
    },
    {
      path: '/*',
      name: '404',
      component: Error404
    }
  ]
})
