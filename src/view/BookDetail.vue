<template>
    <div class="container vertical-between">
        <div class="h-full-width">
            <div class="img-container">
                <img :src="detailData.detail_pic" class="h-full-width">
                <div class="info">
                    <div class="name">{{detailData.title}}</div>
                    <book-type></book-type>
                </div>
            </div>

            <div class="padding">
                <div class="title">作品简介</div>
                <div class="des">{{detailData.summary}}</div>
            </div>
            <div class="author-container">
                <div class="author">作者：{{detailData.author}}</div>
                <div class="horizontal-between m-t-5">
                    <div class="vertical-center">
                        <img src="../assets/icon/1.png">
                        <div class="font">人气值{{detailData.reader}}</div>
                    </div>
                    <div class="vertical-center">
                        <img src="../assets/icon/2.png">
                        <div class="font">{{detailData.likes}}人已点赞</div>
                    </div>
                    <div class="vertical-center">
                        <img src="../assets/icon/3.png">
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
    import  BookType from "../components/book-detail/BookType";
    import { tranformGetParmas } from "../util/common";
    import { goThirdWeb } from "../util/wx_util";

    export default {
        name: "BookDetail",
        data() {
            return {
                detailData: {},
                cateids: []
            }
        },
        components: {
            BookType
        },
        created: function() {
            // this.detailData = store.state.bookDetail;
            this.detailData = JSON.parse(localStorage.getItem('bookDetail'));
            this.cateids = this.detailData.cateids && this.detailData.cateids.split(',');
        },
        methods: {
            goBack: function () {
                this.$router.go(-1);
            },
            startRead: function () {
                // this.$router.push({name:`BookWeb`, query: {id: this.detailData.id}});
                const open_id = localStorage.getItem('openId');
                const user_id = localStorage.getItem('userId');
                const params = {
                    m: '',
                    c:'Book',
                    a: 'bookinfo',
                    bid: this.detailData.id,
                    parent: user_id,
                    open_id: open_id
                };
                console.log('参数：',params);
                // const url = encodeURIComponent(`http://book.truckloud.com/index.php${tranformGetParmas(params)}`);
                // goThirdWeb(url);
                window.location.href=`www.baidu.com`;
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
    .name{
        color: white;
        font-size: 14px;
        margin-bottom: 5px;
    }
    .author-container{
        padding: 10px 4% 10px 4%;
        background: white;
        margin-top: 8px;
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
        margin-left: 2px;
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
    .img-container{
        position: relative;
        width: 100%;
        /*background-image:url("http://e10.xrxydt.cn/Upload/xsfm/异次元神坑系统.jpg");background-repeat:no-repeat;*/
        /*background-size:cover;*/
        /*background-position: center;*/
    }
    .info{
        position: absolute;
        bottom: 50px;
        left: 20px;
    }
</style>
