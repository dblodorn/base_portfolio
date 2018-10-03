import { navigation } from './navigation.json'
import pages from './pages.js'

const models = {
  navigation: {
    ...navigation
  },
  pages: [
    ...pages
  ]
}

export default models
