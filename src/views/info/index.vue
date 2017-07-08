<template>
    <div id="info" class="info">
        <!-- banner -->
        <router-link to="/info/rules" class="banner"></router-link>

        <!-- 列表 -->
        <router-link to="/info/identify" class="head-box border-bottom">
            <span>真实头像</span>
            <img src="" alt="">
            <i class="iconfont icon-right"></i>
        </router-link>
        <router-link to="/info/identify" class="desc-box border-bottom">
            <span>真实身份</span>
            <p>未认证</p>
            <i class="iconfont icon-right"></i>
        </router-link>
        
        <!-- 按钮 -->
        <tabbar>
            <tabbar-item><span slot="label">发布行程</span></tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem} from 'vux'

export default {
    name: 'info',

    data () {
        return {
            config: vm.config,                      // 配置
        }
    },
    
    components: {
        Tabbar,
        TabbarItem
    },

    beforeMounted () {
        this.config.title('完善导游信息')
    },

    methods: {
        
    }
}
</script>

<style scoped lang="sass">
.info
    .banner
        display: block
        height: 175px
        background: url(../../assets/images/banner-info.jpg) center center no-repeat
        background-size: cover
    .head-box,.desc-box
        height: 55px
        line-height: 55px
        font-size: 13px
        color: #333
        display: flex
        padding: 0 16px
        span
            flex: 1
        img
            width: 35px
            height: 35px
            border-radius: 50%
            background: red
            margin-top: 10px
        i 
            margin-left: 17px
</style>
<style lang="sass">
.info .vux-tabbar-simple .weui-tabbar__label
    background: #03ca9d
    color: #fff 
    font-size: 14px
</style>