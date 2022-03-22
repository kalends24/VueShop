import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store';
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
//轮播图组件
import Carousel from '@/components/Carousel'
//引入mockserve数据
import '@/mock/mockServe'
//引入swpier的样式
import "swiper/css/swiper.css"
//第一个参数:全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.config.productionTip = false
new Vue({
  beforeCreate() {
    Vue.prototype.$bus=this
  },
  router,
  store, //引入
  render: h => h(App),
 
}).$mount('#app')
