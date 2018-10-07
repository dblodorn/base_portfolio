import React, { Fragment } from 'react'
import { Section, H1, StyledMarkup } from './../../styles/components'
import { pageData, PostBasics } from './../../components';

export default pageData((props) => {
  console.log(props)
  return (
    <Fragment>
      <PostBasics data={props}/>
    </Fragment>
  )
})