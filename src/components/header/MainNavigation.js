import React from 'react'
import styled from 'styled-components'
import { flexRow, flexColumn,  media } from './../../styles/mixins'
import withStore from './../HOC/withStore'
import HeaderLink from './HeaderLink'
import { breakpoints } from './../../styles/theme.json'

export default withStore((props) => {
  const buildNav = (data) => {
    return data.map((item, i) => {
      if (!item.is_home) {
        return(
          <HeaderLink Page={item.title} Path={item.slug} key={`${i}-${item.id}`}/>
        )
      }
    })
  }
  return (
    <NavList>
      {(props.resize_state.window_width < breakpoints.desktop) && <HeaderLink Page={'Home'} Path={'/'}/>}
      {(props.api_data) && buildNav(props.api_data.main_nav)}
    </NavList>
  )
})

// STYLES
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