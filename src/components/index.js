// Higher Order Co./utils/Headts
import withStore from './HOC/withStore'
import pageData from './HOC/pageData'

// Layout Components
import Header from './header/Header'
import Footer from './footer/Footer'
import PostBasics from './PostBasics'

// Utility Components
import Head from './utils/Head'
import BgImage from './utils/BgImage'
import FitImage from './utils/FitImage'
import SimpleVideo from './utils/SimpleVideo'

// Plugin Compnents - most have external dependencies
//import MailScrape from './plugins/MailScrape'
import Carousel from './plugins/Carousel'
import Video from './plugins/Video'

export {
  withStore,
  pageData,
  Head,
  BgImage,
  FitImage,
  SimpleVideo,
  Header,
  Footer,
  PostBasics,
  Video,
  // MailScrape,
  Carousel
}