import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, global } from './../styles/theme.json'
import { media } from './../styles'

export default () =>
  <LogoWrapper to={'/'}>
    <div>SITE LOGO</div>
  </LogoWrapper>

// STYLES
const LogoWrapper = styled(Link)`
  width: 18rem;
  display: block;
  z-index: 9000;
  svg {
    width: 100%;
    height: auto;
  }
  ${media.medium`
    width: 25vmin;
  `}
`