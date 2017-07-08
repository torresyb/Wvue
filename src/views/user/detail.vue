<template>
    <div id="userDetail" class="userDetail">
        <ul class="content-income">
                <li class="border-bottom">
                    <div class="item-right">
                        <h3>赚了钱</h3>
                        <i>2017-07-06</i>
                        <i>19:30:26</i>
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
            height: 3.15rem
            padding: 0 .75rem
            display: flex
            .item-right
                flex: 1
                h3
                    font-size: .75rem
                    color: #333
                    font-weight: 300
                    line-height: 1.05rem
                    height: 1.05rem
                    margin: .6rem 0 .15rem 0  
                i 
                    font-size: .6rem
                    color: #979797
                    height: .85rem
                    line-height: .85rem
                    margin-bottom: .6rem
                    font-style: normal
            span 
                font-size: .9rem
                display: inline-block
                height: 1.25rem
                line-height: 1.25rem
                margin: .95rem 0
                width: 50px
                text-align: right
                i 
                    vertical-align: 2%
                    margin-right: .05rem
            .on
                color: #F6365B
</style>