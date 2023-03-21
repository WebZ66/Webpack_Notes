const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        //通过test属性，告诉webpack，匹配什么文件
        test: /\.css$/, //需要正则表达式
        //通过use属性，告诉对应文件，用什么loader处理。use是数组，因为可以用多个loader处理
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      { test: /\.less$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }] },
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        },
        generator: {
          //将图片重命名 不定义就是hash
          //图片名称_截取8位hash值 图片后缀名
          //img/ 打包后会自动生成一个文件夹，然后将重命名的图片放入其中
          filename: 'img/[name]_[hash:8][ext]'
        }
      }
    ]
  }
}
