<template>
    <div id="confirm" class="confirm">
        <div class="header">
            
        </div>
    </div>
</template>

<script>

export default {
    name: 'confirm',

    data () {
        return {
            config: vm.config,       // 配置
        }
    },

    created () {
        this.config.title('订单号：20170707')
    },

    methods: {
        
    }
}
</script>

<style scoped lang="sass">

</style>