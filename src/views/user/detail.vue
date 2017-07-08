<template>
    <div id="userDetail" class="userDetail">
        <ul class="content-income">
            <li class="border-bottom">
                <div class="item-right">
                    <h3>赚了钱</h3><i>2017-07-06 19:30:26</i>
                </div>
                <span>
                    <i>-</i>100
                </span>
            </li>
            <li class="border-bottom">
                <div class="item-right">
                    <h3>赚了钱</h3><i>2017-07-06 19:30:26</i>
                </div>
                <span>
                    <i>-</i>100
                </span>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'userDetail',

    data () {
        return {
            config: vm.config
        }
    },

    created () {
        this.config.title('收支明细')
    },

    methods: {
        
    }
}
</script>

<style scoped lang="sass">
.userDetail ul
        li 
            padding: 10px .75rem 5px
            display: flex
            .item-right
                flex: 1
                h3
                    font-size: 14px
                    color: #333
                    font-weight: 300
                    line-height: 1.05rem
                    height: 1.05rem
                i 
                    font-size: 12px
                    color: #979797
                    height: .85rem
                    line-height: .85rem
                    margin-bottom: .6rem
                    font-style: normal
            span 
                margin-top: 12px
                font-size: 14px
                display: inline-block
                height: 1.25rem
                line-height: 1.25rem
                width: 50px
                text-align: right
                i 
                    vertical-align: 2%
                    margin-right: .05rem
            .on
                color: #F6365B
</style>