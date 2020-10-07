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
  </div>
</template>

<script>

  import http from "../util/http";
  import BookItem from '../components/home/BookItem';
  import { tranformGetParmas, debounceFun } from "../util/common";
  import { store } from "../util/simple_store";

  export default {
    data() {
      return {
        search_text: null,
        bookData: null,
      }
    },
    components: {
      BookItem
    },
    created: function() {
      this.getBook();
    },
    methods: {
      getBook: function () {
        const params = {
          m: 'ApiCommon',
          c: 'ApiCommon',
          a: 'getBookList',
          member_id: 24,
          title: this.search_text
        };
        http.GET(`/api.php${tranformGetParmas(params)}`).then((res) => {
          if(res.data.code === 200) {
            if (res.data.data && res.data.data.length > 0) {
              this.bookData = res.data.data[0].list;
            }
          }
        });
      },
      clickItem: function (item) {
        store.setBookDetailAction({...item});
        this.$router.push('/detail');
      }
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

</style>
