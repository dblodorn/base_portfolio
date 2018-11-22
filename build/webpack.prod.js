const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const WebpackShellPlugin = require("webpack-shell-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const common = require('./webpack.common.js')
const {
  pathsToClean,
  cleanOptions,
  htmlOptions
} = require('./build.config.js')

module.exports = merge(common, {
  plugins: [
    new Dotenv({
      path: './.prod.env'
    }),
    new CleanWebpackPlugin(
      pathsToClean,
      cleanOptions
    ),
    new CopyWebpackPlugin([
      { from: './assets/**/*', to: './' }
    ]),
    new HtmlWebpackPlugin({
      ...htmlOptions,
      template: './templates/index.prod.pug'
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new SWPrecacheWebpackPlugin({
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          return;
        }
        console.log(message);
      },
      minify: true, // minify and uglify the script
      navigateFallback: '/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new WebpackShellPlugin({
      onBuildStart: [
        'echo "Webpack Start"',
        'npm run json',
      ],
      onBuildEnd: [
        'echo "Webpack End"'
      ]
    })
  ]
})
