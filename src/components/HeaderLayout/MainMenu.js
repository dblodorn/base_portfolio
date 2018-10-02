import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { setMenuState } from '../../state/actions'
import { flexColumn, headerCss, media, fixedTopLeft, buttonInit, bodyType } from './../styles'
import { colors, breakpoints, spacing, fonts } from './../styles/theme.json'
import withStore from '../HOC/withStore'
import Close from '../utils/Close'

const MainMenu = (props) => {
  return (
    <MenuWrapper className={(props.menu) && 'active'}>
      <MenuBar>
        <MenuButton onClick={() => props.set_menu(true)}>
          <span>menu</span>
        </MenuButton>
      </MenuBar>
      <NavWrapper className={(props.menu) && 'active'}>
        <Close color={colors.pink} ClickFunction={() => props.set_menu(false)}/>
        <Nav>
          {props.content.menu.map((item, i) =>
            <NavLink to={item.slug} color={item.color} key={item.slug + i} onClick={() => props.set_menu(false)}>
              <span>{item.title}</span>
            </NavLink>
          )}
        </Nav>
      </NavWrapper>
    </MenuWrapper>
  )
}

export default connect(
  state => ({
    resize_state: state.resize_state.window_width,
    menu: state.menu,
    content: state.content
  }),
  dispatch => ({
    set_menu: (bool) => dispatch(setMenuState(bool))
  })
)(MainMenu)

// STYLES
const MenuWrapper = styled.menu`
  ${fixedTopLeft};
  width: calc(75vw + ${spacing.left_desk});
  height: 100vh;
  overflow: hidden;
  transform: translateX(-75vw);
  z-index: 10000;
  transition: transform 500ms ease;
  will-change: transform;
  &.active {
    transform: translateX(0);
  }
`

const MenuBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${spacing.left_desk};
  height: 100vh;
  background-color: ${colors.dk_blue};
  padding-left: 2px;
  display: flex;
  justify-content: center;
`

const MenuButton = styled.button`
  ${buttonInit};
  color: ${colors.white};
  font-family: ${fonts.sans};
  font-weight: bold;
  letter-spacing: -1px;
  position: absolute;
  top: 2rem;
  font-size: 5vmin;
  line-height: .8;
  transition: color 350ms ease;
  will-change: color;
  margin: 0 auto;
  &:hover {
    color: ${colors.pink};
  }
  span {
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
  }
`

const NavWrapper = styled.div`
  ${fixedTopLeft};
  width: 75vw;
  height: 100vh;
  background-color: ${colors.blue};
`

const Nav = styled.nav`
  ${flexColumn};
  ${fixedTopLeft};
  width: 75vw;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
`

const NavLink = styled(Link)`
  ${headerCss};
  color: ${colors.lt_blue};
  text-decoration: none;
  position: relative;
  cursor: e-resize;  
  transition: transform 350ms ease, color 350ms ease;
  will-change: transform, color;
  &:hover {
    color: ${props => props.color};
    transform: skewX(-15deg);
  }
  ${media.touch`
    color: ${colors.lt_blue};
  `}
`