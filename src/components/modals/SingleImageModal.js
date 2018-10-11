import React, { Fragment, Component } from 'react'
import { Transition } from 'react-spring'
import { flexRowCenteredAll, media } from './../../styles/mixins'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../styles/theme'
import { heights, colors } from './../../styles/theme.json'
import ImageModal from './SingleImagePortal'
import FitImage from './../utils/FitImage'
import Close from './../utils/Close'

class SingleImageModal extends Component {
    constructor(props) {
      super(props)
      this.state = {
        modal: false
      }
      this._ImageEnlarge = this._ImageEnlarge.bind(this)
    }
  
    _ImageEnlarge() {
      this.setState({
        modal: !this.state.modal
      })
    }

    render() {
      return (
        <Fragment>
          <FitImage clickFunction={() => this._ImageEnlarge()} src={this.props.src} fit={'contain'}/>
          <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
            {this.state.modal && (styles => 
              <ImageModal>
                <ThemeProvider theme={themes[this.props.theme] || themeA}>
                  <ModalWrapper style={styles}>
                    <Close clickFunction={() => this._ImageEnlarge()} color={themes[this.props.theme].popup_close_color || themeA.popup_close_color}/>
                    <ModalImageWrapper maxHeight={'50rem'}>
                      <FitImage clickFunction={() => this._ImageEnlarge()} src={this.props.src} fit={'contain'}/>
                    </ModalImageWrapper>
                  </ModalWrapper>
                </ThemeProvider>
              </ImageModal>
            )}
          </Transition>
        </Fragment>
    )
  }
}

export default SingleImageModal

// STYLES
const ModalWrapper = styled.div`
  ${flexRowCenteredAll};
  position: fixed;
  z-index: 12000;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.popup_bg_color};
  padding: calc(${heights.header} / 2) 0;
  ${media.desktopNav`
    padding: calc(${heights.header} / 2);
  `}
`

const ModalImageWrapper = styled.div`
  max-height: ${props => props.maxHeight};
  width: 100%;
  height: 100%;
  max-width: 124rem;
  display: block;
  position: relative;
`
