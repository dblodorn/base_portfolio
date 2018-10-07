import React from 'react'
import { Section, H1, StyledMarkup } from './../../styles/components'
import { pageData, PostBasics } from './../../components';

export default pageData((props) => {
  return (
    <PostBasics data={props}/>
  )
})