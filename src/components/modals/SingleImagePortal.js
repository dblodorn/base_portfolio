import React from 'react'
import ReactDOM from 'react-dom'
const imageModal = document.getElementById('single-image-modal')

class ImageModal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount() {
    imageModal.appendChild(this.el)
  }
  componentWillUnmount() {
    imageModal.removeChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}

export default ImageModal
