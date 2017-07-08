<template>
    <div id="info" class="info">
        <div class="banner"></div>
        <div class="head-box border-bottom">
            <span>真实头像</span>
            <img src="" alt="">
            <i class="iconfont icon-right"></i>
        </div>
        <div class="desc-box border-bottom">
            <span>真实身份</span>
            <p>未认证</p>
            <i class="iconfont icon-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'info',

    data () {
        return {
            
        }
    },
    components: {
    
    },

    mounted () {
        
    },

    methods: {
        
    }
}
</script>

<style scoped lang="sass">
.info
    .banner
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
        span
            flex: 1
        img
            width: 35px
            height: 35px
            border-radius: 50%
            background: red
            margin-top: 10px
        i 
            margin-left: 17px

</style>