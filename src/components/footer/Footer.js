import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import FooterDesk from './FooterDesk'
import FooterMobile from './FooterMobile'
import { breakpoints } from './../../styles/theme.json'

const Footer = (props) =>
  <Fragment>
    {(props.resize_state.window_width >= breakpoints.desktop)
      ? <FooterDesk/>
      : <FooterMobile/>
    }
  </Fragment>

export default connect(
  state => ({
    resize_state: state.resize_state
  })
)(Footer)
