<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动 -->
        <!-- 过度动画 -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 二级 三级分类 -->
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
/**
 * 全部引入lodash
 *  import _ from 'lodash'
 *  console.log(_);
 */
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      show: true,
    };
  },
  //组件挂载完毕：可以向服务器发请求
  mounted() {
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    //右侧需要的式一个函数，当使用这个计算属性的时候，右侧的函数会立即执行一次
    //注入一个参数state，其实即为大仓库中的数据
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList.slice(0, 16);
      },
    }),
  },
  methods: {
    /* 鼠标移入事件，让商品分类进行展示 */
    enterShow() {
      this.show = true;
    },
    /* 鼠标进入修改响应式数据currentIndex属性 没有做节流操作 */
    //index：鼠标移入上某一个一级分类的元素的索引值

    //    changeIndex(index) {
    //   this.currentIndex = index;
    //     console.log(index);
    // },
    // throttle回调函数别用箭头函数，可能会出现上下文this的问题
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    /* 鼠标进入修改响应式数据currentIndex属性 当鼠标事件离开的时候，让商品分类进行隐藏*/
    leaveIndex() {
      //index：鼠标移入上某一个一级分类的元素的索引值
      this.currentIndex = -1;
      if (this.$route.path == "/Search") {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    goSearch(event) {
      /*最好的解决方式 编程式导航+事件委派  */
      //获取事件的元素
      let element = event.target;
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      if (categoryname) {
        let location = {
          name: "search",
        };
        //准备路由跳转的参数对象
        let query = {
          categoryName: categoryname,
        };
        //一定式a标签：一级目录
        if (category1id) {
          query.category1id = category1id;
          //一定式a标签：二级目录
        } else if (category2id) {
          query.category2id = category2id;
          //一定式a标签：三级目录
        } else {
          query.category3id = category3id;
        }
        //整理完参数
        //动态给loaction配置对象添加query属性
        /*   location.query = query;
                this.$router.push(location); */
        //判断：如果路由跳转的时候，带有params，也要带过去
        if (this.$route.params) {
          location.params = this.$route.params;
          location.query = query;
          this.$router.push(location);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //     .item-list {
          //         display: block;
          //     }
          // }
        }

        .cur {
          background: skyblue;
        }

        //          样式解决
        //         .item:hover {
        //             background: skyblue;
        //         }
      }
    }

    .sort-enter {
      height: 0px;
    }

    .sort-enter-to {
      height: 461px;
    }

    .sort-enter-to-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
