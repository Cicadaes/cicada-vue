const { resolve } = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConf = require('./webpack.base.conf')

module.exports = merge(baseConf, {
  mode: 'development',
  entry: './dev/index.tsx',
  output: {
    path: resolve(__dirname, '../dev'),
    filename: 'bundle.js'
  },
  devtool: '#cheap-module-eval-source-map',
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'cicadavue': resolve('../src'),
    }
  },
  devServer: {
    contentBase: './dev',
    // publicPath: '/dev/',
    port: process.env.PORT || '8080'
  },
  plugins: baseConf.plugins.concat([
    new HtmlWebpackPlugin({
      template: './static/index.tpl.ejs',
      filename: 'index.html',
      path: './dev'
    })
  ])
})