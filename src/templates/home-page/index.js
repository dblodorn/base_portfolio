import React from 'react'
import { Section, H1, StyledMarkup } from './../../styles/components'
import { pageData } from './../../components';

export default pageData((props) => {
  return (
    <Section>
      <H1>{props.title}</H1>
      <StyledMarkup dangerouslySetInnerHTML={{__html: props.content.description }}/>
    </Section>
  )
})