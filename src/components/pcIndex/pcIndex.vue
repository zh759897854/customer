<style lang="less">
  #pc {
    .icon-cricle {
      display: inline-block;
      width: 5px;
      height: 5px;
      background: #000;
      border-radius: 100%;
      vertical-align: middle;
      margin: 0 8px;
    }
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
      .main-banner-back {
        width: 100%;
        opacity:0.6;
        filter: alpha(opacity=60);
      }
      .text-container {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -150px;
        margin-left: -400px;
        p {
          text-align: center;
          font-size: 60px;
          color: #e5e5e5;
        }
        p:nth-child(3) {
          font-size: 50px
        }
        .study-abroad {
          font-size: 40px;
          color: #fff;
        }
        span {
          font-size: 18px;
          color: #fff;
          i {
            display: inline-block;
            width: 5px;
            height: 5px;
            background: #fff;
            border-radius: 100%;
            vertical-align: middle;
            margin: 0 8px;
          }
        }
      }
      .btn {
        position: absolute;
        top: 60%;
        color: #fff;
        font-size: 20px;
      }
      .learn-more {
        padding: 10px 15px;
        left: 280px;
        background: #18b4de;
      }
      .flip {
        right: 350px;
        span {
          font-size: 30px;
          display: inline-block;
          padding: 5px 10px;
          margin-right: 5px;
          background: #18b4de;
        }

      }
    }
    .banner-minor {
      position: relative;
      background-color: #000;
      .banner-minor-back {
        width: 100%;
        opacity:0.6;
        filter: alpha(opacity=60);
      }
      .certificate {
        width: 280px;
        position: absolute;
        top: 50%;
        margin-top: -190px;
        right: 200px;
        z-index: 2;
      }
      .text-container {
        position: absolute;
        left: 200px;
        top: 50%;
        margin-top: -150px;
        z-index: 2;
        p {
          color: #fff;
          line-height: 25px;
          word-spacing: 2px;
        }
        p:nth-child(1) {
           font-size: 25px;
        }
        p:nth-child(2) {
          font-size: 20px;
          margin-bottom: 50px;
        }
      }
    }
    .main-page {
      width: 80%;
      min-width: 1200px;
      background-color: #a0bccf;
      padding-bottom: 20px;
      margin: 0 auto;
      .slogen-text {
        text-align: center;
        color: #000;
        padding: 15px 0;
      }
      .school-nav {
        text-align: center;
        .university {
          display: inline-block;
          background-color: #41627c;
          padding: 2px 10px;
          font-weight: 600;
          color: #000;
        }
        .Private-university {
          padding-right: 50px;
          clip-path: polygon(0 0, 124px 0, 85px 25px, 0 124px);
          margin-right: -17px;
        }
        .public-university {
          padding-left: 50px;
          margin-left: -17px;
          clip-path: polygon(39px 0, 124px 0, 124px 25px, 0 25px);
        }
      }
      .school-logo {
        padding-top: 15px;
        width: 800px;
        margin: 0 auto;
        ul {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;
          p {
            text-align: center;
            letter-spacing: 3px;
          }
        }
        .school_lgr {
          width: 195px;
        }
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
        <img class="main-banner-back" :src="banner_img1" alt="" />
        <div class="text-container">
          <p class="study-abroad">专注马来西亚留学</p>
          <p>全世界学费较低的硕博留学</p>
          <p>Focus On Studying in Mamaysia</p>
          <div>
            <span>音乐学相关<i></i></span>
            <span>体育学相关<i></i></span>
            <span>美术学<i></i></span>
            <span>设计学<i></i></span>
            <span>传媒学<i></i></span>
            <span>教育学相关<i></i></span>
            <span>医学相关<i></i></span>
            <span>法学相关</span>
          </div>
        </div>
        <div class="btn learn-more">了解更多</div>
        <div class="btn flip">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>
      <div class="banner-minor">
        <img class="banner-minor-back" :src="banner_img2" alt="" />
        <div class="text-container">
          <p>关于树人留学</p>
          <p>about study aboard</p>
          <p>树人教育是马来西亚留学联会在中国设立的服务<br/>中心，专注马来西亚本硕博留学和寒暑假<br/>游学项目，为多种需求上学人群量身定制留学<br/>方案并提供高质量服务。
            <br/>树人留学是马来西亚留学联会唯一的中国办事<br/>处，拥有多所大学的招生资质。</p>
        </div>
        <img class="certificate" :src="certificate_img" alt="" />
      </div>
      <div class="main-page">
        <div class="slogen-text">专注名校申请<i class="icon-cricle"></i>完成数百万学子的留学梦</div>
        <div class="school-nav">
          <span class="university Private-university">私立大学</span>
          <span class="university public-university">公立大学</span>
        </div>
        <div class="school-logo">
          <ul>
            <li>
              <img class="school_lgr" :src="school_lgr" alt="" />
              <p>林国荣创意科技大学</p>
            </li>
            <li>
              <img class="school_tl" :src="school_tl" alt="" />
              <p>泰莱大学</p>
            </li>
            <li>
              <img class="school_sty" :src="school_sty" alt="" />
              <p>思特雅大学</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pc',
    data() {
      return {
        banner_img1: require('../../assets/back/back-banner1.jpg'),
        banner_img2: require('../../assets/back/back-banner2.jpg'),
        certificate_img: require('../../assets/certificate.png'),
        school_lgr: require('../../assets/icon/icon-school-lgrkji.jpg'),
        school_tl: require('../../assets/icon/icon-school-sty.jpg'),
        school_sty: require('../../assets/icon/icon-school-tl.jpg'),
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
