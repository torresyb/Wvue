<!-- 
    图片懒加载：lazyload
    以后改成 img v-bind:lazy="xxx" 的形式
    用法：
    <Lazyload
        class="imgBox"
        :src="good.image"
        :defaultsrc="require('../../assets/lazyDefault.png')"
    ></Lazyload>
 -->

<template>
    <div class="lazyload">
        <img :src="(/^http/.test(src) ? '' : config.imgOrigin) + src">
    </div>
</template>

<script>
import $ from 'zepto'

export default {
    name: 'lazyload',

    props: ['src','defaultsrc', 'scrollDom'],

    data () {
        return {
            config: vm.config   // 配置
        }
    },

    mounted () {
        this.changeDeaultSrc()
        this.scrollFade()
    },

    methods: {
        // 改变默认背景
        changeDeaultSrc () {
            if (this.defaultsrc)
                $(this.$el).css(
                    'background',
                    'url(' + this.defaultsrc + ') no-repeat center center / cover'
                )
        },

        // 滚动到视口显示图片
        scrollFade () {
            let pageHeight = $(window).height(),
                $firstChild = this.$el.firstChild

            let fn = () => {
                let top = $($firstChild).offset().top
                if (top < pageHeight && !$($firstChild).hasClass('loaded')) {
                    $($firstChild).addClass('loaded')
                }
            }


            $firstChild.onload = fn
            $(this.scrollDom || '.content').on('scroll', fn)
        }
    }
}
</script>

<style scoped lang="sass">
div
    background: #ccc
    font-size: 0
    img
        width: 100%
        opacity: 0
        transition: opacity .5s
        &.loaded
            opacity: 1
</style>
