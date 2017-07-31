<template>
    <div id="confirm" class="confirm">
        <!-- 头部 -->
        <div class="header border-bottom">
            <img src="../../assets/images/confirm.png" alt="">
            <div class="header-main">
                <div class="header-main-top">
                    <span>{{['待确认','游客取消','导游取消','确认超时','待付款','支付超时','已付款','已出行完成','有投诉待确认','已退款','待评价','已评价'][init.book_status-1]}}</span>
                    <!-- 订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价 -->
                    <i>{{minute}}{{second}}</i>
                </div>
                <p v-if="init.book_status==5">游客暂未付款，请耐心等待</p>
                <p v-if="init.book_status==1">请尽快确认订单哦</p>
            </div>
        </div>

        <!-- 行程信息 -->
        <div class="travel-title border-bottom item">行程信息</div>
        <div class="desc-travel border-bottom">
            <p class="title">{{init.view_name}}</p>
            <p class="line">路线：{{init.view_line_content}}</p>
            <p class="time">出发时间：{{init.visit_date}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{init.visit_time}}</p>
            <p class="num">人数：{{init.person_num}}人</p>
        </div>

        <!-- 交易信息 -->
        <div class="travel-title border-bottom item">交易信息</div>
        <div class="desc-change border-bottom">
            <p>
                <span>导游费：</span>
                <i>￥{{init.amount}}</i>
            </p>
            <p>
                <span>预订人：</span>
                <i>{{init.contact_name}}</i>
            </p>
            <p>
                <span>预订人电话：</span>
                <i>{{init.contact_phone}}</i>
            </p>
        </div>

        <!-- 按钮 -->
        <tabbar v-if="init.book_status == 1">
            <tabbar-item><span slot="label" @click="confirm">确认订单</span></tabbar-item>
            <tabbar-item><span slot="label" @click="cancel">取消订单</span></tabbar-item>
        </tabbar>

        <tabbar v-else-if="init.book_status == 5">
            <tabbar-item><span slot="label" @click="cancel">取消订单</span></tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem} from 'vux'
export default {
    name: 'confirm',

    data () {
        return {
            config: vm.config,                        // 配置
            orderNum: this.$route.query.orderNum,     // 订单号
            init: {},                                  // 数据
            day:'',
            hour:'',
            minute:'',
            second:'',
            timer: ''
        }
    },

    components: {
        Tabbar,
        TabbarItem
    },

    created () {
        this.config.title('订单号：'+ this.orderNum)
        this.fetchData()
    },

    destroyed() {
        clearInterval(this.timer)
    },

    methods: {
        // 获取用户信息
        fetchData(){
            this.$http.get(`/guide/order/detail?orderNum=${this.orderNum}&oid=test1234`)
            .then((rst) => {
                this.init = rst.body.data
                // 获取倒计时
                if(this.init.book_status === 1 || this.init.book_status === 5){
                    if(rst.body.data.guide_confirm_final_time){
                        let starttime = (rst.body.data.guide_confirm_final_time).replace(new RegExp("-","gm"),"/")
                        let starttimeHaoMiao = (new Date(starttime)).getTime()
                        let timestamp = (new Date()).getTime()
                        this.totolTime = (starttimeHaoMiao - timestamp)/1000
                        this.countdowm(this.totolTime)
                    }
                }
            })
            .catch(err => {
                this.$vux.toast.show({
                    text: err.body.msg,
                    type: 'text'
                })
            })
        },

        // 确认订单
        confirm() {
            this.$http.get(`/guide/order/confirm?orderNum=${this.orderNum}&oid=test1234`)
            .then((rst) => {
                if(rst.body && rst.body.res_code === 200){
                    this.$vux.toast.show({
                        text: '订单确认成功',
                        type: 'text'
                    })
                    this.$router.replace('/order')
                }
            })
            .catch((err) => {
                console.log('err',err)
                this.$vux.toast.show({
                    text: err.body.msg,
                    type: 'text'
                })
            })
        },

        // 取消订单
        cancel() {
            this.$http.get(`/guide/order/cancel?orderNum=${this.orderNum}&oid=test1234`)
            .then((rst) => {
                if(rst.body && rst.body.res_code === 200){
                    this.$vux.toast.show({
                        text: '订单取消成功',
                        type: 'text'
                    })
                    this.$router.replace('#/order')
                }else if(rst.body && rst.body.res_code === 600){
                    this.$vux.toast.show({
                        text: rst.body.msg,
                        type: 'text'
                    })
                    this.$router.replace('/order')
                }
            })
            .catch(err => {
                this.$vux.toast.show({
                    text: err.body.msg,
                    type: 'text'
                })
            })
        },

        countdowm (value){
            this.timer = setInterval(()=>{
                if(value <= 0){
                    clearInterval(this.timer)
                    this.$vux.toast.show({
                        text: '该订单确认已超时',
                        type: 'text'
                    })
                    this.$router.replace('/order')
                }
               
                var days=0,hours=0,minutes=0,seconds=0; //时间默认值
                if(value > 0){
                    days = Math.floor(value / (60 * 60 * 24))
                    hours = Math.floor(value / (60 * 60)) - (days * 24)
                    minutes = Math.floor(value / 60) - (days * 24 * 60) - (hours * 60)
                    seconds = Math.floor(value) - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes* 60)
                }
                if (minutes <= 9) minutes = '0' + minutes
                if (seconds <= 9) seconds = '0' + seconds

                this.day = days + '天'
                this.hour = hours + '时'
                this.minute = minutes + ':'
                this.second = seconds
                value --
            }, 1000)
        }
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