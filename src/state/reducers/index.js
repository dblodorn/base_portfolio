import { combineReducers } from 'redux'
import { apiData, taxonomyData, themeData } from './apiData'
import { resizeState, menuState, fontState, touchState, modalState } from './r_window_data'
import { pageState, setVideoState } from './r_content-state'
import content from './content'

const rootReducer = combineReducers({
  api_data: apiData,
  themes: themeData,
  taxonomy_data: taxonomyData,
  resize_state: resizeState,
  fonts_loaded: fontState,
  touch_state: touchState,
  modal: modalState,
  menu: menuState,
  content: content,
  page: pageState,
  video_playing: setVideoState
})

export default rootReducer
