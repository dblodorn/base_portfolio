import React from 'react'
import { Section, H1, H2, StyledMarkup, PadWrapper } from './../../styles/components'
import { pageData } from './../../components';

export default pageData((props) => {
  return (
    <Section>
      <PadWrapper>
        <H1>{props.title}</H1>
        {(props.content.short_description) && <H2>{props.content.short_description}</H2>}
        <StyledMarkup dangerouslySetInnerHTML={{__html: props.content.description }}/>
      </PadWrapper>
    </Section>
  )
})