<template>
    <div class="home">
        <div class="banner" @click="goInfo">
            <img src="../../assets/images/auth.png" alt="">
            <p>艾子豪</p>
        </div>
        <group>
            <cell title = '我的订单' link="/order" is-link></cell>
            <cell title = '线路管理' link="/user/line" is-link></cell>
            <!-- <cell title = '帮助支持' link="/user/support" is-link></cell> -->
            <cell title = '我的钱包' link="/user/money" is-link></cell>
        </group>

        <wx-footer></wx-footer>
    </div>
</template>

<script>
import WxFooter from '../../components/WxFooter'
import { Cell, Group } from 'vux'
export default {
    name: 'home',

    data () {
        return {
            config: vm.config,                      // 配置
        }
    },

    components: {
        WxFooter,
        Group,
        Cell
    },

    
    created () {
        this.config.title('我的')
    },

    methods: {
        goInfo() {
            this.$router.push('/info')
        }
    }
}
</script>

<style scoped lang="sass">
// banner
.banner
    height: 125px
    background: url(../../assets/images/banner.jpg) center center no-repeat
    background-size: cover
    text-align: center
    color: #fff 
    font-size: 13px
    img
        width: 72px
        height: 72px
        border-radius: 50%
        display: inline
        margin: 17px 0 12px
</style>
<style lang="sass">
.home .weui-cells
    margin-top: 0
</style>