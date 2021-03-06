// Higher Order Co./utils/Headts
import withStore from './HOC/withStore'
import pageData from './HOC/pageData'

// Layout Components
import Header from './header/Header'
import Footer from './footer/Footer'
import PostBasics from './PostBasics'
import Logo from './header/Logo'

// Utility Components
import FitImage from './utils/FitImage'
import SimpleVideo from './utils/SimpleVideo'
import PopupGrid from './PopupGrid'
import Spinner from './utils/Spinner'
import PlayButton from './utils/PlayButton'
import Close from './utils/Close'
import BackClose from './utils/BackClose'

// Modals
import SingleImageModal from './modals/SingleImageModal'
import SlideshowModal from './modals/SlideshowModal'
import VideoModal from './modals/VideoModal'

// Plugin Compnents - most have external dependencies
import MultimediaSlider from './carousel/MultimediaSlider'
import SimpleSlider from './carousel/SimpleSlider'
import Video from './video/Video'

export {
  withStore,
  pageData,
  FitImage,
  SimpleVideo,
  Header,
  Footer,
  PostBasics,
  SingleImageModal,
  VideoModal,
  Video,
  PopupGrid,
  Spinner,
  PlayButton,
  Close,
  BackClose,
  SimpleSlider,
  MultimediaSlider,
  Logo,
  SlideshowModal
}