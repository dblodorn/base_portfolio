import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setMenuState } from './../../state/actions'
import { headerFooterShared } from '../../styles/mixins'
import Menu from './../menus/Menu'
import { heights, colors, spacing, widths } from './../../styles/theme.json'

const FooterDesk = (props) =>
  <FooterWrapper className={[
    props.orientation,
    !props.header_state ? `hide` : ``,
    (props.direction === 'down') ? `scrolling` : ``
  ].join(' ')}>
    <FooterInner className={`footer-inner`} bgcolor={colors.header_bg_color}>
      <Menu location={1} navLocation={'footer'} orientation={props.orientation}/>
    </FooterInner>
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
)(FooterDesk)

// STYLES
const FooterWrapper =  styled.footer`
  display: block;
  z-index: 9000;
  overflow: hidden;
  width: 100vw;
  height: ${heights.footer};
  padding-bottom: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  &.sidebar {
    padding-left: calc(${widths.sidebar_desktop} + ${spacing.double_pad});
  }
  &.hide {
    .footer-inner {
      opacity: 0;
      transform: translateY(${heights.footer});
    }
  }
  &.scrolling {
    .footer-inner {
      opacity: 0;
      transform: translateY(${heights.footer});
    }
  }
  &:hover {
    .footer-inner {
      opacity: 1!important;
      transform: translateY(0)!important;
    }
  }
`

const FooterInner = styled.div`
  ${headerFooterShared(colors.header_type_color)};
  background-color: ${props => props.bgcolor};
  justify-content: flex-end;
`