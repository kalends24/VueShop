<template>
  <div id="app">
    <Header />
    <!--路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    /* 派发一个action|| 获取商品分类的三级列表的数据 只会请求一次 在组件中使用 组件切换就会调用一次 优化服务器性能 */
    this.$store.dispatch("categoryList");
  },
};
</script>

<style >
</style>
