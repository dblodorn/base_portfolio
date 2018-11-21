const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');
const config = require('./../src/config.json');

// CLEAN STUFF OUT
const pathsToClean = ["dist"];
const cleanOptions = {
  exclude: ['_redirects'],
  verbose: true,
  dry: false
};

module.exports = merge(common, {
  plugins: [
    new Dotenv({
      path: './.prod.env'
    }),
    new CleanWebpackPlugin(
      pathsToClean,
      cleanOptions
    ),
    new HtmlWebpackPlugin({
      title: config.meta_defaults.title,
      description: config.meta_defaults.description,
      bgcolor: config.meta_defaults.bgcolor,
      site_url: config.meta_defaults.site_url,
      template: './templates/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: './assets/**/*', to: './' }
    ]),
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
});
