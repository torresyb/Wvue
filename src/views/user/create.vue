<template>
    <div id="userCreate" class="userCreate" style="padding-bottom:80px">
        <!-- banner -->
        <div class="banner"></div>
        
        <group class="border-bottom">
            <x-input title="线路名称" placeholder-align="right" placeholder="请输入线路名称" v-model.trim="lineName"></x-input>
            <x-input title="旅游景点" placeholder-align="right" placeholder="请输入旅游景点" v-model.trim="viewName"></x-input>
            <x-input title="接待人数" placeholder-align="right" placeholder="请输入人数" v-model.trim="maxCount" type="number"></x-input>
            <datetime @on-change="change" placeholder-align="right" title="出导日历" v-model="workDays" placeholder="请输入旅程日期"></datetime>
            <datetime 
                v-model="workTime" 
                format="YYYY-MM-DD HH:mm" 
                :hour-list="['09', '10', '11', '12', '2', '3', '4', '5']" 
                :minute-list="['00', '15', '30', '45']" 
                @on-change="change" 
                title="出导时间"
                placeholder="请输入旅程时间"
            ></datetime>
            <x-input title="行程时长" placeholder-align="right" placeholder="请输入行程时长" v-model.trim="vLength" type="number"></x-input>
            <x-input title="讲解分类" placeholder-align="right" placeholder="请填写分类" v-model.trim="lineTye"></x-input>
        </group>

        <div class="desc-travel">
            <h3>行程介绍</h3>
            <x-textarea :max="200" :rows="1" autosize name="description" v-model.trim="content"></x-textarea>
        </div>
        <div class="desc-myself">
            <h3>自我介绍</h3>
            <x-textarea :max="200" :rows="1" autosize name="description" v-model.trim="intro"></x-textarea>
        </div>

        <!-- 按钮 -->
        <tabbar>
            <tabbar-item @click.native="confirm"><span slot="label">提交审核</span></tabbar-item>
        </tabbar>
    </div>
</template>

<script>
var dtCache = window.localStorage
var lineData = JSON.parse(dtCache.getItem('lineMes'))

import { Tabbar, TabbarItem, Datetime, Group, XButton, XInput, XTextarea} from 'vux'
export default {
    name: 'userCreate',

    data () {
        return {
            config: vm.config,                                                    // 配置
            lineId: this.$route.query.lineId || '',                               // 线路id
            viewName: this.$route.query.lineId? lineData.view_spot_name : '',     // 景点名称 
            maxCount: this.$route.query.lineId? lineData.max_count : '',          // 接待人数
            workDays: this.$route.query.lineId? lineData.work_date : '',          // 接待的日期
            workTime: this.$route.query.lineId? lineData.work_time : '',          // 可接待的时间
            content:  this.$route.query.lineId? lineData.view_line_content : '',  // 线路内容
            vLength:  this.$route.query.lineId? lineData.visit_length : '',       // 预计浏览时间
            intro:  this.$route.query.lineId? lineData.guide_introduce : '',      // 自我介绍
            lineTye: this.$route.query.lineId? lineData.line_type : '',           // 线路类型
            lineName: '',                                                         // 线路名称
        }
    },

    components: {
        Tabbar,
        TabbarItem,
        Datetime,
        Group,
        XButton,
        XInput,
        XTextarea
    },

    created () {
        this.config.title('旅游内容')
    },

    methods: {
        change (value) {
            console.log('change', value)
        },

        // vux基础上封装toast
        toast(mes){
            this.$vux.toast.show({
                text: mes,
                type: 'text'
            })
        },

        // 审核
        confirm() {
            if(!this.viewName){
                this.toast('请填写景点名称')
                return
            }
            if(!this.maxCount){
                this.toast('请填写接待人数')
                return
            }
            if(!this.workDays){
                this.toast('请填写出导日历')
                return
            }
            if(!this.workTime){
                this.toast('请填写可接待时间')
                return
            }
            if(!this.content){
                this.toast('请填写线路内容')
                return
            }
            if(!this.vLength){
                this.toast('请填写游览时长')
                return
            }
            if(!this.intro){
                this.toast('请填写自我介绍')
                return
            }
            if(!this.lineTye){
                this.toast('请填写自我介绍')
                return
            }
            if(!this.intro){
                this.toast('请填写讲解分类')
                return
            }
            this.$http.post('/guide/line',{
                oid:asfasfqe1134,
                lineId: this.lineId,
                viewName: this.viewName,
                maxCount: this.maxCount,
                workDays: this.workDays,
                workTime: this.workTime,
                content:  this.content,
                vLength: this.vLength,
                intro:  this.intro,
                lineTye: this.lineTye
            }).then((rst) => {
                if(rst.body.res_code === 200){
                    this.$vux.toast.show({
                        text: '新建线路成功',
                        type: 'text',
                        onHide () {
                            this.$router.push('#/user/line')
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
    }
}
</script>

<style scoped lang="sass">
.userCreate
    .banner
        height: 125px
        background: url(../../assets/images/banner-create.jpg) center center no-repeat
        background-size: cover
    .desc-travel,.desc-myself
        padding: 0 15px
    h3
        font-size: 13px
        color: #333
        font-weight: normal
        height: 32px
        line-height: 32px
    input 
        display: block
        height: 47px
        border: none
        border: 1px solid #dedede
        width: 100%
        outline: none
    .border-bottom
        margin-bottom: 5px
</style>
<style lang="sass">
.userCreate .vux-tabbar-simple .weui-tabbar__label
    background: #03ca9d
    color: #fff 
    font-size: 14px
.userCreate .weui-cells
    font-size: 13px
    margin-top: 0
    line-height: 25px
.userCreate .vux-x-textarea
    border: 1px solid #dedede
.userCreate .weui-cell:before
    left: -15px
.userCreate .vux-x-textarea:before
    border: none
</style>