const pageState = (state =  null, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return action.slug
    default:
      return state
  }
}

export {
  pageState
}