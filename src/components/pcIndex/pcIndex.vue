<style lang="less">
#pc {
  min-width: 1100px;
  overflow: hidden;
  /*头部样式*/
  .pc-header {
    height: 86px;
    margin: 20px 50px;
    .header-item {
      float: left;
      text-align: center;
    }
    .pc-logo {
      width: 250px;
      border-right: 1px dashed #e5e5e5;
      p {
        text-align: left;
      }
      p:first-child {
        font-size: 42px;
        font-weight: bold;
        color: #144089;
        letter-spacing: 16px;
      }
      p:last-child {
        font-size: 24px;
        font-weight: 300;
        color: #144089;
      }
    }
    .pc-online-tec {
      width: 305px;
      padding-left: 30px;
      p:first-child {
        padding: 5px 20px;
        background: #144089;
        color: white;
        border-radius: 4px;
        font-size: 28px;
        margin: 5px;
      }
      p:last-child{
        font-size: 24px;
        color: #333;
        line-height: 18px;
        text-align: center;
        margin-top: 10px;
      }
    }
  }

  /*banner样式*/
  .pc-banner {
    width: 100%;
    img {
      width: 100%;
    }
  }

  /*body样式*/
  .pc-body {
    .pc-body-title {
      text-align: center;
      white-space: nowrap;
      h5 {
        margin: 0 10px 0 10px;
        display: inline-block;
        font-size: 48px;
        font-weight: bold;
        color: #144089;
      }
      img {
        display: inline-block;
        width: 483px;
        padding-bottom: 10px;
      }
    }
    .En-title {
      font-size: 28px;
      text-align: center;
      color: #333333;
    }
    .pc-school-name {
      ul {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        padding: 20px 180px 0 180px;
        li {
          display: inline-block;
          img {
            width: 80px;
            margin: 0 auto;
            display: block;
          }
          span {
            text-align: center;
            font-size: 30px;
            color: #666666;
          }
          span:hover {
            color: #144089;
            padding-bottom: 5px;
            font-weight: bold;
            border-bottom: 4px solid #144089;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div id="pc">
    <!--title-->
    <div class="pc-header">
      <div class="header-item pc-logo">
        <p>招生中心</p>
        <p>Admissions Center</p>
      </div>
      <div class="header-item pc-online-tec">
        <p>寒暑假远程线上博士</p>
        <p>在职高校老师</p>
      </div>
    </div>

    <!--banner-->
    <div class="pc-banner">
      <img :src="pc_banner" alt="banner"/>
    </div>

    <!--body-->
    <div class="pc-body">
      <div class="pc-body-title">
        <img :src="title_l" alt="">
        <h5>学校简介</h5>
        <img :src="title_r" alt="">
      </div>
      <p class="pc-body-title En-title">University Introduction</p>
      <div class="pc-school-name">
        <ul>
          <li>
            <img :src="sbldx" alt="圣保罗大学">
            <span>圣保罗大学</span>
          </li>
          <li>
            <img :src="flbdx" alt="菲律宾大学">
            <span>菲律宾大学</span>
          </li>
          <li>
            <img :src="gfdx" alt="国父大学">
            <span>国父大学</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pc',
    data() {
      return {
        pc_banner: require('./image/flb_banner.jpg'),
        title_l: require('./image/title_l@2x.png'),
        title_r: require('./image/title_r@2x.png'),
        sbldx: require('./image/sbldxflb_logo@2x.jpg'),
        flbdx: require('./image/flbdxflb_logo@2x.jpg'),
        gfdx: require('./image/gfdxflb_logo@2x.jpg')
      }
    },
    mounted() {

    }
  }
</script>
