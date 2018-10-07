import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MainNavigation from './MainNavigation'
import { setMenuState } from './../../state/actions'
import { flexColumn, defaultLink, buttonInit, scrollPanel, microType, shadow, borderRadius, flexRowCenteredAll } from './../../styles/mixins'
import { heights, spacing, colors } from './../../styles/theme.json'

const HeaderMobile = (props) => {
  return (
    <HeaderWrapper>
      {
        (props.menu)
        ? <MobileButton onClick={() => props.menu_toggle(false)}><span>Close</span></MobileButton>
        : <MobileButton onClick={() => props.menu_toggle(true)}><span>Menu</span></MobileButton>
      }
      {props.menu &&
        <InnerHeader key="nav-wrapper" className="nav-wrapper__content">
          <MainNavigation/>
        </InnerHeader>
      }
    </HeaderWrapper>
  )
}

export default connect(
  state => ({
    menu: state.menu
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(HeaderMobile)

/* STYLES */
const HeaderWrapper = styled.header`
  width: 100vw;
  height: ${heights.mobile_header};
  padding: 0 ${spacing.double_pad};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  transition: opacity 750ms ease, transform 350ms ease;
  opacity: ${props => props.Opacity};
  transform: translateY(${props => props.Yposition});
  * {
    color: ${colors.header_type_color}!important;
  }
`

const InnerHeader = styled.div`
  ${flexColumn};
  ${scrollPanel};
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: ${spacing.double_pad};
  background-color: ${colors.header_bg_color};
`

const MobileButton = styled.button`
  ${defaultLink};
  ${buttonInit};
  ${microType};
  ${shadow};
  ${flexRowCenteredAll};
  ${borderRadius(`50%`)};
  width: 6rem;
  height: 6rem;
  padding-top: .2rem;
  text-transform: uppercase;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10000;
  background-color: ${colors.yellow};
`
