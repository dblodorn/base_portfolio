import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themeB } from './../styles/theme'
import { spacing, heights } from './../styles/theme.json'
import { H1, StyledMarkup, Section } from './../styles/components'
import { media } from './../styles/mixins'
import Head from './utils/Head'

const themes = {
  'a': themeA,
  'b': themeB
}

export default (props) => 
  <Fragment>
    <Head
      title={props.data.title}
      description={props.data.short_description}
    />
    {(props.data.top_content) &&
      <ThemeProvider theme={themes[props.data.theme]}>
        <PostBasicsSection>
          <H1>{props.data.title}</H1>
          <StyledMarkup className={'pad-top'} dangerouslySetInnerHTML={{__html: props.data.description }}/>
        </PostBasicsSection>
      </ThemeProvider>
    }
  </Fragment>

// STYLES
const PostBasicsSection = styled(Section)`
  background-color: ${props => props.theme.top_bg_color};
  padding-top: calc(${heights.header} + ${spacing.double_pad});
  padding-left: ${spacing.double_pad};
  padding-right: ${spacing.double_pad};
  padding-bottom: ${spacing.double_pad};
  ${media.desktopNav`
    padding-top: ${spacing.double_pad};
  `}
`