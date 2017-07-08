<template>
    <div id="confirm" class="confirm">
        <div class="header">
            <img src="../../assets/images/confirm.png" alt="">
            <div class="header-main">
                <div class="header-main-top">
                    <span>未确认</span>
                    <i>倒计时：10：00</i>
                </div>
                <p>请确认订单信息，合适无误后，即刻开始旅行吧！</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'confirm',

    data () {
        return {
            config: vm.config,       // 配置
        }
    },

    created () {
        this.config.title('订单号：20170707')
    },

    methods: {
        
    }
}
</script>

<style scoped lang="sass">
.confirm
    .header
        padding: 15px
        display: flex
        justify-content: space-between
        img 
            
            margin-right: 5px
        .header-main
            flex: 1
            font-size: 16px
            padding-top: 15px
            .header-main-top
                display: flex
                justify-content: space-between
                i 
                    font-style: normal
            p 
                font-size: 12px
                color: #999
                margin-top: 10px

</style>