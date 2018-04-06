const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const sourceDir = isDev
  ? resolve(__dirname, '..', 'dev')
  : resolve(__dirname, '..', 'src')

const extractStylus = new ExtractTextPlugin({
  filename: 'css/[name].[hash].css',
  allChunks: true,
  disable: isDev // inner<style>,'css-hot-loader'
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
            }
          }
      ]
      },
      {
        test: /\.styl$/,
        exclude: [resolve(sourceDir, 'style')],
        use: ['css-hot-loader'].concat(extractStylus.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: false,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'stylus-loader'
            }
          ]
        }))
      },
      {
        test: /\.styl$/,
        include: [resolve(sourceDir, 'style')],
        use: ['css-hot-loader'].concat(extractStylus.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                importLoaders: 2
              }
            },
            {
              loader: 'stylus-loader'
            }
          ]
        }))
      }
    ]
  },
  plugins: [
    extractStylus
  ]
}
