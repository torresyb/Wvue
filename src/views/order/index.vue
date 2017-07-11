<template>
    <view-box ref="viewBox" body-padding-bottom="55px">
        <div class="orderList bg-gray">
            <sticky scroll-box="vux_view_box_body">
                <tab :line-width='3' active-color='#00ca9d' custom-bar-width="35px">
                    <tab-item selected @on-item-click = 'itemClickHandle'>待确认</tab-item>
                    <tab-item @on-item-click = 'itemClickHandle'>已确认</tab-item>
                </tab>
            </sticky>

            
            <scroller 
                lock-x scrollbar-y 
                @on-scroll-bottom="onScrollBottom" 
                ref="scrollerBottom" 
                class="srcollBox"
                :scroll-bottom-offst="200">
                <!-- <div class="wx-box">
                    <div class="wx-item" v-for = '(item, index) in orderList' :key="index">
                        <div class="tab-swiper vux-center">
                            <a :href="item.status === '待确认' ? item.url: 'javascript:;'">
                                <p class="wx-title">{{item.view_line_content}}</p>
                                <p class="wx-right wx-green">{{['待确认','已确认'][item.book_status-1]}}</p>
                            </a>
                            <a :href="item.status === '待确认' ? item.url: 'javascript:;'" class="weui-media-box weui-media-box_appmsg">
                                <div class="weui-media-box__hd">
                                    <img :src="item.resource_path ? (item.resource_path.indexOf('http')>-1 ? '' : imgOrigin) + item.resource_path : require('../../assets/images/defaultPhoto.png')" alt="">
                                </div>
                                <div class="weui-media-box__bd">
                                    <h4>浏览时间：{{item.visit_date}}</h4>
                                    <p>游客人数：{{item.person_num}}人</p>
                                    <p>订单金额：￥{{item.amount}}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <load-more :tip="正在加载"></load-more>
                </div> -->
                <div class="item" v-for='(item, index) in orderList'>
                    <router-link :to="'/order/confrim?orderNum='+ item.order_num">
                        <h3 class="title">{{item.view_line_content}}</h3>
                        <div class="status">{{['待确认','已确认'][item.book_status - 1]}}</div>
                        <div class="main">
                            <div class="img">
                                <img :src="item.resource_path ? (item.resource_path.indexOf('http')>-1 ? '' : imgOrigin) + item.resource_path : require('../../assets/images/defaultPhoto.png')" alt="">
                            </div>
                            <div class="desc">
                                <h3>浏览时间：{{item.visit_date}}</h3>
                                <p>游客人数：{{item.person_num}}人</p>
                                <i>订单金额：￥{{item.amount}}</i>
                            </div>
                        </div>
                    </router-link>
                </div>
            </scroller>

            <!-- <div class="loadAll" ref="div"></div> -->
            <!-- <load-more :show-loading="false" :tip="暂无数据" background-color="#fbf9fe"></load-more> -->
            <!-- 公用底部 -->
            <wx-footer></wx-footer>
        </div>
    </view-box>
</template>

