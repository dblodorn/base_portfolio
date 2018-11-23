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
  htmlOptions
} = require('./build.config.js')

const pathsToClean = [
  './dist'
]

const cleanOptions = {
  exclude: ['_redirects'],
  verbose: true,
  dry: false
}

const WriteJsonPlugin = require('./../scripts/WriteJsonPlugin');

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
    new WriteJsonPlugin({ options: true }),
    new HtmlWebpackPlugin({
      ...htmlOptions,
      template: './templates/index.prod.pug'
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      seed: {
        'data.${stats.hash}.json'
      }
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
        'echo "Webpack Start"'
      ],
      onBuildEnd: [
        'echo "Webpack End"',
        // 'npm run json'
      ]
    })
  ]
})
