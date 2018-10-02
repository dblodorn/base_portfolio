export default (state = false, action) => {
  switch (action.type) {
    case 'API_DATA':
      return action.payload
    default:
      return state
  }
}
