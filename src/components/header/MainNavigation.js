import React from 'react'
import styled from 'styled-components'
import { flexRow, flexColumn,  media } from './../../styles/mixins'
import withStore from './../HOC/withStore'
import HeaderLink from './HeaderLink'

export default withStore((props) => {
  const NavItems = props.content.menu.map((item, i) =>
    <HeaderLink Page={item.title} Path={item.slug} key={`hn-${i}-${item.slug}`}/>
  )
  return (
    <NavList>
      {NavItems}
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