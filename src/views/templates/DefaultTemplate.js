import React from 'react'
import { Section, H1 } from './../../styles/components'
import { withStore } from './../../components';

export default withStore((props) =>
  <Section>
    <H1>Default Template</H1>
  </Section>
)