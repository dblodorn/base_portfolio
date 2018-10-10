import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { setMenuState } from './../state/actions'
import { flexColumn, shadow, media, fixedTopLeft, buttonInit } from './../styles/mixins'
import { colors, spacing, fonts } from './../styles/theme.json'
import Close from './utils/Close'

const MainMenu = (props) => {
  return (
    <Fragment>
      <MenuBar className={(props.menu) && 'active'}>
        <MenuButton onClick={() => props.set_menu(true)}>
          <span>menu</span>
        </MenuButton>
      </MenuBar>
      <MenuWrapper className={(props.menu) && 'active'}>
        <Close color={colors.pink} clickFunction={() => props.set_menu(false)}/>
        <NavWrapper className={(props.menu) && 'active'}>
          <Nav>
            {props.content.menu.map((item, i) =>
              <NavLink to={item.slug} color={item.color} key={item.slug + i} onClick={() => props.set_menu(false)}>
                <span>{item.title}</span>
              </NavLink>
            )}
          </Nav>
        </NavWrapper>
      </MenuWrapper>
    </Fragment>
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
  ${shadow};
  width: calc(100vw - 25rem);
  height: 100vh;
  overflow: hidden;
  transform: translateX(-100vw);
  z-index: 10000;
  transition: transform 500ms ease;
  will-change: transform;
  &.active {
    transform: translateX(0);
  }
`

const MenuBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${spacing.left_desk};
  height: 100vh;
  background-color: ${colors.dk_blue};
  padding-left: 2px;
  display: flex;
  justify-content: center;
  z-index: 100;
  transform: translateX(0);
  transition: transform 250ms ease;
  will-change: transform;
  &.active {
    transform: translateX(-${spacing.left_desk});
  }
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
  line-height: 1;
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
  width: 100vw;
  height: 100vh;
  background-color: ${colors.blue};
  overflow: hidden;
`

const Nav = styled.nav`
  ${flexColumn};
  ${fixedTopLeft};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const NavLink = styled(Link)`
  font-size: 25vh;
  font-family: ${fonts.sans};
  line-height: .8;
  font-weight: bold;
  letter-spacing: -4px;
  color: ${colors.lt_blue};
  text-decoration: none;
  position: relative;
  cursor: e-resize;  
  transition: transform 350ms ease, color 350ms ease;
  will-change: transform, color;
  &:hover {
    color: ${props => props.color};
  }
  ${media.touch`
    color: ${colors.lt_blue};
  `}
`