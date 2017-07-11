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
            status: 1,                    // 订单状态，1：待确认 
            orderList: [],                // 列表
            lastPage: false,              // 是否为最后一页
            loadText: '',                 // 
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

    beforeMount () {
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
                this.$http.get(`/guide/order/list?oid=asfasfqe1134&pageNo=${this.pageNo}&status=${this.status}`).then((rst) => {
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
.loadAll
    text-align: center
    position: absolute
    bottom: 60px
    left: 0
    font-size: 12px
    color: #979797
    width: 100%
</style>