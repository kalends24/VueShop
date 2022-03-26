//配置路由信息
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
export default [
  // 重定向，在项目跑起来的时候，立马让它定向到首页
  {
    path: "*",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true },
  },
  {
    path: "/Login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/Register",
    component: Register,
    meta: { show: false },
  },
  {
    name: "search",
    path: "/Search/:keyword?",
    component: Search,
    meta: { show: true },
  },
  {
    name: "detail",
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true },
  },
];
