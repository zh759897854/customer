<style lang="less">
  #mobile {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  .page-main {
    text-align: center;
    color: #E6A23C;
    padding-top: 30px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    .icon {
      margin: 30px;
      transform: scale(1.5);
    }
    p {
      text-align: center;
      padding: 0 20px;
    }
    .icon-teacher {
      display: inline-block;
      width: 100px;
      height: 100px;
    }
    > div {
      display: inline-block;
    }
  }
  .hide {
    display: none;
  }

</style>

<template>
  <div id="mobile">
    <div class="page-main hide">
      <i class="icon el-icon-s-promotion">&nbsp;error:404</i>
      <p>哎呀，对不起，本站移动端正在建设中，请用PC端继续访问本站！</p>
      <p>或者添加下方老师联系方式直接咨询</p>
      <div>
        <img class="icon-teacher" :src="teacherQR" alt="" /><br/>
        <p>微信Sally老师</p>
      </div>
      <div>
        <img class="icon-teacher" :src="teacherAnna" alt="" /><br/>
        <p>微信Anna老师</p>
      </div>
    </div>
    <iframe id="iframe" src="static/lx/page/wap/index.html"
            height='auto'
            width='100%'
            frameborder='0'
            scrolling='no'
            onload='this.height=3200'>
    </iframe>
  </div>
</template>

<script>
  export default {
    name: 'mobile',
    data() {
      return {
        teacherQR: require('../../assets/icon/icon-teacher-MrzQr.jpg'),
        teacherAnna: require('../../assets/icon/icn-teacher-Anna.png'),
      }
    },
    created() {
      let that = this
      //不是iphone ipad就不执行了
      // if (!navigator.userAgent.match(/iPad|iPhone/i))
      //   return false;
      //获取子iframe
      // var iframebody = document.getElementById('iframe').contentWindow.document.body;
      // iframebody.style.width = document.body.clientWidth+'px';
    }
  }
</script>
