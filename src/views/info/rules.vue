<template>
    <div id="rules" class="rules">
        <h3>成为导游标准与审核细则</h3>
        <p>If someone loves a flower, of which just one single blossom grows in all the millions and millions of stars, it is enough to make him happy just to look at the stars. He can say to himself, "Somewhere, my flower is there…" But if the sheep eats the flower, in one moment all his stars will be darkened… And you think that is not important! </p>
        <p>If someone loves a flower, of which just one single blossom grows in all the millions and millions of stars, it is enough to make him happy just to look at the stars. He can say to himself, "Somewhere, my flower is there…" But if the sheep eats the flower, in one moment all his stars will be darkened… And you think that is not important! </p>
    </div>
</template>

<script>

export default {
    name: 'rules',

    data () {
        return {
            config: vm.config,                      // 配置
        }
    },

    beforeMounted () {
        this.config.title('完善导游信息')
    },

    methods: {
        
    }
}
</script>

<style scoped lang="sass">
.rules
    color: #1b1b1b
    h3 
        text-align: center
        font-size: 15px
        margin: 23px 0 13px
    p 
        font-size: 12px
        padding: 0 15px
        margin-bottom: 10px
        text-indent: 2em

</style>