import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { setHeaderState } from './../../state/actions'
const ModalNode = document.getElementById('modal')

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount() {
    ModalNode.appendChild(this.el)
    this.props.header_toggle(false)
  }
  componentWillUnmount() {
    ModalNode.removeChild(this.el)
    this.props.header_toggle(true)
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}

export default connect(
  state => ({
    header_state: state.header_state
  }),
  dispatch => ({
    header_toggle: (bool) => dispatch(setHeaderState(bool))
  })
)(Modal)
