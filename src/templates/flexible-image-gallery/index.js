import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themeB } from './../../styles/theme'
import { Section, H1, H2, StyledMarkup, PadWrapper } from './../../styles/components'
import { pageData } from './../../components';

export default pageData((props) => {
  return (
    <Section>
      <ThemeProvider theme={themeA}>
        <PadWrapper>
          <H1>{props.title}</H1>
          {(props.content.short_description) && <H2>{props.content.short_description}</H2>}
          <StyledMarkup className={'pad-top'} dangerouslySetInnerHTML={{__html: props.content.description }}/>
        </PadWrapper>
      </ThemeProvider>
    </Section>
  )
})