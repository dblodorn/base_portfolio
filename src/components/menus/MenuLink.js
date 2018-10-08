import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { StyledLink, NavItem } from './../../styles/components'
import { setMenuState } from './../../state/actions'
import { media, smallType } from './../../styles/mixins'

// (props.cardData.post_type === 'page') ? `/${props.cardData.slug}` : `/${props.cardData.post_type}/${props.cardData.slug}`

const returnLink = (slug, subroute) => {
  if (subroute) {
    return `/${subroute}/${slug}`
  } else {
    return `/${slug}`
  }
}

const Menulink = (props) => {
  return (
    <NavItem className={(`/${props.path}` == `${props.route}`) ? 'active' : null}>
      <NavLink to={returnLink(props.path, props.sub_route)} onClick={() => props.menu_toggle(false)}>
        <span dangerouslySetInnerHTML={{__html: props.page }}/>
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
)(Menulink)

// STYLES
const NavLink = styled(StyledLink)`
  ${smallType}
`
