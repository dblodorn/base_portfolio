import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themeB } from './../styles/theme'
import { spacing, heights } from './../styles/theme.json'
import { H1, StyledMarkup, Section, Article } from './../styles/components'
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
          <Article className={props.data.container_width}> 
            <H1>{props.data.title}</H1>
            <StyledMarkup dangerouslySetInnerHTML={{__html: props.data.description }}/>
          </Article>
        </PostBasicsSection>
      </ThemeProvider>
    }
  </Fragment>

// STYLES
const PostBasicsSection = styled(Section)`
  background-color: ${props => props.theme.top_bg_color};
  padding-top: calc(${heights.header} + ${spacing.double_pad});
  padding-bottom: ${spacing.double_pad};
  ${media.desktopNav`
    padding-top: ${spacing.double_pad};
  `}
`