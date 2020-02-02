const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

// 默认目录设置，设置后可以放到服务器上的相应目录下即可访问
/**
 * 比如服务器地址为：www.xxx.com
 * 默认目录为 / 那么必须要将build的文件放到服务器上根目录
 * 假如默认目录为 /admin 那么必须在服务器上根目录新建一个admin目录，将build的文件放到里面
 */
const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "/";

module.exports = {
  publicPath: BASE_URL,
  lintOnSave: false, // 关闭烦人的eslint，如需打开请修改为true
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
  },
  // 打包时不生成.map文件
  productionSourceMap: true,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {   
    disableHostCheck: true,
    port: 8071
  }
};
