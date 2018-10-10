import React, { Fragment } from 'react'
import { pageData, PostBasics } from './../components';
import HomeTemplate from './home-page/HomePage'
import PostCollectionTemplate from './post-collection/PostCollection'
import FlexibleImageGallery from './flexible-image-gallery/FlexibleImageGallery'
import VideoGrid from './video-grid/VideoGrid'
import { NotFound } from './../views'

export default pageData((props) => {
  console.log(props)
  return (
    <Fragment>
      <PostBasics data={props}/>
      {
        (props.template === 'flexible-image-gallery')
        ? <FlexibleImageGallery data={props}/> :
        (props.template === 'post-collection')
        ? <PostCollectionTemplate data={props}/> :
        (props.template === 'video-grid')
        ? <VideoGrid data={props}/> :
        (props.template === 'home')
        ? <HomeTemplate data={props}/>
        : <NotFound/>
      }
    </Fragment>
  )
})