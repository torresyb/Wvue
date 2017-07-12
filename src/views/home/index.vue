<template>
    <div class="home">
        <!-- banner -->
        <div class="banner" @click="goInfo">
            <div>
                <img :src="headImg? headImg: require('../../assets/images/defaultPhoto.png')" alt="">
            </div>
            <p>{{info && info.real_name || '导游'}}</p>
        </div>
        <!-- 列表 -->
        <group>
            <cell title = '我的订单' link="/order" is-link></cell>
            <cell title = '线路管理' link="/user/line" is-link></cell>
            <cell title = '我的钱包' link="/user/money" is-link></cell>
        </group>
        <!-- 公用底部 -->
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
            config: vm.config,             // 配置
            info: {},                      // 数据
            headImg: ''                    // 头像
        }
    },

    components: {
        WxFooter,
        Group,
        Cell
    },
 
    created () {
        this.config.title('我的')
        this.fetchInfo()
    },

    methods: {
        goInfo() {
            this.$router.push('/info')
        },

        fetchInfo() {
            this.$http.post('/guide/login',{oid:'asfasfqe1134'}).then((rst) => {
                if(rst && rst.body){
                    this.info = rst.body.data
                    if(rst.body.data && rst.body.data.resource_path && rst.body.prefix){
                        this.headImg = (rst.body.data.resource_path.indexOf('http') > -1 ? '': rst.body.prefix) + rst.body.data.resource_path
                    }
                }
            },(err) => {
                this.$vux.toast.show({
                    type: 'text',
                    text: err.body.msg
                })
            })
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
        margin: 17px 0 0
</style>
<style lang="sass">
.home .weui-cells
    margin-top: 0
.home .weui-cell:before 
    left: -15px
</style>