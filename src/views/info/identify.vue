<template>
    <div id="identify" class="identify">
        <!-- 列表 -->
        <ul>
            <li class="border-bottom">
                <span>真实姓名：</span>
                <input type="text" placeholder="请输入与身份证相符的真实姓名">
            </li>
            <li class="border-bottom">
                <span>身份证号：</span>
                <input type="text" placeholder="请输入证件号">
            </li>
            <li class="border-bottom">
                <span>联系方式：</span>
                <input type="tel" placeholder="请输入手机号">
                <i>发送验证码</i>
            </li>
            <li class="border-bottom">
                <span>验&nbsp;&nbsp;证&nbsp;&nbsp;码：</span>
                <input type="text" placeholder="请输入验证码">
            </li>
        </ul>

        <!-- 图片上传区域 -->
        <div class="pic-box">
            <div class="pic-id1 pic">
                <i class="iconfont icon-plus_fuzhi"></i>
                <p>请上传身份证正面</p>
            </div>
            <div class="pic-id2 pic">
                <i class="iconfont icon-plus_fuzhi"></i>
                <p>请上传身份证正面</p>
            </div>
        </div>
        <div class="pic-id3 pic">
            <i class="iconfont icon-plus_fuzhi"></i>
            <p>请上传身份证正面</p>
        </div>

        <button>提交审核</button>
    </div>
</template>

<script>

export default {
    name: 'identify',

    data () {
        return {
            config: vm.config,                      // 配置
        }
    },

    created () {
        this.config.title('完善真实身份')
    },

    methods: {
        
    }
}
</script>

<style scoped lang="sass">
.identify
    ul 
        li 
            display: flex
            height: 58px
            line-height: 58px
            font-size: 13px
            position: relative
            span
                margin-left: 16px
                display: inline-block
                width: 65px
                color: #333
            input 
                flex: 1
                border: none
                outline: none
            i 
                display: inline-block
                position: absolute
                right: 15px
                top: 50%
                transform: translateY(-50%)
                width: 80px
                height: 28px
                line-height: 28px
                color: #fff 
                text-align: center
                background: #03ca9d
                border-radius: 4px
                font-style: normal
    .pic-box
        padding: 30px 15px 24px 15px
        display: flex
        justify-content: space-between
        .pic-id1,.pic-id2
            width: 158px
            height: 120px
            padding: 22px 0 32px 0 
    .pic-id3
        width: 265px
        height: 100px
        margin: 0 auto
        padding: 15px 0 20px 0
    .pic
        border: 1px dashed #dedede
        display: flex
        flex-direction: column
        justify-content: space-between
        text-align: center
        box-sizing: border-box
        i 
            color: #03ca9d
            font-size: 24px
        p 
            color: #999
            font-size: 12px

    button
        width: 202px
        height: 44px
        line-height: 44px
        text-align: center
        color: #fff
        background: #03ca9d
        display: block 
        margin: 50px auto 0
        border: none
        border-radius: 4px


</style>