// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '树人留学-专注马来西亚留学';
        return args
      })
  }
}
