import Vue from 'vue'
import VueRouter from 'vue-router'
import main_page from '../components/main_page.vue'
import sub_page from '../components/sub_page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: main_page
  },
 
  {
    path: '/main',
    name: 'main_page',
    component: main_page
  },
  {
    path: '/sub',
    name: 'sub_page',
    component: sub_page
  },
]

const router = new VueRouter({
  mode: 'history',//주소에서#을 제거합니다
  base: process.env.BASE_URL,
  routes
})

export default router
