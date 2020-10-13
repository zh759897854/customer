<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
    body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
    body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
    h1, h2, h3, h4, h5, h6{ font-size:100%; }
    address, cite, dfn, em, var { font-style:normal; }
    code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
    small{ font-size:12px; }
    ul, ol { list-style:none; }
    a { text-decoration:none; }
    a:hover { text-decoration:underline; }
    sup { vertical-align:text-top; }
    sub{ vertical-align:text-bottom; }
    legend { color:#000; }
    fieldset, img { border:0; }
    button, input, select, textarea { font-size:100%; }
    table { border-collapse:collapse; border-spacing:0; }

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: #fff;
    }
    /* 设置滚动条的样式 */
    ::-webkit-scrollbar {
      width:6px;
      background-color: #eee;
    }

    /* 滚动槽 */
    ::-webkit-scrollbar-track {
      border-radius:6px;
    }

    /* 滚动条滑块 */
    ::-webkit-scrollbar-thumb {
      border-radius:6px;
      background: #999;
    }
</style>
