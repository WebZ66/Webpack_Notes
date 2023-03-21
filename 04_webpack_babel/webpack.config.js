const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const path = require('path')
/* 这个插件是vue必须的，为了解析.vue文件的css */
const { VueLoaderPlugin } = require('vue-loader/dist/index')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  resolve: {
    //模块默认的扩展名，能够让用户导入模块不带后缀
    extensions: ['.js', '.json', '.vue', '.jsx', '.ts', '.tsx'],
    //配置路径别名
    //找到当前webpack.config.js的路径，同时拼接./src/utils
    //所以utils就是对应的utils的路径
    alias: {
      utils: path.resolve(__dirname, './src/utils')
    }
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg)$/, type: 'asset' },
      { test: /\.js$/, use: ['babel-loader'] },
      { test: /\.vue$/, use: ['vue-loader'] }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: '电商项目' }),
    new DefinePlugin({
      //右边看上去是字符串，但它会被当做js代码执行
      BASE_URL: "'./'"
    })
  ]
}
