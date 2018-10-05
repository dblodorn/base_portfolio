import React from 'react'
import { Section, H1, H2, P } from './../../styles/components'
import { pageData } from './../../components';

export default pageData((props) => {
  console.log(props)
  return (
    <Section>
      <H1>{props.title}</H1>
      <H2>{props.content.short_description}</H2>
      <P>{props.content.description}</P>
    </Section>
  )
})