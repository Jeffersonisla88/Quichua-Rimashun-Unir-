import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cuentos from '../views/Cuentos.vue'
import Test from '../views/Test.vue'
import Temario from '../views/Temario.vue'


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/temario', name: 'temario', component: Temario, alias: '/about', },
  { path: '/cuentos', name: 'cuentos', component: Cuentos },
  { path: '/test',    name: 'test',    component: Test }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
