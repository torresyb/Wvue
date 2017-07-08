<template>
    <view-box ref="viewBox" body-padding-bottom="55px">
        <div class="lineList bg-gray">
            <sticky scrollBox="vux_view_box_body" :offset="46">
                <tab :line-width=2 active-color='#04be02'>
                    <tab-item selected @on-item-click = 'itemClickHandle'>
                        通过审核
                    </tab-item>
                    <tab-item @on-item-click = 'itemClickHandle'>
                        审核中
                    </tab-item>
                    <tab-item @on-item-click = 'itemClickHandle'>
                        未通过审核
                    </tab-item>
                </tab>
            </sticky>
             <scroller lock-x scrollbar-y @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
                <div class="wx-box">
                    <div class="wx-item" v-for = '(item, index) in lineList' :key="index">
                        <div class="tab-swiper vux-center">
                            <p class="wx-title">{{item.des}}</p>
                            <p class="wx-right wx-red">{{item.status}}</p>
                            <a :href="item.url" class="weui-media-box weui-media-box_appmsg">
                                <div class="weui-media-box__hd">
                                    <img :src="item.src" alt="">
                                </div>
                                <div class="weui-media-box__bd wx-right">
                                    <x-button plain type="primary" mini>下线发布</x-button>
                                    <x-button mini type="primary" style="margin-left:5px" @click="edit()" action-type="button">修改线路</x-button>
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
import { Tab, TabItem,  Divider, XButton, Swiper, SwiperItem, Card, Panel, ViewBox, LoadMore, Scroller, Spinner, Group, Cell, Flexbox, FlexboxItem} from 'vux'
export default {
    name: 'lineList',

    data () {
        return {
            config: vm.config,            // 配置
            onFetching: false,
            lineList: [{
                src: 'http://placeholder.qiniudn.com/120x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                status: '通过审核',
                url: '/'
            },{
                src: 'http://placeholder.qiniudn.com/120x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                status: '未通过审核',
                url: '/'
            },{
                src: 'http://placeholder.qiniudn.com/120x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                status: '通过审核',
                url: '/'
            },{
                src: 'http://placeholder.qiniudn.com/120x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                status: '未通过审核',
                url: '/'
            },{
                src: 'http://placeholder.qiniudn.com/120x60/3cc51f/ffffff',
                time: '2017年6月6日',
                des: '故宫城墙一日游，城墙一日游，让你见证不一样的历史让你见证不一样的历史',
                status: '未通过审核',
                url: '/'
            }]
        }
    },

    components: {
        WxFooter,
        Tab,
        TabItem,        
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
        Cell,
        Flexbox, FlexboxItem
    },

    created () {
        this.config.title('线路管理')
    },

    methods: {
        itemClickHandle (val){
            console.log('tab:',val)
        },
        onScrollBottom () {
            console.log('滚动到底部')
        },

        // 点击修改路线
        edit() {
            // this.$router.push('/user/create')
            console.log('11111111')
        }
    }
}
</script>
<style scoped>
    .weui-media-box__bd button.weui-btn_mini{
        padding: 0 15px;
    }
</style>
