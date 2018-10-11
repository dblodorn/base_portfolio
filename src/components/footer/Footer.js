import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import { setMenuState } from './../../state/actions'
import { flexColumn, mainPadding, media } from '../../styles/mixins'
import Menu from './../menus/Menu'
import { heights, colors } from './../../styles/theme.json'

const Footer = (props) =>
  <Transition from={{ opacity: 0, transform: `translateY(${heights.footer})` }} enter={{ opacity: 1, transform: `translateY(0})` }} leave={{ opacity: 0, transform: `translateY(${heights.footer})`, pointerEvents: 'none' }}>
    {props.footer_state && (styles => 
      <FooterWrapper style={styles}>
        <Menu location={1}/>
      </FooterWrapper>
    )}
  </Transition>

export default connect(
  state => ({
    footer_state: state.header_state,
    header_style: state.header_style
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(Footer)

// STYLES
const FooterWrapper =  styled.footer`
  ${flexColumn};
  ${mainPadding};
  border-top: 1px solid ${colors.black};
  justify-content: center;
  width: 100vw;
  position: relative;
  z-index: 100;
  background-color: ${colors.footer_bg_color};
  * {
    color: ${colors.footer_type_color}!important;
  }
  ${media.desktopNav`
    height: ${heights.footer};
  `}
`
