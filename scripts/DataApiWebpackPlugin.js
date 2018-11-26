const { RawSource } = require("webpack-sources");

class DataApiWebpackPlugin {
  
  constructor(options) {
    this.options = options;
    this.data = {};
  }

  apply(compiler) {
    
    const request = async () => {
      const response = await fetch('https://api-theme.dmbk.io/wp-json/api/v1/data/');
      const json = await response.json();
      console.log(json);
    }

    const { endpoint } = this.options;
    
    compiler.hooks.emit.tapAsync('DataApiWebpackPlugin', (compilation, cb) => {
      console.log(endpoint);
      cb();
    });
  }
}

module.exports = DataApiWebpackPlugin;