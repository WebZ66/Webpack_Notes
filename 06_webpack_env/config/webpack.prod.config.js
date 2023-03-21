const path = require('path')
module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    clean: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {}
  },
  //开发环境不需要devServer
  /*  devServer: {
    hot: true,
    port: 9999
  }, */
  module: {
    rules: []
  },
  plugins: []
}
