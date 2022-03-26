//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import routes from './routes'

let originPush= VueRouter.prototype.push
let originReplace= VueRouter.prototype.replace

//重写push|replace
//第一个参数：告诉原来push方法，你往哪里跳转(传递那些参数)
//第二个参数：成功的回调
//第三个参数: 失败的回调
//call和apply的区别
//相同点：都可以调用函数一次，都可以篡改函数的上下文
//不同点:call与apply传递参数，call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push=function(location,resole,reject){
    if(resole && reject){
        originPush.call(this,location,resole,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace=function(location,resole,reject){
    if(resole && reject){
        originReplace.call(this,location,resole,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
//配置路由
export default new VueRouter({
    routes,
    /**滚动行为 */
    scrollBehavior (to, from, savedPosition) {
        return { y: 0 }
      }

})