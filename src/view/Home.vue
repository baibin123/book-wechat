<template>
  <div class="full-width horizontal-left">
    <Slider class="slider"></Slider>
    <div class="container">
      <Header class="header"></Header>
      <el-main class="main">
        <router-view />
      </el-main>
    </div>
  </div>
</template>

<script>
  import Header from "../components/common/Header";
  import Slider from "../components/common/Slider";
  export default {
    data() {
      return {
      }
    },
    components: {
      Header,
      Slider
    },
  };
</script>

<style scoped>
  .slider{
    width: 200px;
  }
  .container{
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .header{
    height: 60px;
  }
  .main{
    flex: 1;
  }

</style>
