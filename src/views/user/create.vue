<template>
    <div id="userCreate" class="userCreate">
        <!-- banner -->
        <div class="banner"></div>
        
        <group class="border-bottom">
            <x-input title="线路名称" placeholder="请输入线路名称" v-model="value1"></x-input>
            <x-input title="旅游景点" placeholder="请输入旅游景点" v-model="value2"></x-input>
            <x-input title="接待人数" placeholder="请输入人数" v-model="value3" type="number"></x-input>
            <datetime @on-change="change" title="出导日历" v-model="value4" placeholder="请输入旅程日期"></datetime>
            <datetime 
                v-model="value5" 
                format="YYYY-MM-DD HH:mm" 
                :hour-list="['09', '10', '11', '12', '2', '3', '4', '5']" 
                :minute-list="['00', '15', '30', '45']" 
                @on-change="change" 
                title="出导时间"
                placeholder="请输入旅程时间"
            ></datetime>
            <x-input title="行程时长" placeholder="请输入行程时长" v-model="value6" type="number"></x-input>
            <x-input title="讲解分类" placeholder="请填写分类" v-model="value7"></x-input>
        </group>

        <div class="desc-travel">
            <h3>行程介绍</h3>
            <input type="text">
        </div>
        <div class="desc-myself">
            <h3>自我介绍</h3>
            <input type="text">
        </div>

        <!-- 按钮 -->
        <tabbar>
            <tabbar-item><span slot="label">提交审核</span></tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem, Datetime, Group, XButton, XInput} from 'vux'
export default {
    name: 'userCreate',

    data () {
        return {
            config: vm.config,           // 配置
            value1: '', 
            value2: '', 
            value3: '', 
            value4: '', 
            value5: '', 
            value6: '', 
            value7: '', 
            
        }
    },

    components: {
        Tabbar,
        TabbarItem,
        Datetime,
        Group,
        XButton,
        XInput,
    },

    created () {
        this.config.title('旅游内容')
    },

    methods: {
        change (value) {
            console.log('change', value)
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
.userCreate .weui-cell:before
    left: -15px
.userCreate .weui-cell__hd
    width: 210px
.userCreate .vux-datetime p
    width: 210px
.userCreate .weui-cell_access .weui-cell__ft
    text-align: left
</style>