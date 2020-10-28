<style lang="less">
  body {
    transition: 0.5s;
  }
  #pc {
    padding-top: 60px;
    min-width: 1200px;
    .nave {
      background-color: #606266;
      text-align: center;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 10001;
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
          background-color: #606266;
          cursor: default !important;
        }
        .shuren-logo:hover {
          background-color: transparent !important;
        }
      }
    }
		.h5 {
      font-size: 18px;
      font-weight: bold;
			padding-top: 15px;
			letter-spacing: 5px;
      text-align: center;
		}
    img {
      width: 100px;
    }
    .icon-cricle {
      display: inline-block;
      width: 5px;
      height: 5px;
      background: #000;
      border-radius: 100%;
      vertical-align: middle;
      margin: 0 8px;
    }
    .icon-mark {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #ea6e4a;
      transform: rotate(45deg);
      vertical-align: center;
      margin-right: 10px;
    }
    .banner-main {
      position: relative;
      min-height: 200px;
      background-color: #000;
      .shuren-logo {
        width: 60px;
        height: 60px;
        position: absolute;
        z-index: 102;
        left: 50%;
        margin-left: -420px;
        top: 5px;
        img {
          width: 100%;
        }
      }
      .page-nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        z-index: 101;
        font-size: 15px;
        .nav-title {
          padding: 20px 15px;
          color: #fff;
          display: inline-block;
          cursor: pointer;
          margin: 0 5px;
        }
        .nav-title:hover {
          background-color: #1f90e6;
        }
        .active {
          background-color: #1f90e6;
        }
      }
      .main-banner-back {
        width: 100%;
        opacity:0.6;
        filter: alpha(opacity=60);
        vertical-align: top;
      }
      .text-container {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -150px;
        margin-left: -430px;
        text-align: left;
        letter-spacing: 4px;
        p {
          text-align: center;
          font-size: 60px;
          color: #e5e5e5;
        }
        P:nth-child(2) {
          letter-spacing: 12px;
        }
        p:nth-child(3) {
          font-size: 50px;
          letter-spacing: 6px;
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
      .learn-flip {
        width: 860px;
        height: 100px;
        margin: 0 auto;
        position: absolute;
        top: 60%;
        left: 50%;
        margin-left: -430px;
        .btn {
          position: absolute;
          top: 0;
          color: #fff;
          font-size: 20px;
        }
        .learn-more {
          padding: 10px 15px;
          left: 0;
          background: #18b4de;
        }
        .flip {
          right: 0;
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
    .banner-minor {
      position: relative;
      background-color: #000;
      .banner-minor-back {
        width: 100%;
        opacity:0.6;
        filter: alpha(opacity=60);
        vertical-align: top;
      }
      .text-container {
        position: absolute;
        width: 860px;
        left: 50%;
        top: 50%;
        margin-left: -430px;
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
        .certificate {
          width: 280px;
          position: absolute;
          top: -60px;
          right: 0;
          z-index: 2;
        }
      }
    }
    .main-page {
      width: 1000px;
      max-width: 1000px;
      background-color: #F2F6FC;
      margin: 0 auto;
      .slogan-text {
        text-align: center;
        color: #000;
        padding: 15px 0;
				font-weight: 600;
      }
      .school-nav {
        text-align: center;
        .university {
          display: inline-block;
          background-color: #3786c8;
          padding: 7px 10px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
        }
        .Private-university {
          padding-right: 50px;
          clip-path: polygon(0 0, 124px 0, 85px 35px, 0 124px);
          margin-right: -17px;
          -webkit-border-radius: 3px 0 0 3px;
          -moz-border-radius: 3px 0 0 3px;
          border-radius: 3px 0 0 3px;
        }
        .public-university {
          padding-left: 50px;
          margin-left: -17px;
          clip-path: polygon(39px 0, 124px 0, 124px 35px, 0 35px);
          -webkit-border-radius: 0 3px 3px 0;
          -moz-border-radius: 0 3px 3px 0;
          border-radius: 0 3px 3px 0;
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
          li {
            cursor: pointer;
          }
          p {
            text-align: center;
            letter-spacing: 3px;
						font-weight: 600;
            padding-bottom: 5px;
            border-bottom: 2px solid transparent;
          }
          li:hover {
            p {
              border-color: #999;
            }
          }
          .activeLi {
            p {
              border-color: #999;
            }
          }
        }
        .school_lgr {
          width: 195px;
        }
      }
      .offer-container {
        background-color: #F2F6FC;
				margin-top: 20px;
        h6 {
          width: 300px;
          padding: 15px 0;
          font-size: 13px;
          color: #000;
          text-align: center;
          border-bottom: 2px solid #e5e5e5;
          margin: 0 auto;
        }
        .school-list {
          ul {
            white-space: normal;
          }
          li {
            box-sizing: border-box;
            display: inline-block;
            width: 100%/3;
            padding: 20px;
            > div {
              box-sizing: border-box;
              background-color: #fff;
              -webkit-border-radius: 8px;
              -moz-border-radius: 8px;
              border-radius: 8px;
              padding: 10px;
              box-shadow: 0 0 5px #e5e5e5;
							height: 105px;
              div {
                display: inline-block;
                vertical-align: top;
                white-space: nowrap;
                img {
                  width: 80px;
									height: 80px;
									vertical-align: middle
                }

              }
            }
						> div:hover {
							box-shadow: 0 0 8px #666;
						}
          }
					.list-right {
						font-size: 13px;
						margin-left: 5px;
						padding-top: 15px;
					}
        }
      }
      .guide {
        background-color: #fff;

        h6 {
          width: 300px;
          padding: 15px 0;
          font-size: 13px;
          color: #000;
          text-align: center;
          border-bottom: 2px solid #e5e5e5;
          margin: 0 auto;
        }
      }
      .introduce-container {
        width: 100%;
        padding: 10px 0;
        padding-bottom: 50px;
        .introduce-item {
          .item-left,.item-right {
            display: inline-block;
            height: 250px;
            vertical-align: top;
            box-sizing: border-box;
            padding: 10px;
            p {
              color: #000;
              font-size: 15px;
              font-weight: 600;
            }
            ul {
              margin-top: 15px;
              li {
                padding: 5px 0;
              }
            }
            img {
              width: 350px;
              height: 202px;
              border: none;
            }
          }
          .item-left {
            width: 50%;
          }
          .item-right {
            width: 50%;
          }
        }
        .introduce-title {
          .item-left,.item-right {
            height: 150px;
          }
          .item-left {
            width: 29%;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .item-right {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            width: 100%;
            padding-left: 20px;
            p:nth-child(2) {
              font-weight: normal;
              line-height: 25px;
              padding: 10px 0;
            }
          }
        }
        .hot-professional {
          width: 90%;
          margin: 0 auto;
          background-color: #fff;
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          border-radius: 8px;
          padding: 0 10px;
          padding-bottom: 20px;
          color: #000;
          div {
            padding: 5px 0;
            text-align: center;
						font-weight: 600;
          }
					span {
						font-weight: 600;
						font-size: 13px;
					}
        }
      }
      .advantage {
        background-color: #fff;
				padding-bottom: 20px;
        h6 {
          width: 300px;
          padding: 15px 0;
          font-size: 13px;
          color: #000;
          text-align: center;
          border-bottom: 2px solid #e5e5e5;
          margin: 0 auto;
        }
        ul {
          margin-top: 40px;
          li {
            box-sizing: border-box;
            display: inline-block;
            width: 20%;
            padding: 0 10px;
            vertical-align: top;
            > div {
              box-sizing: border-box;
              box-shadow: 0 0 5px #e5e5e5;
              text-align: center;
              padding-bottom: 20px;
              height: 250px;
              p {
                padding: 5px 0;
                font-size: 13px;
              }
              div {
                padding: 40px 0;
              }
            }
						> div:hover {
							box-shadow: 0 0 8px #666;
						}
          }
        }
      }
    }
    .page-footer {
      background-color: #606266;
			padding: 10px 0;
      color: #fff;
      > div {
        text-align: center;
      }
      .concat-box {
        display: inline-block;
        padding-left: 50px;
        padding-right: 50px;
        text-align: left;
        p {
					font-size: 20px;
          padding-top: 5px;
          padding-bottom: 15px;
        }
        div {
          padding: 5px 0;
        }
      }
      .QR-box {
        display: inline-block;
        > div {
          display: inline-block;
          text-align: center;
          padding: 0 50px;
        }
      }
    }
    .guide-step {
			text-align: center;
      .guide-step-item {
        box-sizing: border-box;
        display: inline-block;
        width: 100%/6;
        height: 100px;
        position: relative;
        border-bottom: 1px solid #666;
        margin: 0 auto;
        .guide-step-text {
          padding: 5px 0;
          white-space: nowrap;
          position: absolute;
          left: -20px;
          i {
            display: inline-block;
            width: 40px;
            height: 40px;
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            border-radius: 100%;
            background-repeat: no-repeat;
            background-image: url("../../assets/icon/icon-logo-guide.jpg");
            background-size: 380px 60px;
            background-position: -13px -2px;
            vertical-align: middle;
          }
        }
        .guide-step-icon {
          display: inline-block;
          height: 50px;
          position: absolute;
          border-right: 1px solid #666;
        }
        .loop(@n, @i: 1) when (@i =< @n) {
          .guide-step-icon:nth-child(@{i}) {
            left:  (100%/5)*(@i - 1);
          }
          .loop(@n, (@i + 1));
        }

        .loop(6);
      }
      .guide-step-item:nth-child(odd) {
        .guide-step-icon {
          bottom: 0;
        }
        .guide-step-text {
          top: 5px;
        }
      }
      .guide-step-item:nth-child(even) {
        .guide-step-icon {
          bottom: -50px;
        }
        .guide-step-text {
          bottom: -90px;
        }
      }
      .guide-step-item:last-child {
        width: 0;
        border-bottom: none;
      }
    }
		.guide-step {
			box-sizing: border-box;
			height: 200px;
			padding: 20px 0;
			.guide-step-circle {
				display: inline-block;
				width: 10px;
				height: 10px;
				background-color: #999;
				border-radius: 100%;
				position: absolute;
				top: 95px;
				left: -5px;
			}
		}
		.guide {
			padding-bottom: 20px;
			.guide-step-text-special {
				left: -150px !important;
			}
			.guide-step-text-special1 {
				left: -135px !important;
			}
			.guide-step-text-special2 {
				left: -90px !important;
			}
			.guide-step-item:nth-child(2) {
				.guide-step-text {
					i {
						background-position: -72px -2px;
					}
				}
			}
			.guide-step-item:nth-child(3) {
				.guide-step-text {
					i {
						background-position: -137px -2px;
					}
				}
			}
			.guide-step-item:nth-child(4) {
				.guide-step-text {
					i {
						background-position: -206px -2px;
					}
				}
			}
			.guide-step-item:nth-child(5) {
				.guide-step-text {
					i {
						background-position: -270px -2px;
					}
				}
			}
			.guide-step-item:nth-child(6) {
				.guide-step-text {
					i {
						background-position: -335px -2px;
					}
				}
			}
		}
    .is-active {
      font-weight: 700;
    }
  }
</style>

<template>
  <div id="pc">
    <!--页面导航-->
    <div class="nave">
      <el-menu
          default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#606266"
          text-color="#fff"
          active-text-color="#3786c8">
        <el-menu-item class="shuren-logo"></el-menu-item>
        <el-menu-item index="1" @click="toBlock(0)">首页</el-menu-item>
        <el-menu-item index="2" @click="toBlock(1)">关于树人</el-menu-item>
        <el-menu-item index="3" @click="toBlock(2)">学校介绍</el-menu-item>
        <el-menu-item index="4" @click="toBlock(3)">大马优势</el-menu-item>
        <el-menu-item index="5" @click="toBlock(4)">成功案例</el-menu-item>
        <el-menu-item index="6" @click="toBlock(5)">留学指南</el-menu-item>
        <el-menu-item index="7" @click="toBlock(6)">联系我们</el-menu-item>
      </el-menu>
    </div>
    <!--主页面-->
    <div class="page-container">
      <!--主页面banner-->
      <section class="banner-main">
        <img class="main-banner-back" :src="banner_img1" alt="" />
        <div class="text-container">
          <p class="study-abroad">专注马来西亚留学</p>
          <p>全世界学费较低的硕博留学</p>
          <p>Focus On Studying in Malaysia</p>
          <div>
            <span v-for="(item, ina) in professional" :key="ina">{{item}}<i v-if="ina < professional.length -1"></i></span>
          </div>
        </div>
        <div class="learn-flip">
          <div class="btn learn-more">了解更多</div>
          <div class="btn flip">
            <span>&lt;</span>
            <span>&gt;</span>
          </div>
        </div>
      </section>
      <!--主页面二级banner-->
      <section class="banner-minor">
        <img class="banner-minor-back" :src="banner_img2" alt="" />
        <div class="text-container">
          <p>关于树人留学</p>
          <p>about study aboard</p>
          <p>树人教育是马来西亚留学联会在中国设立的服务<br/>中心，专注马来西亚本硕博留学和寒暑假<br/>游学项目，为多种需求上学人群量身定制留学<br/>方案并提供高质量服务。
            <br/>树人留学是马来西亚留学联会唯一的中国办事<br/>处，拥有多所大学的招生资质。</p>
          <img class="certificate" :src="certificate_img" alt="" />
        </div>
      </section>
      <!--主页面body-->
      <section class="main-page">
        <section class="slogan-text">专注名校申请<i class="icon-cricle"></i>完成数百万学子的留学梦</section>

        <section class="school-nav">
          <span class="university Private-university" @click="universityChange(0)">私立大学</span>
          <span class="university public-university" @click="universityChange(1)">公立大学</span>
        </section>

        <section class="school-logo">
          <ul>
            <li @click="changeSchool(0)" :class="{'activeLi': activeLi === 0}">
              <img class="school_lgr" :src="school_lgr" alt="" />
              <p>林国荣创意科技大学</p>
            </li>
            <li @click="changeSchool(1)" :class="{'activeLi': activeLi === 1}">
              <img class="school_tl" :src="school_tl" alt="" />
              <p>泰莱大学</p>
            </li>
            <li @click="changeSchool(2)" :class="{'activeLi': activeLi === 2}">
              <img class="school_sty" :src="school_sty" alt="" />
              <p>思特雅大学</p>
            </li>
          </ul>
        </section>

        <section class="introduce-container">
          <div class="introduce-item introduce-title">
            <div class="item-right">
              <p>{{schoolIntroduceEn}}</p>
              <p>{{schoolIntroduce}}</p>
            </div>
          </div>
          <div class="introduce-item">
            <div class="item-left">
              <img :src="school_2" alt="" />
            </div>
            <div class="item-right">
              <p>林国荣创意科技大学</p>
              <p>Limkokwing University of Creative Technology</p>
              <ul>
                <li><i class="icon-mark"></i>学费：¥3万/3年</li>
                <li><i class="icon-mark"></i>授课语言：英文授课、全程协助</li>
                <li><i class="icon-mark"></i>申请日期：全年</li>
                <li><i class="icon-mark"></i>入学日期：全年均可</li>
              </ul>
            </div>
          </div>
          <div class="introduce-item">
            <div class="item-left">
              <p>项目特点</p>
              <p>Project characteristics</p>
              <ul>
                <li v-for="(item, int) in schoolTrait" :key="int"><i class="icon-mark"></i>{{item}}</li>
              </ul>
            </div>
            <div class="item-right">
              <img :src="school_3" alt="" />
            </div>
          </div>
          <div class="hot-professional">
            <div>热门专业</div>
            <p>
              <span v-for="(item, inx) in lgrHot">
                {{item}}
                <i class="icon-cricle" v-if="inx !== lgrHot.length -1"></i>
              </span>
            </p>
          </div>
        </section>

        <section class="advantage">
          <div class="h5">五大优势</div>
          <h6>advantage</h6>
          <ul>
            <li v-for="(tage, ind) in tages" :key="ind">
              <div>
                <div class="tage-title">{{tage.title}}</div>
                <p v-for="(tageItem, ing) in tage.data" :key="ing">{{tageItem}}</p>
              </div>
            </li>
          </ul>
        </section>

        <section class="offer-container">
          <div class="h5">一切以offer为导向</div>
          <h6>Guiding for applying offers</h6>
          <div class="school-list">
            <ul>
              <li v-for="(list, inv) in schoolList" :key="inv">
                <div>
                  <div class="list-left">
                    <img :src="list.imgSrc" alt="" />
                  </div>
                  <div class="list-right">
                    <p v-for="(listItem, inc) in list.data" :key="inc" v-html="listItem"></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class="guide">
          <div class="h5">留学指南</div>
          <h6>study guide</h6>
          <div class="guide-step">
            <div class="guide-step-item">
              <span class="guide-step-icon"></span>
              <span class="guide-step-text">
                <i></i>
                院校咨询
              </span>
              <i class="guide-step-circle"></i>
            </div>
            <div class="guide-step-item">
              <span class="guide-step-icon"></span>
              <span class="guide-step-text guide-step-text-special2">
                院校申请
                <i></i>
              </span>
              <i class="guide-step-circle"></i>
            </div>
            <div class="guide-step-item">
              <span class="guide-step-icon"></span>
              <span class="guide-step-text">
                <i></i>
                官方授权语音培训
              </span>
              <i class="guide-step-circle"></i>
            </div>
            <div class="guide-step-item">
              <span class="guide-step-icon"></span>
              <span class="guide-step-text guide-step-text-special1">
                入学前免费培训
                <i></i>
              </span>
              <i class="guide-step-circle"></i>
            </div>
            <div class="guide-step-item">
              <span class="guide-step-icon"></span>
              <span class="guide-step-text">
                <i></i>
                境外接机及生活帮助
              </span>
              <i class="guide-step-circle"></i>
            </div>
            <div class="guide-step-item">
              <span class="guide-step-icon"></span>
              <span class="guide-step-text guide-step-text-special">
                开始大马留学生活
                <i></i>
              </span>
              <i class="guide-step-circle"></i>
            </div>
          </div>
        </section>
      </section>
    </div>
    <!--底部-->
    <section class="page-footer">
      <div>
        <div class="concat-box">
          <p>联系我们</p>
          <div>电话：16631136917</div>
          <div>微信：16631136917</div>
          <div>地址：河北省石家庄市金源商务广场B713</div>
          <div>电子邮箱：shurenliuxuevip@126.com</div>
        </div>
        <div class="QR-box">
          <div>
            <img :src="SRQR" alt="" /><br/>
            <span>树人留学公众号二维码</span>
          </div>
          <div>
            <img :src="teacherQR" alt="" /><br/>
            <span>微信Sally老师二维码</span>
          </div>
          <div>
            <img :src="teacherQR" alt="" /><br/>
            <span>微信Anna老师二维码</span>
          </div>
        </div>
      </div>
    </section>
    <template>
      <el-backtop :bottom="100">
        <div
            style="{
                height: 100%;
                width: 100%;
                background-color: #f2f5f6;
                box-shadow: 0 0 6px rgba(0,0,0, .12);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
              }">UP
        </div>
      </el-backtop>
    </template>
  </div>
</template>

<script>
  let pageHeight = document.documentElement.clientHeight;
  console.log(pageHeight)
  export default {
    name: 'pc',
    data() {
      return {
        navDistance: 0,
        shuren_logo: require('../../assets/icon/icon-logo-shuren.png'),
        banner_img1: require('../../assets/back/back-banner1.jpg'),
        banner_img2: require('../../assets/back/back-banner2.jpg'),
        certificate_img: require('../../assets/certificate.png'),
        school_lgr: require('../../assets/icon/icon-school-lgrkji.jpg'),
        school_tl: require('../../assets/icon/icon-school-sty.jpg'),
        school_sty: require('../../assets/icon/icon-school-tl.jpg'),
        professional: ['音乐学相关', '体育学相关', '美术学', '设计学', '传媒学', '教育学相关', '医学相关', '法学相关'],
        nav: [
          '首页',
          '关于树人',
          '学校介绍',
          '大马优势',
          '成功案例',
          '留学指南',
          '联系我们'
        ],
        lgrHot: ['音乐', '美术', '体育', '医科', '传媒', '心理学', '法律',
                   '社会学', '社会科学与管理学' ,'语言学', '工程技术', '社会科学',  
          '管理学' ,'法学' ,'电子电气工程' ,'计算机科学', '土木工程' ,'化学工程' ,
          '传媒学' ,'建筑学' ,'现代语言学'],
        tages: [
          {
            title: '免联考推荐入学',
            data: [
              '学院资质审核',
              '不用参加国内严格的博士考试',
              '免试入学'
            ]
          },
          {
            title: '时间灵活',
            data: [
              '博士课程时间学习灵活',
              '周末授课，一月一次',
              '不定期论坛、讲座增值服务'
            ]
          },
          {
            title: '权威认证',
            data: [
              '马来西亚DBA课程体系',
              '博士学位国际通用',
              '校友资源全球化'
            ]
          },
          {
            title: '轻松获取学位',
            data: [
              '只要按照要求修满学分',
              '完成毕业论文',
              '通过答辩即可授予学位'
            ]
          },
          {
            title: '证书含金量高',
            data: [
              '与出国留学获取的完全一致',
              '学位国际双认可大学',
              '文凭可用于公司上市移民加分'
            ]
          }
        ],
        schoolList: [
          {
            imgSrc: require('../../assets/icon/icon-school-mlxy.jpg'),
            data: [
              '录取院校 马来亚大学',
              '申请背景',
              '基本成绩'
            ]
          },
          {
            imgSrc: require('../../assets/icon/icon-school-gl.jpg'),
            data: [
              '录取院校 国立大学',
              '申请背景',
              '基本成绩'
            ]
          },
          {
            imgSrc: require('../../assets/icon/icon-school-lg.jpg'),
            data: [
              '录取院校 理工大学',
              '申请背景',
              '基本成绩'
            ]
          },
          {
            imgSrc: require('../../assets/icon/icon-school-lgrkji.jpg'),
            data: [
              '录取院校 林国荣创意科技大学',
              '申请背景',
              '基本成绩'
            ]
          },
          {
            imgSrc: require('../../assets/icon/icon-school-tl.jpg'),
            data: [
              '录取院校 泰莱大学',
              '申请背景',
              '基本成绩'
            ]
          },
          {
            imgSrc: require('../../assets/icon/icon-school-sty.jpg'),
            data: [
              '录取院校 思特雅大学',
              '申请背景',
              '基本成绩'
            ]
          },
        ],
        SRQR: require('../../assets/icon/icon-Qr.jpg'),
        teacherQR: require('../../assets/icon/icon-teacher-MrzQr.jpg'),
        teacherAnna: require('../../assets/icon/icn-teacher-Anna.png'),
        activeLi: 0,
        school_1: require('../../assets/icon/icon-school-lgrkji.jpg'),
        school_2: require('../../assets/back/university-lgr1.jpg'),
        school_3: require('../../assets/back/university-lgr2.jpg'),
        schoolIntroduceEn: 'Limkokwing University of Creative Technology',
        schoolIntroduce: '林国荣创意科技大学是亚洲高水平、特色大学，是英联邦国家马来西亚知名综合性大学，马来西亚艺术类专业大学排名第一。作为具有全球化创意教育视野的教育旗舰，林国荣创意科技大学赢得了许多殊荣，得到了马来西亚政府及社会的广泛肯定与认同。马来西亚教育部曾为林国荣创意科技大学颁发了国际学生最高入读率奖、全球化教育特别奖，同时，马来西亚国际贸易和工业部为其颁发过杰出人才输出奖。',
        schoolTrait: [
          '马来西亚排名 No.3 亚洲排名 No.219 （2021）',
          '3年可毕业、毕业轻松，一年境外时间不超过2个月',
          '回国可做中留服学历认证，认证为全日制博士PHD'
        ]
      }
    },
    mounted() {
      let that = this;
      document.body.onscroll = function(e) {
        that.backTop(e)
      }
    },
    methods: {
      changeSchool(index) {
        switch (index) {
          case 0:
            this.activeLi = 0;
            this.school_1 = require('../../assets/icon/icon-school-lgrkji.jpg');
            this.school_2 = require('../../assets/back/university-lgr1.jpg');
            this.school_3 = require('../../assets/back/university-lgr2.jpg');
            this.schoolIntroduceEn = 'Limkokwing University of Creative Technology';
            this.schoolIntroduce = '林国荣创意科技大学是亚洲高水平、特色大学，是英联邦国家马来西亚知名综合性大学，马来西亚艺术类专业大学排名第一。作为具有全球化创意教育视野的教育旗舰，林国荣创意科技大学赢得了许多殊荣，得到了马来西亚政府及社会的广泛肯定与认同。马来西亚教育部曾为林国荣创意科技大学颁发了国际学生最高入读率奖、全球化教育特别奖，同时，马来西亚国际贸易和工业部为其颁发过杰出人才输出奖。';
            this.schoolTrait = [
              '马来西亚排名 No.3 亚洲排名 No.219 （2021））',
              '3年可毕业、毕业轻松，一年境外时间不超过2个月',
              '回国可做中留服学历认证，认证为全日制博士PHD'
            ]
            break;
          case 1:
            this.activeLi = 1;
            this.school_1 = require('../../assets/icon/icon-school-tl.jpg');
            this.school_2 = require('../../assets/back/university-tldx1.jpg');
            this.school_3 = require('../../assets/back/university-tldx2.jpg');
            this.schoolIntroduceEn = 'Taylor\'s University';
            this.schoolIntroduce = '泰莱大学创立于1969年，是马来西亚历史悠久及最杰出的私立大学，享有崇高的信誉。(QS2021世界大学排名379)，它拥有三十多年的卓越教学经验，向以优良的学术传统著称。';
            this.schoolTrait = [
              '马来西亚排名 No. 亚洲排名 No. 世界排名 No.379（2021）',
              '3年可毕业、毕业轻松，一年境外时间不超过2个月',
              '回国可做中留服学历认证，认证为全日制博士PHD'
            ]
            break;
          case 2:
            this.activeLi = 2;
            this.school_1 = require('../../assets/icon/icon-school-sty.jpg');
            this.school_2 = require('../../assets/back/university-stydx1.jpg');
            this.school_3 = require('../../assets/back/university-stydx2.jpg');
            this.schoolIntroduceEn = 'Asia Pacific University of Technology &Innovation';
            this.schoolIntroduce = '亚太科技大学的教育以科技为核心，提供了多层次的教育模式。亚太科技大学的目标是通过学校的教育项目，培育和鼓励创新意识，培养学生成为能够学习、领悟并且能够以不同的角度独立思考的人才。';
            this.schoolTrait = [
              '马来西亚排名 No. 亚洲排名 No. 世界排名 No.（2021）',
              '3年可毕业、毕业轻松，一年境外时间不超过2个月',
              '回国可做中留服学历认证，认证为全日制博士PHD'
            ]
            break;
        }
      },
      backTop(e) {
        let scrollDom = e.target;
        let scrollDistance = window.pageYOffset;
        if (scrollDistance === 0) {
          this.navDistance = 0;
        }
      },
      toBlock(index) {
        document.documentElement.style.transition = '0.5s';
        switch (index) {
          case 0:
            this.navDistance = 0;
            document.documentElement.scrollTop = 0;
            break;
          case 1:
            this.navDistance = 1;
            document.documentElement.scrollTop = 1150;
            break;
          case 2:
            this.navDistance = 2;
            document.documentElement.scrollTop = 1910;
            break;
          case 3:
            this.navDistance = 3;
            document.documentElement.scrollTop = 2930;
            break;
          case 4:
            this.navDistance = 4;
            document.documentElement.scrollTop = 4000;
            break;
          case 5:
            this.navDistance = 5;
            document.documentElement.scrollTop = 4000;
            break;
        }
      },
      universityChange(type) {

      }
    }
  }
</script>
