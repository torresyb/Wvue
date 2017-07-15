<template>
    <div id="userMoney" class="userMoney">
        <ul>
            <li class="border-bottom">
                <span>余额</span>
                <i>{{total}}</i>
            </li>
            <li class="border-bottom">
                <span>冻结余额</span>
                <i>{{deposit}}</i>
            </li>
            <li class="border-bottom" @click="goDetail">
                <span>收支明细</span>
                <i class="iconfont icon-right"></i>
            </li>
        </ul>
        <h3>提现说明：</h3>
        <p>1.目前提现只支持提现到微信零钱</p>
        <p>2.提现日期固定为每周三，一周仅限一次</p>
        <p>3.若产生交易纠纷，客户投诉，该笔订单的费用会暂时被冻结，等待平台审核通过后方可提现</p>
        <p>4.对提现操作有任何疑问，请在工作日内(09:00-19:00)在公众号留言，会有专人第一时间为您处理</p>
    </div>
</template>

<script>

export default {
    name: 'userMoney',

    data () {
        return {
            config: vm.config,        // 配置
            deposit: null,            // 冻结金额
            total: null,              // 余额
        }
    },

    created () {
        this.config.title('余额')
        this.fetchInfo()
    },

    methods: {
        // 获取用户信息
        fetchInfo(){
            this.$http.get('/user/account/info').then((rst) => {
                this.total = rst.body && rst.body.data && rst.body.data.total_amount
                this.deposit = rst.body && rst.body.data && rst.body.data.deposit_amount
            },(err) => {
                this.$vux.toast.show({
                    text: err.body.msg,
                    type: 'text'
                })
            })
        },

        // 收支明细
        goDetail(){
            this.$router.push('/user/detail')
        }
    }
}
</script>

<style scoped lang="sass">
.userMoney
    ul 
        li 
            height: 45px
            line-height: 45px
            padding: 0 15px 
            display: flex
            justify-content: space-between
            color: #333
            font-size: 14px
        i 
            font-style: normal
            color: #979797
    h3
        margin: 20px 0 10px
        font-weight: 300
        padding: 0 15px
        font-size: 14px
    p 
        padding: 0 15px
        line-height: 26px
        font-size: 13px
</style>