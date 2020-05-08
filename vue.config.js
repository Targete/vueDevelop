const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/production-sub-path/'
      : '/', 
    chainWebpack: config => {
        config.resolve.alias
         .set("@",resolve("src"))
    },
    devServer: {
        port: 8090, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        proxy: 'http://news-at.zhihu.com' // 配置跨域处理,只有一个代理
    }
}