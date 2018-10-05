import React from 'react'
import { Section, H1, H2 } from './../../styles/components'
import { pageData } from './../../components';

export default pageData((props) => {
  return (
    <Section>
      <H1>{props.title}</H1>
      <H2>Home Template</H2>
    </Section>
  )
})