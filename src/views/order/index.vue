<template>
    <div class="orderList">
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
        <div class="wx-box" v-for = '(item, index) in orderList' :key="index">
            <div class="tab-swiper vux-center">
                <p class="wx-title">{{item.des}}</p>
                <p class="wx-right">{{item.status}}</p>
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
        <!-- 公用底部 -->
        <wx-footer></wx-footer>
    </div>
</template>

<script>
import WxFooter from '../../components/WxFooter'
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Card, Panel, Drawer  } from 'vux'
export default {
    name: 'orderList',

    data () {
        return {
            orderList: [{
                src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                num: '4',
                status: '待确认',
                money: '400',
                url: '/'
            },{
                src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                status: '已确认',
                num: '3',
                money: '200',
                url: '/'
            },{
                src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                num: '4',
                status: '待确认',
                money: '400',
                url: '/'
            },{
                src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
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
        Panel
    },

    mounted () {
        
    },

    methods: {
        itemClickHandle (val){
            console.log('tab:',val)
        }
    }
}
</script>

<style>
</style>