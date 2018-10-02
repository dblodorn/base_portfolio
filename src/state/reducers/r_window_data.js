const resizeState = (state = {}, action) => {
  switch (action.type) {
    case 'RESIZE_STATE':
      return action.resize_state
    default:
      return state
  }
}

const menuState = (state = false, action) => {
  switch (action.type) {
    case 'MENU_STATE':
      return action.bool
    default:
      return state
  }
}

const fontState = (state = false, action) => {
  switch (action.type) {
    case 'FONTS_LOADED':
      return action.bool
    default:
      return state
  }
}

const touchState = (state = false, action) => {
  switch (action.type) {
    case 'HAS_TOUCH':
      return action.bool
    default:
      return state
  }
}

export {
  resizeState,
  menuState,
  fontState,
  touchState
}
