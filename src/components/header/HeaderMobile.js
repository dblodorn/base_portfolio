import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MainNavigation from './MainNavigation'
import { setMenuState } from './../../state/actions'
import { flexColumn, defaultLink, buttonInit, scrollPanel } from './../../styles/mixins'
import { heights, spacing, colors } from './../../styles/theme.json'

const HeaderMobile = (props) => {
  return (
    <HeaderWrapper>
      {
        (props.menu)
        ? <MobileButton onClick={() => props.menu_toggle(false)}>Close</MobileButton>
        : <MobileButton onClick={() => props.menu_toggle(true)}>Menu</MobileButton>
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
`

const MobileButton = styled.button`
  ${defaultLink};
  ${buttonInit};
  position: fixed;
  top: 2.5rem;
  right: 2rem;
  z-index: 10000;
`
