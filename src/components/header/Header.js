import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import HeaderDesk from './HeaderDesk'
import HeaderMobile from './HeaderMobile'
import { breakpoints } from './../../styles/theme.json'

const Header = (props) =>
  <Fragment>
    {(props.resize_state.window_width >= breakpoints.desktop)
      ? <HeaderDesk/>
      : <HeaderMobile/>
    }
  </Fragment>

export default connect(
  state => ({
    resize_state: state.resize_state
  })
)(Header)
