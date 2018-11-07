import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setHeaderState } from './../../state/actions'
import { headerFooterShared } from '../../styles/mixins'
import { heights, colors } from './../../styles/theme.json'
import { meta_defaults } from './../../config.json'
import Menu from '../menus/Menu'
import Logo from './Logo'
import NavDots from './NavDots'

const HeaderHorizontal = (props) =>
  <HeaderWrapper  className={[
      !props.header_state ? `hide` : ``,
      (props.direction === 'down') ? `scrolling` : ``
    ].join(' ')}>
    <HeaderInner className={`header-inner`} bgcolor={colors.header_bg_color}>
      <Logo theme={'a'} title={meta_defaults.title}/>
      <Menu location={0} orientation={props.orientation} navLocation={'header'}/>
    </HeaderInner>
    <NavDots/>
  </HeaderWrapper>

export default connect(
  state => ({
    header_state: state.header_state,
    direction: state.scroll_direction
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setHeaderState(bool))
  })
)(HeaderHorizontal)

/* STYLES */
const HeaderWrapper = styled.header`
  width: 100vw;
  height: ${heights.header};
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  overflow: hidden;
  &.hide {
    .header-inner {
      opacity: 0;
      transform: translateY(-${heights.header});
    }
    .nav-dots {
      opacity: 1;
      transform: translateX(0);
    }
  }
  &.scrolling {
    .header-inner {
      opacity: 0;
      transform: translateY(-${heights.header});
    }
    .nav-dots {
      opacity: 1;
      transform: translateX(0);
    }
  }
  &:hover {
    .header-inner {
      opacity: 1!important;
      transform: translateY(0)!important;
    }
    .nav-dots {
      opacity: 0;
      transform: translateX(3rem);
    }
  }
`

const HeaderInner = styled.div`
  ${headerFooterShared(colors.header_type_color)};
  background-color: ${props => props.bgcolor};
`
