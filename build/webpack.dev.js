const webpack = require('webpack')
const merge = require('webpack-merge')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.common.js')
const { htmlOptions } = require('./build.config.js')

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
    new HtmlWebpackPlugin({
      ...htmlOptions,
      template: './templates/index.dev.pug'
    }),
   // new webpack.HotModuleReplacementPlugin(),
  ]
})
