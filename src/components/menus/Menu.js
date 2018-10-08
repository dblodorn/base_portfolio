import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MenuLink from './MenuLink'
import { flexRow, flexColumn, flexCenteredAll, media, defaultLink, smallType } from './../../styles/mixins'
import { NavItem } from './../../styles/components'
import { breakpoints } from './../../styles/theme.json'

const Menu = (props) => {
  const buildNav = (data) => {
    return data.map((item, i) => {
      if (!item.is_home && !item.external_link) {
        return (
          <MenuLink page={item.title} path={item.slug} sub_route={item.sub_route} key={`${i}-${item.id}`}/>
        )
      } else if (item.external_link) {
        return (
          <NavItem key={`${i}-${item.id}`}>
            <ExternalLink href={item.url} target='_blank'><span>{item.title}</span></ExternalLink>
          </NavItem>
        )
      }
    })
  }
  return (
    <MenuWrapper>
      <NavList>
        {((props.window_width < breakpoints.desktop) && props.api_data.menus[0]) && <MenuLink page={'Home'} path={''}/>}
        {(props.api_data) && buildNav(props.api_data.menus[props.location].items)}
      </NavList>
    </MenuWrapper>
  )
}

export default connect(
  state => ({
    window_width: state.resize_state.window_width,
    api_data: state.api_data
  })
)(Menu)

// STYLES
const MenuWrapper = styled.menu`
  ${flexCenteredAll};
  height: 100%;
  padding-bottom: .5rem;
  ${media.desktopNav`
    margin-left: auto;
  `}
`

const NavList = styled.ul`
  ${flexColumn};
  position: relative;
  text-align: center;
  ${media.desktopNav`
    ${flexRow};
    margin-left: auto;
    transform: translateY(4px);
  `}
`

const ExternalLink = styled.a`
  ${defaultLink};
  ${smallType};
`
