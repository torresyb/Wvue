<template>
    <view-box ref="viewBox" body-padding-bottom="55px">
        <div class="lineList bg-gray">
            <sticky scrollBox="vux_view_box_body" :offset="46">
                <tab :line-width=2 active-color='#00ca9d' custom-bar-width="50px">
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
             <scroller 
                lock-x scrollbar-y 
                @on-scroll-bottom="onScrollBottom" 
                ref="scrollerBottom" 
                :scroll-bottom-offst="200"
            >
                <div class="wx-box">
                    <div class="wx-item" v-for = '(item, index) in lineList' :key="index">
                        <div class="tab-swiper vux-center">
                            <p class="wx-title">{{item.view_line_content}}</p>
                            <p class="wx-right wx-red">{{['待审核','审核通过','审核失败','下线','已删除'][item.line_status]}}</p>
                            <a href="javascript:;" class="weui-media-box weui-media-box_appmsg">
                                <div class="weui-media-box__hd">
                                    <img :src="item.resource_path ? (item.resource_path.indexOf('http')>-1 ? '' : imgOrigin) + item.resource_path : require('../../assets/images/defaultPhoto.png')" alt="">
                                </div>
                                <div class="weui-media-box__bd wx-right">
                                    <x-button plain type="primary" mini 
                                        @click.native = 'downHandle(item.id,item.line_status)'
                                    >{{['上线发布','下线发布','上线发布','上线发布','上线发布'][item.line_status]}}
                                    </x-button>
                                    <x-button mini type="primary" action-type="button" style="margin-left:5px" @click.native="edit(item)">修改线路</x-button>
                                </div>
                            </a>
                            <i class="iconfont icon-shutdown" @click="del(item.id)"></i>
                        </div>
                    </div>
                    <load-more :tip="正在加载"></load-more>
                </div>
            </scroller>

            <div class="loadAll" ref="div"></div>
            <!-- <load-more :show-loading="false" :tip="暂无数据" background-color="#fbf9fe"></load-more> -->

            <!-- 公用底部 -->
            <wx-footer></wx-footer>
        </div>
    </view-box>
</template>

<script>
var dtCache = window.localStorage

import WxFooter from '../../components/WxFooter'
import { Tabbar, TabbarItem, Sticky,Tab, TabItem,  Divider, XButton, Swiper, SwiperItem, Card, Panel, ViewBox, LoadMore, Scroller, Spinner, Group, Cell, Flexbox, FlexboxItem} from 'vux'
export default {
    name: 'lineList',

    data () {
        return {
            config: vm.config,            // 配置
            imgOrigin: '',                // 图片origin
            onFetching: false,
            lineList: [],                 // 列表
            pageNo: 1,                    // 分页，第几页
            pageSize: 10,                 // 分页，每页数量
            status: 0,                    // 订单状态，1：待确认 
            lastPage: false,              // 是否为最后一页
            loadOnce: false,
        }
    },

    components: {
        WxFooter,
        Sticky,
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
        Flexbox, FlexboxItem,Tabbar, TabbarItem
    },

    created () {
        this.config.title('线路管理')
        this.fetchList()
    },

    mounted () {
        this.$nextTick(() => {
          this.$refs.scrollerBottom.reset({top: 0})
        })
    },

    methods: {
        itemClickHandle (val){
            console.log('tab:',val)
            this.status = val
            this.lastPage = false
            this.lineList = []
            this.pageNo = 1
            this.fetchList()
        },
        onScrollBottom () {
            console.log('滚动到底部')
            this.pageNo += 1
            this.fetchList()
        },
        // 上下线
        downHandle (lineId,status) {
            this.$http.get(`/guide/line/onOrOff?oid=asfasfqe1134&lineId=${lineId}&status=${status}`).then((rst) => {
                if(rst.body.res_code === 200){
                    this.$vux.toast.show({
                        text: status!=1 ? '上线成功' : '下线成功',
                        type: 'text',
                        onHide () {
                            this.fetchList()
                        }
                    })
                }else{
                    this.$vux.toast.show({
                        text: rst.body.msg,
                        type: 'text'
                    })
                }
            },(err) => {
                this.$vux.toast.show({
                    text: err.body.msg,
                    type: 'text'
                })
            })
        },
        // 删除线路
        del(lineId){
            this.$http.get(`/guide/line/del?oid=asfasfqe1134&lineId=${lineId}`).then((rst) => {
                if(rst.body.res_code === 200){
                    this.$vux.toast.show({
                        text: '线路删除成功',
                        type: 'text',
                        onHide () {
                            this.fetchList()
                        }
                    })
                }else{
                    this.$vux.toast.show({
                        text: rst.body.msg,
                        type: 'text'
                    })
                }
            },(err) => {
                this.$vux.toast.show({
                    text: err.body.msg,
                    type: 'text'
                })
            })
        },
        // 修改路线
        edit(item){
            console.log('item:',item)
            dtCache.setItem('lineMes',JSON.stringify(item))
            this.$router.push('/user/create?lineId='+ item.id)
        },

        fetchList() {
            if(!this.loadOnce && !this.lastPage){
                this.loadOnce = true
                this.$http.get(`/guide/line/lines?oid=asfasfqe1134&pageNo=${this.pageNo}&status=${this.status}&pageSize=${this.pageSize}`).then((rst) => {
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
                                    "guide_introduce": "专业导游20年",//导游介绍
                                    "work_date": "2017-07-09,2017-07-10,2017-07-11,2017-07-12",//工作天
                                    "create_time": "2017-07-10 01:02:10",//线路创建时间
                                    "line_status": 0,//路线状态:0=待审核,1=审核通过,2=审核失败,3=下线,4=已删除
                                    "max_count": 50,//单次接待人数上限
                                    "update_time": "2017-07-10 01:02:10",//线路上次更新时间
                                    "view_line_content": "西线可以看到三宫六院",//线路介绍
                                    "line_type": "西线",//线路类型
                                    "resource_path": null,//景点默认图处相对路径
                                    "view_spot_id": null,//景点ID
                                    "view_spot_name": "故宫",//景点名称
                                    "id": 1,//线路ID
                                    "work_time": "09,18",//导游工作时间
                                    "visit_length": 180 //浏览时长(分钟)
                                }
                            ]
                        },
                        "prefix": "http://127.0.0.1:6070/",
                        "res_code": 200
                    }
                    if(rst.body && rst.body.data){
                        this.lineList = this.lineList.concat(rst.body.data.list)
                        this.pageNo = rst.body.data.pageNumber
                        this.imgOrigin = rst.body.prefix
                    }
                    if(rst.body && rst.body.data && rst.body.data.lastPage){
                        this.$refs.div.innerHTML = '底线已被触碰~'
                        this.lastPage = true
                    }else{
                        this.lastPage = false
                    }

                    this.$nextTick(() => {
                        this.$refs.scrollerBottom.reset()
                    })
                    this.loadOnce = false
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
.weui-media-box__bd button.weui-btn_mini
    padding: 0 15px
.loadAll
    text-align: center
    position: absolute
    bottom: 60px
    left: 0
    font-size: 12px
    color: #979797
    width: 100%
</style>
<style lang="sass">
.lineList .weui-media-box__hd
    position: relative
    overflow: hidden
.lineList .weui-media-box__hd img
    position: absolute
    left: 0
    top: 50%
    transform: translateY(-50%)
.lineList .tab-swiper
    position: relative
.lineList .icon-shutdown
    position: absolute
    right: 11px
    top: 0
    display: inline-block
    height: 27px
    color: #777
    width: 41px
    text-align: right
</style>
