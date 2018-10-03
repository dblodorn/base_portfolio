import React from 'react'
import { Section, H1, H2 } from './../styles/components'
import { pageData } from './../components';

export default pageData((props) =>
  <Section>
    <H1>{props.title}</H1>
    <H2>Default Template</H2>
  </Section>
)