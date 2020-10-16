<template>
  <div class="full-width">
    <el-input v-model="search_text" placeholder="请输入作品名称" class="search-ipt" @input="getBook"></el-input>
    <div class="horizontal-left-wrap h-full-width">
      <book-item v-for="(item) in bookData"
                 :key="item.id"
                 :data="item"
                 class="book-item"
                 @clickItem="clickItem(item)"
      ></book-item>
    </div>
    <div v-if="bookData.length === 0" class="horizontal-center tint">
      请扫描二维码进入公众号
    </div>
  </div>
</template>

<script>

  import http from "../util/http";
  import BookItem from '../components/home/BookItem';
  import { tranformGetParmas, debounceFun } from "../util/common";
  import { getCode } from "../util/wx_util";
  import { store } from "../util/simple_store";

  export default {
    data() {
      return {
        search_text: null,
        bookData: [],
        member_id: null,
      }
    },
    components: {
      BookItem
    },
    created: function() {
      const openId = localStorage.getItem('openId');
      if (openId) {
        this.getUserInfo(openId);
      } else {
        this.getOpenId();
      }
    },
    methods: {
      getOpenId() {
        const code = this.$route.query.code;
        console.log('*******', code);
        if (code) {
          http.POST(`/getTokenAndOpenId`,{code}).then((res) => {
            console.log(`***********获取openId`,res);
            const openId = res.data.openid;
            const access_toekn = res.data.access_toekn;
            localStorage.setItem('openId', openId);
            this.getUserInfo(openId);
          });
        } else {
          //微信获取code
          getCode();
        }
      },
      getUserInfo(open_id) {
        http.POST(`/getUserId`,{open_id}).then((res) => {
          if (res.data.errno === 0) {
            const user_id = res.data.user_id;
            this.member_id = res.data.member_id;
            this.getBook();
            localStorage.setItem('userId', user_id);
          }
        });
      },
      getBook: function () {
        if (!this.member_id) {
          this.bookData = [];
          return
        }
        const params = {
          m: 'ApiCommon',
          c: 'ApiCommon',
          a: 'getBookList',
          member_id: this.member_id,
          title: encodeURI(this.search_text)
        };
        console.log(params);
        console.log(tranformGetParmas(params));
        http.POST(`/getBook`,{url: `http://59.111.97.208:8008/api.php${tranformGetParmas(params)}`}).then((res) => {
          if(res.data.code === 200) {
            if (res.data.data && res.data.data.length > 0) {
              this.bookData = res.data.data[0].list;
            }
          }
        });
        // http.GET(`/api.php${tranformGetParmas(params)}`).then((res) => {
        //   if(res.data.code === 200) {
        //     if (res.data.data && res.data.data.length > 0) {
        //       this.bookData = res.data.data[0].list;
        //     }
        //   }
        // });
      },
      clickItem: function (item) {
        store.setBookDetailAction({...item});
        localStorage.setItem('bookDetail', JSON.stringify(item));
        this.$router.push('/detail');
      },
    }
  };
</script>

<style scoped>
  .book-item {
    width: 28%;
    margin-left: 4%;
    margin-top: 3%;
  }
  .search-ipt{
    margin-left: 4%;
    width: 92%;
    margin-top: 3%;
  }
  .tint{
    font-size: 14px;
    color: #656565;
    margin-top: 100px;
  }

</style>
