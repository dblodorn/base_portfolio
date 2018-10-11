import React, { Fragment } from 'react'
import { Video, PostBasics, Section } from './../../components'


export default pageData((props) => {
  console.log(props)
  return (
    <Fragment>
      <PostBasics data={props}/>
      <Video coverUrl={item.thumbnail} videoUrl={item.video_url}/>
    </Fragment>
  )
})