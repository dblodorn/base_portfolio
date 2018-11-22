const config = require('./../src/config.json')

const pathsToClean = [
  'dist'
]

const cleanOptions = {
  exclude: ['_redirects'],
  verbose: true,
  dry: false
}

const htmlOptions = {
  title: config.meta_defaults.title,
  description: config.meta_defaults.description,
  bgcolor: config.meta_defaults.bgcolor,
  site_url: config.meta_defaults.site_url,
  keywords: config.meta_defaults.keywords,
  inject: false,
}

module.exports = {
  pathsToClean,
  cleanOptions,
  htmlOptions
}