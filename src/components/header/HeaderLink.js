import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { StyledLink } from './../../styles/components'
import { setMenuState } from './../../state/actions'
import { media, smallType } from './../../styles/mixins'
import { spacing, colors } from './../../styles/theme.json'

const HeaderLink = (props) => {
  return (
    <NavItem className={(`/${props.Path}` == `${props.route}`) ? 'active' : null}>
      <NavLink to={`/${props.Path}`} onClick={() => props.menu_toggle(false)}>
        <span dangerouslySetInnerHTML={{__html: props.Page }}/>
      </NavLink>
    </NavItem>
  )
}

export default connect(
  state => ({
    route: state.router.location.pathname
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(HeaderLink)

// STYLES
const NavLink = styled(StyledLink)`
  ${smallType}
`

const NavItem = styled.li`
  padding-bottom: ${spacing.double_pad};
  ${media.medium`
    padding-right: ${spacing.double_pad};
    padding-bottom: 0;
    &:last-child {
      padding-right: 0;
    }
  `}
  &.active {
    pointer-events: none!important;
    * { color: ${colors.active_color}; }
  }
`