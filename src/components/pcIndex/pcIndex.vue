<style lang="less">
  #pc {
    .banner-main {
      position: relative;
      min-height: 200px;
      background-color: #000;
      .page-nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        z-index: 101;
        .nav-title {
          padding: 10px 15px;
          color: #fff;
          display: inline-block;
          cursor: pointer;
        }
        .nav-title:hover {
          background-color: #1f90e6;
        }
      }
      .main-banner {
        width: 100%;
        opacity:0.6;
        filter: alpha(opacity=60);
      }
    }
  }
</style>

<template>
  <div id="pc">
    <div class="page-banner">
      <div class="banner-main">
        <ul class="page-nav">
          <li class="nav-title" v-for="(item, index) in nav">{{item}}</li>
        </ul>
        <img class="main-banner" :src="banner_img1" alt="" />
      </div>
      <div class="banner-minor"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pc',
    data() {
      return {
        banner_img1: require('../../assets/back/back-banner1.jpg'),
        nav: [
          '首页',
          '关于树人',
          '学校介绍',
          '大马优势',
          '成功案例',
          '留学指南',
          '联系我们'
        ]
      }
    },
    mounted() {

    }
  }
</script>
