<template>
    <div id="userMoney" class="userMoney">
        <ul>
            <li class="border-bottom">
                <span>余额</span>
                <i>10000</i>
            </li>
            <li class="border-bottom">
                <span>冻结余额</span>
                <i>5000</i>
            </li>
            <li class="border-bottom" @click="goDetail">
                <span>收支明细</span>
                <i class="iconfont icon-right"></i>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'userMoney',

    data () {
        return {
            config: vm.config        // 配置
        }
    },

    created () {
        this.config.title('余额')
    },

    methods: {
        // 收支明细
        goDetail(){
            this.$router.push('/user/detail')
        }
    }
}
</script>

<style scoped lang="sass">
.userMoney
    ul 
        li 
            height: 45px
            line-height: 45px
            padding: 0 15px 
            display: flex
            justify-content: space-between
            color: #333
            font-size: 14px
        i 
            font-style: normal
            color: #979797
</style>