import fetchWpDataController from './../../controllers/fetchWpDataController'

export function apiData(payload) {
  return {
    type: 'API_DATA',
    payload
  }
}

export default () => {
  return (dispatch) => {
    const _dataHandler = (payload) => {
      console.log(payload)
      dispatch(apiData(payload))
    }
    fetchWpDataController()
      .then(response => response.json())
      .then((payload) => _dataHandler(payload))
  }
}
