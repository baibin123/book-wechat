<template>
    <div class="container vertical-between">
        <div>
            <img :src="detailData.detail_pic" class="h-full-width">
            <div class="padding">
                <div class="title">{{detailData.title}}</div>
                <div class="title">类型</div>
                <div class="des horizontal-left">
                    <div v-for="c in cateids"> {{c | category}}</div>
                </div>
                <div class="title">作品简介</div>
                <div class="des">{{detailData.summary}}</div>
            </div>
            <div class="author-container">
                <div class="author">作者：{{detailData.author}}</div>
                <div class="horizontal-between m-t-5">
                    <div>
                        <div class="font">人气值{{detailData.reader}}</div>
                    </div>
                    <div>
                        <div class="font">{{detailData.likes}}人已点赞</div>
                    </div>
                    <div>
                        <div class="font">{{detailData.collect}}人已收藏</div>
                    </div>

                </div>
            </div>
        </div>
        <div>
            <button @click="goBack" class="btn cancel">返回首页</button>
            <button @click="startRead" class="btn read">开始阅读</button>
        </div>

    </div>
    
</template>

<script>
    import { store } from "../util/simple_store";

    export default {
        name: "BookDetail",
        data() {
            return {
                detailData: {},
                cateids: []
            }
        },
        components: {

        },
        created: function() {
            this.detailData = store.state.bookDetail;
            this.cateids = this.detailData.cateids && this.detailData.cateids.split(',');
        },
        destroyed: function() {
            store.clearBookDetailAction();
        },
        methods: {
            goBack: function () {
                this.$router.go(-1);
            },
            startRead: function () {
                window.location.href=' http://59.111.97.208:8008/index.php?m=&c=Book&a=bookinfo&bid=83&parent=1419&open_id=111';
            }
        }
    }
</script>

<style scoped>
    .title{
        color: #333333;
        font-size: 14px;
        margin-top: 7px;
    }
    .author-container{
        padding: 10px 4% 10px 4%;
        background: white;
        margin-top: 10px;
    }
    .author{
        color: #656565;
        font-size: 12px;
    }
    .des{
        font-size: 12px;
        color: #656565;
        text-indent: 20px;
        margin-top: 3px;
    }
    .container{
        background: #eee;
        min-height: 100%;
    }
    .font{
        font-size: 10px;
        color: #656565;
    }
    .padding{
        padding-right: 4%;
        padding-left: 4%;
    }
    .btn{
        width: 50%;
        border: 1px solid #ccc;
        background: white;
        height: 40px;
        color: #333333;
        font-size: 14px;
        margin-top: 20px;
    }
    .cancel{
        color: #656565;
    }
    .read{
        color: rgb(55, 148, 255);
    }
</style>
