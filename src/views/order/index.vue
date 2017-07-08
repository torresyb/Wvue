<template>
    <view-box ref="viewBox" body-padding-bottom="55px">
        <div class="orderList bg-gray">
            <sticky scrollBox="vux_view_box_body" :offset="46">
                <tab :line-width=2 active-color='#04be02'>
                    <tab-item selected @on-item-click = 'itemClickHandle'>
                        待确认
                    </tab-item>
                    <tab-item @on-item-click = 'itemClickHandle'>
                        已确认
                    </tab-item>
                </tab>
            </sticky>
             <scroller lock-x scrollbar-y @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
                <div class="wx-box">
                    <div class="wx-item" v-for = '(item, index) in orderList' :key="index">
                        <div class="tab-swiper vux-center">
                            <p class="wx-title">{{item.des}}</p>
                            <p class="wx-right wx-green">{{item.status}}</p>
                            <a :href="item.url" class="weui-media-box weui-media-box_appmsg">
                                <div class="weui-media-box__hd">
                                    <img :src="item.src" alt="">
                                </div>
                                <div class="weui-media-box__bd">
                                    <h4>浏览时间：{{item.time}}</h4>
                                    <p>游客人数：{{item.num}}人</p>
                                    <p>订单金额：￥{{item.money}}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <load-more :tip="正在加载"></load-more>
                </div>
            </scroller>
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
            orderList: [{
                src: 'http://placeholder.qiniudn.com/120x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                num: '4',
                status: '待确认',
                money: '400',
                url: '/'
            },{
                src: 'http://placeholder.qiniudn.com/120x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                status: '已确认',
                num: '3',
                money: '200',
                url: '/'
            },{
                src: 'http://placeholder.qiniudn.com/120x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                num: '4',
                status: '待确认',
                money: '400',
                url: '/'
            },{
                src: 'http://placeholder.qiniudn.com/120x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                status: '已确认',
                num: '3',
                money: '200',
                url: '/'
            },{
                src: 'http://placeholder.qiniudn.com/120x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                status: '已确认',
                num: '3',
                money: '200',
                url: '/'
            }]
        }
    },

    components: {
        WxFooter,
        Tab,
        TabItem,
        Sticky,
        Divider,
        XButton,
        Swiper,
        SwiperItem,
        Card,
        Panel,
        ViewBox,
        LoadMore,
        Scroller,
        Spinner,
        Group,
        Cell
    },

    created () {
        this.config.title('订单')
    },

    methods: {
        itemClickHandle (val){
            console.log('tab:',val)
        },
        onScrollBottom () {
            console.log('滚动到底部')
        }
    }
}
</script>

<style>
</style>