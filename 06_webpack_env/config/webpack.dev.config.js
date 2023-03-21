const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {}
  },
  devServer: {
    hot: true,
    port: 9999
  },
  module: {
    rules: []
  },
  plugins: []
}
