<template>
    <div id="confirm" class="confirm">
        <!-- 头部 -->
        <div class="header border-bottom">
            <img src="../../assets/images/confirm.png" alt="">
            <div class="header-main">
                <div class="header-main-top">
                    <span>未确认</span>
                    <i>倒计时：10：00</i>
                </div>
                <p>导游正在查看您的订单信息，核实没问题后，接受订单即刻出发旅行</p>
            </div>
        </div>

        <!-- 行程信息 -->
        <div class="travel-title border-bottom item">行程信息</div>
        <div class="desc-travel border-bottom">
            <p class="title">故宫城墙一日游</p>
            <p class="line">路线：从故宫正门出发，沿着XX到正阳门，沿途带您领略不一样的故宫建筑文化...</p>
            <p class="time">出发时间：2017年6月6日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:30-12:30</p>
            <p class="num">人数：5人</p>
        </div>

        <!-- 交易信息 -->
        <div class="travel-title border-bottom item">交易信息</div>
        <div class="desc-change border-bottom">
            <p>
                <span>导游费：</span>
                <i>￥500</i>
            </p>
            <p>
                <span>预订人：</span>
                <i>朱自清</i>
            </p>
            <p>
                <span>预订人电话：</span>
                <i>13797071376</i>
            </p>
        </div>

        <!-- 按钮 -->
        <tabbar>
            <tabbar-item><span slot="label">确认订单</span></tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem} from 'vux'
export default {
    name: 'confirm',

    data () {
        return {
            config: vm.config,       // 配置
        }
    },

    components: {
        Tabbar,
        TabbarItem,
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
        padding: 25px 22px 20px 15px
        display: flex
        justify-content: space-between
        img 
            width: 28px
            height: 28px
            margin-right: 8px
        .header-main
            flex: 1
            .header-main-top
                display: flex
                justify-content: space-between
                font-size: 18px
                color: #333
                height: 18px
                line-height: 18px
                i 
                    font-style: normal
                    font-size: 15px
                    color: #5d668c
            p 
                font-size: 15px
                color: #666
                margin-top: 15px

    .item
        height: 40px
        line-height: 40px
        padding-left: 24px
        font-size: 18px
        color: #000
        position: relative
        &:before
            content: ''
            position: absolute
            left: 14px
            top: 50%
            transform: translateY(-50%)
            display: inline-block
            width: 3px
            height: 18px
            background: #03ca9d
    .desc-travel
        font-size: 14px
        color: #333
        padding: 10px 24px 8px
        p 
            line-height: 24px
        .time
            margin-top: 24px 
    .desc-change
        padding: 5px 24px
        p 
            height: 30px
            line-height: 30px
            display: flex
            font-size: 15px
            color: #666
            span,i
                display: inline-block
                width: 50%
            span
                text-align: left
            i 
                font-style: normal
                text-align: right 
</style>
<style lang="sass">
.confirm .vux-tabbar-simple .weui-tabbar__label
    background: #03ca9d
    color: #fff 
    font-size: 14px
.confirm .vux-tabbar-simple .weui-tabbar__label
    width: 93.3%
    margin: 0 auto
    border-radius: 6px
    height: 35px
    line-height: 35px
.confirm .weui-tabbar__item.vux-tabbar-simple
    background: #fff
.confirm .weui-tabbar:before
    border: none
</style>