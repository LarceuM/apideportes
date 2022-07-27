import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Navbar from '@/views/NavbarView.vue'
import Footer from '@/views/FooterView.vue'
import Contacto from '@/components/Contacto.vue'
import Conteo from '@/components/Conteo.vue'
import Carro from '@/components/Carro.vue'


import DetProductoView from '@/views/DetProductoView.vue'
import DetProductoView from '@/views/DetProductoView.vue'




import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: Navbar
  },
  {
    path: '/footer',
    name: 'footer',
    component: Footer
  },
  {
    path: '/conteo',
    name: 'conteo',
    component: Conteo
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
  {
    path: '/carro',
    name: 'carro',
    component: Carro
  },
  {
    path: '/detpro/:id',
    name: 'detpro',
    component: DetProductoView
  },

  {
    path: '/event',
    name: 'event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EventView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },

  {
     path: '*',
     name: 'NotFound',
     component: NotFound
   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
