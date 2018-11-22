const chalk = require('chalk');
const fs = require('fs-extra');
const fetch = require('isomorphic-fetch');
const config = require('./../src/config.json');

const fetchDataPlug = (options) => {
  
  console.log(chalk.blue(options.hash))
  
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
    fs.writeJson(`./dist/data.${options.hash}.json`, payload)
      .then(() => {
        console.log('success!')
      })
      .catch(err => {
        console.error(err)
      })
  }
  
  fetchData()
    .then(response => response.json())
    .then((payload) => dataHandler(payload))
}

module.exports = fetchDataPlug