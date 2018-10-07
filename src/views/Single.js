import React from 'react'
import { pageData } from './../components';
import { 
  PortfolioItem,
  FlexibleImageGallery,
  PostCollectionTemplate, 
  HomeTemplate,
  VideoGrid
} from './../templates'

export default pageData((props) => {
  return (
    (props.template === 'portfolio-item')
    ? <PortfolioItem/> :
    (props.template === 'flexible-image-gallery')
    ? <FlexibleImageGallery/> :
    (props.template === 'post-collection')
    ? <PostCollectionTemplate/> :
    (props.template === 'video-grid')
    ? <VideoGrid/> :
    (props.template === 'home')
    ? <HomeTemplate/> :
    false
  )
})