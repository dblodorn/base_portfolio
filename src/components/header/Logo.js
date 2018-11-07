import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../styles/theme'
import { bodyType, flexRowCenteredVert } from './../../styles/mixins'
import { spacing, shared, heights } from './../../styles/theme.json'
import { StyledLink } from './../../styles/components'
import { meta_defaults } from './../../config.json'

export default (props) =>
  <ThemeProvider theme={themes[props.theme] || themeA}>
    <Logo to={'/'} className={props.orientation}>
      <span>{props.title}</span>
    </Logo>
  </ThemeProvider>

  const Logo = styled(StyledLink)`
  ${bodyType};
  ${flexRowCenteredVert};
  padding: 0;
  height: ${heights.header};
  padding-left: ${spacing.single_pad};
  position: absolute;
  top: 0;
  left: 0;
  &.sidebar {
    height: auto;
    width: 100%;
    padding: ${spacing.double_pad};
    border-bottom: ${shared.border_thin};
  }
`