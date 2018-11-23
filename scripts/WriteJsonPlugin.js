const chalk = require('chalk');
const fs = require('fs-extra');
const fetch = require('isomorphic-fetch');
const config = require('./../src/config.json');

class WriteJsonPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('HelloAsyncPlugin', (compilation, callback) => {
      setTimeout(function () {

        const fetchData = () => {
          return new Promise((resolve, reject) => {
            fetch(config.wp_endpoint, {
              method: 'GET'
            })
              .then(res => resolve(res))
              .catch(err => reject(err))
          })
        }
      
        const dataHandler = (payload) => {
          fs.writeJson(`./dist/data.${compilation.hash}.json`, payload)
            .then(() => {console.log('success!')})
            .catch(err => {console.error(err)})
        }

        fetchData()
          .then(response => response.json())
          .then((payload) => dataHandler(payload))

        console.log(chalk.blue(' Done building data.json'));
        
        /*compilation.assets[`data.${compilation.hash}.json`] = {
          source: source,
          size: source
        };*/
        callback();
      }, 1000);
    });
  }
}

module.exports = WriteJsonPlugin;
