import React, { Fragment } from 'react'
import styled from 'styled-components'
import { LogoWrapperFixed, animationFadeIn, media } from './../styles'
import { breakpoints, spacing } from './../styles/theme.json'
import withStore from '../HOC/withStore'
import Logo from './Logo'

export default withStore(props => {
  return (
    <Header className={(props.menu) && 'menu-active'}>
      <Logo/>
    </Header>
  )
})

// STYLES
const Header = styled.header`
  ${animationFadeIn(250, 0)};
  z-index: 9000;
  display: block;
  position: absolute;
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 9000;
  ${media.medium`
    top: 2rem;
    right: 2rem;
  `}
`