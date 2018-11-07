import React, { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Menu from './../menus/Menu'
import MenuLink from './../menus/MenuLink'
import { setMenuState } from './../../state/actions'
import { CloseWrapper } from './../../styles/components'
import { flexColumn, mobileMenuTransition, buttonInit, scrollPanel, microType, flexRowCenteredAll, flexRowCenteredVert, smallType } from './../../styles/mixins'
import { heights, spacing, colors } from './../../styles/theme.json'
import Close from './../utils/Close'
import Logo from './Logo'
import { meta_defaults } from './../../config.json'

const HeaderMobile = (props) => {
  return (
    <Fragment>
      <HeaderWrapper
        className={[
          props.menu ? `hide` : ``,
          (props.direction === 'down') ? `scrolling` : ``
        ].join(' ')}
        bgcolor={colors.header_bg_color}
      >
        <Logo theme={'a'} title={meta_defaults.title}/>
        <MobileButton onClick={() => props.menu_toggle(true)}><span>Menu</span></MobileButton>
      </HeaderWrapper>
      <InnerHeader className={props.menu && `show`} bgcolor={colors.header_bg_color}>
        <CloseWrapper>
          <Close clickFunction={() => props.menu_toggle(false)} color={colors.white} size={`3.5rem`} stroke={3} top={`auto`} position={`relative`}/>
        </CloseWrapper>
        <Menu location={0}>
          <MenuLink page={'Home'} path={''}/>
        </Menu>
      </InnerHeader>
    </Fragment>
  )
}

export default connect(
  state => ({
    menu: state.menu,
    direction: state.scroll_direction
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(HeaderMobile)

/* STYLES */
const HeaderWrapper = styled.header`
  ${flexRowCenteredVert};
  ${mobileMenuTransition};
  justify-content: flex-end;
  padding-top: 2px;
  width: 100vw;
  height: ${heights.mobile_header};
  background-color: ${props => props.bgcolor};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  &.hide {
    transform: translateX(100vw);
  }
  &.scrolling {
    transform: translateY(-${heights.mobile_header});
  }
  * {
    color: ${colors.header_type_color}!important;
    ${smallType};
  }
`

const InnerHeader = styled.div`
  ${flexColumn};
  ${scrollPanel};
  ${mobileMenuTransition};
  background-color: ${props => props.bgcolor};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 ${spacing.double_pad} 10rem;
  background-color: ${colors.header_bg_color};
  zoom: 0;
  z-index: 10000;
  transform: translateX(-100vw);
  &.show {
    transform: translateX(0);
  }
  * {
    color: ${colors.header_type_color}!important;
  }
`

const MobileButton = styled.button`
  ${buttonInit};
  ${microType};
  ${flexRowCenteredAll};
  text-decoration: none;
`
