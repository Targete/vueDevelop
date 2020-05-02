import vue from 'vue'
import Router from 'vue-router'

vue.use(Router)

const routes = [
    {
        path:'/',
        component:() => import("@/view/HomePage")
    }
]
const router = new Router({
    routes
})

export default router