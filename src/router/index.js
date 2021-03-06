import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('@/views/Login')

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
