import React, { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import { setMenuState } from './../../state/actions'
import { StyledLink } from './../../styles/components'
import { flexRowCenteredVert, bodyType } from './../../styles/mixins'
import { heights, spacing, colors } from './../../styles/theme.json'
import Menu from './../menus/Menu'
import { meta_defaults } from './../../config.json'

const HorizontalMenu = (props) =>
  <Fragment>
    <Logo to={'/'}>
      <span>{meta_defaults.title}</span>
    </Logo>
    <Menu location={0}/>
  </Fragment>

const HeaderDesk = (props) => {
  return(
    <Transition from={{ opacity: 0, transform: `translateY(-${heights.header})` }} enter={{ opacity: 1, transform: `translateY(0})` }} leave={{ opacity: 0, transform: `translateY(-${heights.header})`, pointerEvents: 'none' }}>
      {props.header_state && (styles => <HeaderWrapperHorizontal style={styles}><HorizontalMenu/></HeaderWrapperHorizontal>)}
    </Transition>
  )
}

export default connect(
  state => ({
    header_state: state.header_state,
    header_style: state.header_style
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(HeaderDesk)

/* STYLES */
const HeaderWrapperHorizontal = styled.header`
  width: 100vw;
  ${flexRowCenteredVert};
  height: ${heights.header};
  padding: 0 ${spacing.double_pad};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  border-bottom: 1px solid ${colors.black};
  background-color: ${colors.header_bg_color};
  * {
    color: ${colors.header_type_color}!important;
  }
`

const Logo = styled(StyledLink)`
  ${bodyType};
`
