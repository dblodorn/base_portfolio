const webpack = require('webpack')
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const config = require('./../src/config.json')

// CLEAN STUFF OUT
const pathsToClean = ["dist"]
const cleanOptions = {
  exclude: ['_redirects'],
  verbose: true,
  dry: false
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(
      pathsToClean,
      cleanOptions
    ),
    new HtmlWebpackPlugin({
      title: config.meta_defaults.title,
      description: config.meta_defaults.description,
      bgcolor: config.meta_defaults.bgcolor,
      site_url: config.meta_defaults.site_url,
      keywords: config.meta_defaults.keywords,
      template: './templates/index.pug',
      inject: false
    }),
  ],
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    filename: '[name].[hash].js'
  },
}
