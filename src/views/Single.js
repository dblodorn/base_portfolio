import React from 'react'
import { Section, H1, H2, P } from './../styles/components'
import { pageData } from './../components';

export default pageData((props) => {
  return (
    <Section>
      <H1>{props.template}</H1>
      <H2>SinglePost: {props.title}</H2>
    </Section>
  )
})