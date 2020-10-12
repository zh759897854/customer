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
