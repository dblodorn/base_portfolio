import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../styles/theme'
import { ModalWrapper, ModalContentWrapper, CaptionWrapper } from './../../styles/components'
import { breakpoints } from './../../styles/theme.json'
import Modal from './Modal'
import FitImage from './../utils/FitImage'
import Close from './../utils/Close'
import ImageCaption from './../ImageCaption'

class SingleImageModal extends Component {
    constructor(props) {
      super(props)
      console.log(this.props.captions)
      this.state = {
        modal: false
      }
      this._ImageEnlarge = this._ImageEnlarge.bind(this)
    }
  
    _ImageEnlarge() {
      if ((this.props.resize_state.window_width >= breakpoints.desktop) || this.props.mobile) {
        this.setState({
          modal: !this.state.modal
        })
      }
    }

    render() {
      return (
        <Fragment>
          <FitImage clickFunction={() => this._ImageEnlarge()} src={this.props.src} fit={this.props.fit || 'cover'}/>
          <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
            {this.state.modal && (styles => 
              <Modal>
                <ThemeProvider theme={themes[this.props.theme] || themeA}>
                  <ModalWrapper style={styles}>
                    <Close clickFunction={() => this._ImageEnlarge()} color={themes[this.props.theme].popup_close_color || themeA.popup_close_color}/>
                    <ModalContentWrapper maxHeight={'90rem'}>
                      <FitImage src={this.props.src} fit={'contain'}/>
                      {((this.props.captions === 'popup') || (this.props.captions === 'both')) &&
                        <CaptionWrapper>
                        <ImageCaption caption={this.props.description.description}/>
                        </CaptionWrapper>
                      }
                    </ModalContentWrapper>
                  </ModalWrapper>
                </ThemeProvider>
              </Modal>
            )}
          </Transition>
        </Fragment>
    )
  }
}

export default connect(
  state => ({
    resize_state: state.resize_state
  })
)(SingleImageModal)
