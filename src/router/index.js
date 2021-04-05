import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./router"
import Nprogress from "nprogress"

Vue.use(VueRouter)
Vue.use(Nprogress) 

let router =  new VueRouter({
    routes
})
// 路由拦截器, 路由之前执行
router.beforeEach( function(to,from,next){
    Nprogress.start();
    document.title = to.meta.title;
    next()
})
//路由之后执行
router.afterEach( function(to,from){
    Nprogress.done()
    console.log(to+from)
})

export default router;