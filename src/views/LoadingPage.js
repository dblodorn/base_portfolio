import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Section, H1, Main, PadWrapper } from './../styles/components'
import { themeA, themeB } from './../styles/theme'

export default () =>
  <Main>
    <Section>
      <ThemeProvider theme={themeB}>
        <PadWrapper>
          <H1>Loading</H1>
        </PadWrapper>
      </ThemeProvider>
    </Section>
  </Main>
