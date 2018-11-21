import fetch from 'isomorphic-fetch'

export default () => {
  return new Promise((resolve, reject) => {
    fetch(process.env.API_ENDPOINT, {
      method: 'GET'
    })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}
