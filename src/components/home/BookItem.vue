<template>
    <div @click="clickItem">
        <img :src="data.cover_pic" class="h-full-width">
        <div class="title">{{data.title}}</div>
        <div class="episodes">更新至第{{data.episodes}}话</div>
    </div>
</template>

<script>
    export default {
        name: "BookItem",
        props: {
            data: null
        },
        methods: {
            clickItem: function () {
                this.$emit('clickItem', this.data);
            }
        }
    }
</script>

<style scoped>
    .title{
        color: #333333;
        font-size: 14px;
    }
    .episodes{
        color: #656565;
        font-size: 12px;
    }

</style>
