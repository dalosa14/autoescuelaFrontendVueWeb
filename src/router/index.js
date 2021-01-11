import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Autoescuela from '../views/Autoescuela.vue'
import Usuario from '../views/Usuario.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/Autoescuelas',
        name: 'Autoescuelas',
        component: Autoescuela
    }, {
        path: '/Inicio',
        name: 'Inicio',
        component: Usuario
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router