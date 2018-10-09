import React, { Fragment, Component } from 'react'
import { Transition } from 'react-spring'
import { flexRowCenteredAll, buttonInit, animationFadeIn } from './../../styles/mixins'
import styled from 'styled-components'
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
                <Modal BgColor={'#ffffff'} style={styles}>
                  <Close clickFunction={() => this._ImageEnlarge()} color={colors.black}/>
                  <ModalImageWrapper>
                    <FitImage clickFunction={() => this._ImageEnlarge()} src={this.props.src} fit={'contain'}/>
                  </ModalImageWrapper>
                </Modal>
              </ImageModal>
            )}
          </Transition>
        </Fragment>
    )
  }
}

export default SingleImageModal

// STYLES
const Modal = styled.div`
  ${flexRowCenteredAll};
  position: fixed;
  z-index: 12000;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.BgColor};
  padding: calc(${heights.header} / 2);
`

const ModalImageWrapper = styled.div`
  ${animationFadeIn(1000, 50)};
  width: 90vw;
  height: 100%;
  max-width: 140rem;
  max-height: 95rem;
  display: block;
  position: relative;
`
