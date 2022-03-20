<template>
<div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
            <img :src="carousel.imgUrl" />
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name: 'Carousel',
    props:['list'],
      watch: {
        list: {
            immediate: true,
            handler() {
                /**如果执行handler方法 代表bannerList数据有值了 当前的方法只能保证bannerList有值了 没办法包装v-for是否已经执行
                 * v-for执行完毕才有结构
                 * nextTick：在下次dom更新 循环结束之后执行延迟回调，在修改数据后立即使用这个方法，获取更新后的dom
                 */
                this.$nextTick(() => {
                    var mySwiper = new Swiper(this.$refs.cur, {
                        loop: true, // 循环模式选项

                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },

                        // 如果需要滚动条
                        scrollbar: {
                            el: '.swiper-scrollbar',
                        },
                    })
                })

            }
        }
    }
}
</script>

<style>

</style>
