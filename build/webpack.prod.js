const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const WebpackShellPlugin = require("webpack-shell-plugin")
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const Dotenv = require('dotenv-webpack')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  plugins: [
    new Dotenv({
      path: './.prod.env'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: './assets/**/*', to: './' }
    ]),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new SWPrecacheWebpackPlugin({
      // By default, a cache-busting query parameter is appended to requests
      // used to populate the caches, to ensure the responses are fresh.
      // If a URL is already hashed by Webpack, then there is no concern
      // about it being stale, and the cache-busting can be skipped.
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          // This message occurs for every build and is a bit too noisy.
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
