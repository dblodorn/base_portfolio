import fetch from 'isomorphic-fetch'
import { api_endpoint } from './../../config.json'

const dataController = (endpoint) => {
  return new Promise((resolve, reject) => {
    fetch(endpoint, {
      method: 'GET'
    })
    .then(res => resolve(res))
    .catch(err => reject(err))
  })
}

export function apiData(payload) {
  return {
    type: 'API_DATA',
    payload
  }
}

export default () => {
  return (dispatch) => {
    const _dataHandler = (payload) => {
      dispatch(apiData(payload))
    }
    dataController(api_endpoint)
      .then(response => response.json())
      .then((payload) => _dataHandler(payload))
  }
}
