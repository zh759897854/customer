<style lang="less">
  #pc {
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
      /*background-color: #a0bccf;*/
      background-color: #e5e5e5;
      padding-bottom: 20px;
      margin: 0 auto;
      .slogan-text {
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
      .offer-container {
        background-color: #e5e5e5;
        h5 {
          font-size: 20px;
          text-align: center;
          color: #000;
        }
        h6 {
          width: 200px;
          padding: 15px 0;
          font-size: 13px;
          color: #000;
          text-align: center;
          border-bottom: 2px solid #999;
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
              background-color: #999;
              -webkit-border-radius: 8px;
              -moz-border-radius: 8px;
              border-radius: 8px;
              padding: 10px;
              div {
                display: inline-block;
                img {
                  width: 80px;
                }
              }
            }
          }
        }
      }
      .guide {
        background-color: #fff;
        h5 {
          font-size: 20px;
          text-align: center;
          color: #000;
        }
        h6 {
          width: 200px;
          padding: 15px 0;
          font-size: 13px;
          color: #000;
          text-align: center;
          border-bottom: 2px solid #999;
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
            }
          }
          .item-right {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            width: 69%;
            padding-left: 20px;
            p:nth-child(2) {
              font-weight: normal;
              line-height: 25px;
            }
          }
        }
        .hot-professional {
          width: 90%;
          margin: 0 auto;
          background-color: #a0bccf;
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          border-radius: 8px;
          padding: 0 10px;
          padding-bottom: 20px;
          div {
            padding: 5px 0;
            text-align: center;
            color: #fff;
          }
        }
      }
      .advantage {
        background-color: #fff;
        h5 {
          font-size: 20px;
          text-align: center;
          color: #000;
        }
        h6 {
          width: 200px;
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
          }
        }
      }
    }
    .page-footer {
      background-color: #999;
      > div {
        text-align: center;
      }
      .concat-box {
        display: inline-block;
        padding-left: 50px;
        padding-right: 50px;
        text-align: left;
        p {
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
      .guide-step-item {
        display: inline-block;
        width: 100%/6;
        .guide-step-text {
          padding: 5px 0;
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
          }
        }
      }
    }
  }
</style>

<template>
  <div id="pc">
    <div class="page-banner">
      <section class="banner-main">
        <ul class="page-nav">
          <li class="nav-title" v-for="(item, index) in nav">{{item}}</li>
        </ul>
        <img class="main-banner-back" :src="banner_img1" alt="" />
        <div class="text-container">
          <p class="study-abroad">专注马来西亚留学</p>
          <p>全世界学费较低的硕博留学</p>
          <p>Focus On Studying in Malaysia</p>
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
        <div class="learn-flip">
          <div class="btn learn-more">了解更多</div>
          <div class="btn flip">
            <span>&lt;</span>
            <span>&gt;</span>
          </div>
        </div>

      </section>
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
      <section class="main-page">
        <section class="slogan-text">专注名校申请<i class="icon-cricle"></i>完成数百万学子的留学梦</section>
        <section class="school-nav">
          <span class="university Private-university">私立大学</span>
          <span class="university public-university">公立大学</span>
        </section>
        <section class="school-logo">
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
        </section>
        <section class="introduce-container">
          <div class="introduce-item introduce-title">
            <div class="item-left">
              <img :src="school_lgr" alt="" />
            </div>
            <div class="item-right">
              <p>Limkokwing University of Creative Technology</p>
              <p>林国荣创意科技大学是亚洲高水平、特色大学，是英联邦国家马来西亚知名综合性大学，
                马来西亚艺术类专业大学排名第一。作为具有全球化创意教育视野的教育旗舰，林国荣创意科技大学赢得了许多殊荣，
                得到了马来西亚政府及社会的广泛肯定与认同。马来西亚教育部曾为林国荣创意科技大学颁发了国际学生最高入读率奖、
                全球化教育特别奖，同时，马来西亚国际贸易和工业部为其颁发过杰出人才输出奖。</p>
            </div>
          </div>
          <div class="introduce-item">
            <div class="item-left">
              <img :src="school_lgr1" alt="" />
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
                <li><i class="icon-mark"></i>马来西亚排名 No.3 亚洲排名 No.219 （2021）</li>
                <li><i class="icon-mark"></i>3年可毕业、毕业轻松，一年境外时间不超过2个月</li>
                <li><i class="icon-mark"></i>回国可做中留服学历认证，认证为全日制博士PHD</li>
              </ul>
            </div>
            <div class="item-right">
              <img :src="school_lgr2" alt="" />
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
          <h5>五大优势</h5>
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
          <h5>一切以offer为导向</h5>
          <h6>Guiding for applying offers</h6>
          <div class="school-list">
            <ul>
              <li v-for="(list, inv) in schoolList" :key="inv">
                <div>
                  <div class="list-left">
                    <img :src="list.imgSrc" alt="" />
                  </div>
                  <div class="list-right">
                    <p v-for="(listItem, inc) in list.data" :key="inc">{{listItem}}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="guide">
          <h5>留学指南</h5>
          <h6>study guide</h6>
          <div class="guide-step">
            <div class="guide-step-item">
              <span class="guide-step-icon"></span>
              <span class="guide-step-text">
                院校咨询
              </span>
              <i class="guide-step-circle"></i>
            </div>
            <div class="guide-step-item">
              <span class="guide-step-icon"></span>
              <span class="guide-step-text">
                <i></i>
                院校申请
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
              <span class="guide-step-text">
                <i></i>
                入学前免费培训
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
              <span class="guide-step-text">
                <i></i>
                开始大马留学生活
              </span>
              <i class="guide-step-circle"></i>
            </div>
          </div>
        </section>
      </section>
      <section class="page-footer">
        <div>
          <div class="concat-box">
            <p>联系我们</p>
            <div>电话：16631136917</div>
            <div>微信：16631136917</div>
            <div>地址：河北省石家庄市金源商务广场B713</div>
            <div>电子邮箱：12596258@qq.com</div>
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
          </div>
        </div>
      </section>
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
        ],
        school_lgr1: require('../../assets/back/university-lgr1.jpg'),
        school_lgr2: require('../../assets/back/university-lgr2.jpg'),
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
        teacherQR: require('../../assets/icon/icon-teacher-MrzQr.jpg')
      }
    },
    mounted() {

    }
  }
</script>
