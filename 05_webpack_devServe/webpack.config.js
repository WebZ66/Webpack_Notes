const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.jsx', '.tsx', '.ts'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  devServer: {
    hot: true,
    port: 9999
  },
  module: {
    rules: []
  },
  plugins: [new HtmlWebpackPlugin({ title: 'devServer' })]
}