<script>
import WxFooter from '../../components/WxFooter'
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Card, Panel, ViewBox, LoadMore, Scroller, Spinner, Group, Cell} from 'vux'
export default {
    name: 'orderList',

    data () {
        return {
            config: vm.config,            // 配置
            onFetching: false,
            imgOrigin: '',                // 图片origin
            pageNo: 1,                    // 分页，第几页
            pageSize: 10,                 // 分页，每页数量
            status: 1,                    // 订单状态，1：待确认 
            orderList: [],                // 列表
            lastPage: false,              // 是否为最后一页
            loadText: '',                 // 
        }
    },

    components: {
        WxFooter,Tab,TabItem,Sticky,Divider,XButton,Swiper,SwiperItem,Card,Panel,
        ViewBox,LoadMore,Scroller,Spinner,Group,Cell
    },

    create () {
        this.config.title('订单')
        this.fetchList()
    },

    methods: {
        itemClickHandle (val){
            console.log('tab:',val)
            this.status = val +1
            this.orderList = []
            this.pageNo = 1
            this.fetchList()
        },
        onScrollBottom () {
            console.log('滚动到底部')
            this.pageNo += 1
            this.fetchList()
        },

        fetchList() {
            let loadOnce = false
            if(!loadOnce && !this.lastPage){
                this.$http.get(`/guide/order/list?oid=asfasfqe1134&pageNo=${this.pageNo}&status=${this.status}&pageSize=${this.pageSize}`).then((rst) => {
                    rst.body = {
                        "msg": "success",
                        "data": {
                            "totalRow": 1,//总条数
                            "pageNumber": 1,//当前第几页
                            "lastPage": true,//是否最后一页
                            "firstPage": true,//是否为最后一页
                            "totalPage": 1,//总页数
                            "pageSize": 10,//每页行数
                            "list": [
                                {
                                    "order_num": "2017071021590013411",//订单编号
                                    "book_user_id": 13,//游客ID
                                    "create_time": "2017-07-10 01:02:10",//创建时间
                                    "view_line_content": "故宫西线慢悠悠",//线路内容
                                    "visit_date": "2017-07-12",//出行日期
                                    "visit_time": "09:00",//出行时间
                                    "contact_name": "小小罩",//联系人姓名
                                    "contact_phone": "13184060728",//联系人电话
                                    "resource_path": null,//景点默认图处相对路径
                                    "view_spot_id": null,//景点ID
                                    "person_num": 5,//出行人数
                                    "amount": 300.00,//总费用
                                    "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                    "update_time": "2017-07-10 01:02:10" //上一次更新时间
                                },
                                {
                                    "order_num": "2017071021590013411",//订单编号
                                    "book_user_id": 13,//游客ID
                                    "create_time": "2017-07-10 01:02:10",//创建时间
                                    "view_line_content": "故宫西线慢悠悠",//线路内容
                                    "visit_date": "2017-07-12",//出行日期
                                    "visit_time": "09:00",//出行时间
                                    "contact_name": "小小罩",//联系人姓名
                                    "contact_phone": "13184060728",//联系人电话
                                    "resource_path": null,//景点默认图处相对路径
                                    "view_spot_id": null,//景点ID
                                    "person_num": 5,//出行人数
                                    "amount": 300.00,//总费用
                                    "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                    "update_time": "2017-07-10 01:02:10" //上一次更新时间
                                }
                            ]
                        },
                        "prefix": "http://127.0.0.1:6070/",
                        "res_code": 200
                    }

                    this.orderList = rst.body.list
                    if(rst.body.data && !rst.body.data.list.length){
                        // this.$refs.div.innerHTML = '暂无数据~'
                    }else if(rst.body && rst.body.data && rst.body.data.lastPage && rst.body.data.list.length){
                        // this.$refs.div.innerHTML = '底线已被触碰~'
                        this.lastPage = true
                    }else{
                        this.$refs.div.innerHTML = ''
                    }
                    this.orderList = rst.body.data.list
                    this.pageNo = rst.body.data.pageNumber
                    this.imgOrigin = rst.body.prefix
                    loadOnce = true
                },(err) => {
                    this.$vux.toast.show({
                        text: err.body.msg,
                        type: 'text'
                    })
                }) 
            }
            
        }

    }
}
</script>

<style scoped lang="sass">
.srcollBox
    padding: 0 10px
    .item
        padding: 10px 10px 10px 8px  
        border-radius: 5px
        font-size: 15px
        background: #fff
        margin-top: 20px
        .title
            width: 70%
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            font-weight: 400
        .status
            text-align: right
            color: #00ca9d
        .main
            display: flex
            .img
                width: 155px
                height: 70px
                margin-right: 22px
                position: relative
                overflow: hidden
                img 
                    width: 100%
                    position: absolute
                    left: 0
                    top: 50%
                    transform: translateY(-50%)
            .desc
                flex: 1
                h3
                    font-size: 15px
                p 
                    margin-top: 5px
                    color: #979797
                i 
                    font-style: normal
                    color: #979797
// .loadAll
//     text-align: center
//     position: absolute
//     bottom: 60px
//     left: 0
//     font-size: 12px
//     color: #979797
//     width: 100%
</style>
<style lang="sass">
.orderList .vux-tab
    height: 50px
.orderList .vux-tab-ink-bar
    bottom: 2px
</style>