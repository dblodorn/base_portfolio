import React from 'react'
import { Section, H1, H2 } from './../styles/components'
import { withStore } from '../components';

export default withStore((props) =>
  <Section>
    <H1>{props.content.meta_defaults.title}</H1>
    <H2>{props.content.meta_defaults.description}</H2>
  </Section>
)