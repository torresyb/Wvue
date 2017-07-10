<template>
    <div id="info" class="info">
        <!-- banner -->
        <router-link to="/info/rules" class="banner"></router-link>

        <!-- 列表 -->
        <div class="head-box border-bottom">
            <span>真实头像</span>
            <img :src="headImg? headImg: require('../../assets/images/defaultPhoto.png')" alt="">
            <i class="iconfont icon-right"></i>
            <input @change="upload($event)" class="" type="file" accept="image/*" id="bUploadBtn" ref="input">
        </div>
        <a :href="status ? 'javascript:;' : '/info/identify'" class="desc-box border-bottom">
            <span>真实身份</span>
            <p>{{['未认证','认证中','已认证'][+ status]}}</p>
            <i class="iconfont icon-right"></i>
        </a>
        
        <!-- 按钮 -->
        <tabbar>
            <tabbar-item @click.native="create"><span slot="label">发布行程</span></tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem} from 'vux'

export default {
    name: 'info',

    data () {
        return {
            config: vm.config,                      // 配置
            headImg: '',                            // 头像
            status: ''                              // 认证状态
        }
    },
    
    components: {
        Tabbar,
        TabbarItem
    },

    created () {
        this.config.title('完善导游信息')
        this.fetchInfo()
    },

    methods: {
        // 获取用户信息
        fetchInfo(){
            this.$http.get('/guide/user/info?oid=asfasfqe1134').then((rst) => {
                this.status = rst.body && rst.body.data && rst.body.data.guide_status
                if(rst.body && rst.body.data && rst.body.data.resource_path){
                    this.headImg = (rst.body.data.resource_path.indexOf('http') > -1 ? '': rst.body.prefix) + rst.body.data.resource_path
                }
            },(err) => {
                this.$vux.toast.show({
                    text: err.body.msg,
                    type: 'text'
                })
            })
        },
        
        // 上传头像
        uploadBase64(upfile,callback){
            var reader = new FileReader()
            reader.onload = (evt)=>{
                var imgData = evt.target.result
                var data = {}
                data.oid = 'asfasfqe1134'
                data.img = imgData
                data.remotePath = '/agent'
                data.filename = upfile.name
                data.mimetype = upfile.type
                this.$http.post('/upload/uploadFile',data).then((rst) => {
                    if(rst.body.res_code === 200){
                        callback(rst)
                    }
                },(err) => {
                    this.$vux.toast.show({
                        text: err.body.msg,
                        type: 'text'
                    })
                })
            }
            reader.readAsDataURL(upfile)
        },

        upload(event){
            if(!event.target.value) return
            this.uploadBase64(event.target.files[0],(rst)=>{
                this.headImg = rst.body.prefix + rst.body.data.path
                this.save(rst.body.data.path)
            })
        },

        // 保存头像
        save(img) {
            this.$http.post('/user/setAvatar',{img: img}).then((rst) => {
                if(rst.body.res_code === 200){
                    this.$vux.toast.show({
                        text: '头像保存成功',
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

        // 点击发布行程按钮
        create() {
            if(this.status <=0){
                this.$vux.toast.show({
                    text: '请先进行实名认证',
                    type: 'text'
                })
                return
            }
            this.$router.push('/user/create')
        }
    }
}
</script>

<style scoped lang="sass">
.info
    .banner
        display: block
        height: 175px
        background: url(../../assets/images/banner-info.jpg) center center no-repeat
        background-size: cover
    .head-box,.desc-box
        height: 55px
        line-height: 55px
        font-size: 13px
        color: #333
        display: flex
        padding: 0 16px
        position: relative
        span
            flex: 1
        img
            width: 35px
            height: 35px
            border-radius: 50%
            margin-top: 10px
        i 
            margin-left: 17px
        input
            position: absolute
            height: 100%
            right: 0
            top: 0
            opacity: 0
            border: none
            outline: none
</style>
<style lang="sass">
.info .vux-tabbar-simple .weui-tabbar__label
    background: #03ca9d
    color: #fff 
    font-size: 14px
.info .vux-tab .vux-tab-item.vux-tab-selected, #app .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, #app .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .info .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label
    color: #fff!important
</style>