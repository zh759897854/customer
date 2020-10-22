<style lang="less">
  .nave {
    background-color: #545c64;
    text-align: center;
    position: fixed;
    width: 100%;
    .el-menu {
      display: inline-block;
      vertical-align: top;
      border-bottom: none !important;
      .shuren-logo {
        background-image: url("../../assets/icon/icon-logo-shuren.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        margin: 0 30px !important;
        background-color: #545c64;
        cursor: default !important;
      }
      .shuren-logo:hover {
        background-color: transparent !important;
      }
    }
  }
</style>

<template>
  <div id="mobile">
    <div class="nave">
      <el-menu
          :default-active="'1'"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#3786c8">
        <el-menu-item class="shuren-logo"></el-menu-item>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">关于树人</el-menu-item>
        <el-menu-item index="3">学校介绍</el-menu-item>
        <el-menu-item index="4">大马优势</el-menu-item>
        <el-menu-item index="5">成功案例</el-menu-item>
        <el-menu-item index="6">留学指南</el-menu-item>
        <el-menu-item index="7">联系我们</el-menu-item>
      </el-menu>
    </div>
    <div class="page-main"></div>
  </div>
</template>

<script>
  export default {
    name: 'mobile',
    data() {
      return {

      }
    },
    mounted() {

    }
  }
</script>
