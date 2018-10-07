const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecache = require('sw-precache-webpack-plugin')

const config = require('./src/config.json');

const pathsToClean = [
  'dist'
]

const cleanOptions = {
  exclude: ['_redirects'],
  verbose: true,
  dry: false
}

module.exports = (env) => {
  console.log(env);
  return { 
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js']
    },
    output: {
      filename: '[name].[hash].js'
    },
    devServer: {
      publicPath: '/',
      historyApiFallback: true,
      noInfo: true,
      overlay: true
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
        template: './templates/index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CopyWebpackPlugin([
        { from: './assets/**/*', to: './' }
      ]),
            /*
      new SWPrecache({
        cacheId: "dmbk-archive-app",
        filepath: 'service-worker.js', // place it on the root
        staticFileGlobs: [
          'index.html',
          'manifest.json',
          'dist/*.{js,css}'
        ],
        stripPrefix: '/' // removes the dist/ path
      })*/
    ]
  };
};