const fs = require('fs-extra');
const fetch = require('isomorphic-fetch');
const getDirname = require('path').dirname;
const config = require('./../src/config.json');

console.log(getDirname);

const file = '/dist/data.json'

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
  // console.log(payload)
  fs.writeJson('./dist/data.json', payload)
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
