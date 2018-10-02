import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import WebFont from 'webfontloader'
import throttle from 'lodash/throttle'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'
import rootReducer from './state/reducers'
import { fetchApiData, setResizeState, hasTouch, fontsLoaded } from './state/actions'
import App from './App'
import config from './config.json'

mixin(_, {
  throttle: throttle
})

let composeEnhancer
if (process.env.NODE_ENV === 'development') {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
} else {
  composeEnhancer = compose
}

// ROUTER & REDUX
const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
  ),
)

store.dispatch(fetchApiData())
const resizeHandler = () => {
  store.dispatch(setResizeState())
}

resizeHandler()
window.addEventListener('resize', _.throttle(resizeHandler, 50))
// Touch Detect
window.addEventListener('touchstart', function onFirstTouch() {
  document.body.classList.add('touch')
  store.dispatch(hasTouch(true))
  window.removeEventListener('touchstart', onFirstTouch, false)
}, false)
// Load Fonts
WebFont.load({
  custom: {
    families: config.fonts,
    urls: ['/static/fonts.css']
  },
  active: function() {
    store.dispatch(fontsLoaded(true))
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();