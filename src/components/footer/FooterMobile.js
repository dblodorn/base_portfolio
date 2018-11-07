import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setMenuState } from './../../state/actions'
import { flexColumn, microType, media, flexRowCenteredVert } from '../../styles/mixins'
import Menu from './../menus/Menu'
import { heights, colors, spacing, widths } from './../../styles/theme.json'

const FooterMobile = (props) =>
  <FooterWrapper bgcolor={colors.header_bg_color}>
    <Menu location={1} navLocation={'footer'} orientation={props.orientation}/>
  </FooterWrapper>

export default connect(
  state => ({
    header_style: state.header_style,
    header_state: state.header_state,
    direction: state.scroll_direction
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(FooterMobile)

// STYLES
const FooterWrapper =  styled.footer`
  ${flexColumn};
  padding: ${spacing.double_pad} ${spacing.single_pad} ${spacing.big_pad};
  justify-content: center;
  width: 100vw;
  z-index: 100;
  background-color: ${props => props.bgcolor};
  transition: background-color 1000ms ease-in-out, transform 300ms ease-in-out, opacity 300ms ease-in-out;
  will-change: background-color, transform, opacity;
  position: relative;
  * {
    ${microType};
    color: ${colors.white};
  }
`
