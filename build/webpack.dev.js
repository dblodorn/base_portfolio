const webpack = require('webpack')
const merge = require('webpack-merge')
const Dotenv = require('dotenv-webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devServer: {
    publicPath: "/",
    historyApiFallback: true
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new Dotenv({
      path: './.dev.env'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
})
