import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { Motion, spring } from 'react-motion'
import { media, flexRowCenteredAll, buttonInit, animationFadeIn } from './../../styles/mixins'
import styled from 'styled-components'
import { transitions, heights } from './../../styles/theme.json'
import ImageModal from './SingleImagePortal'
import FitImage from './../utils/FitImage'

class SingleImageModal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      OpenModal: false
    }
  }

  _ImageEnlarge() {
    this.setState({
      OpenModal: !this.state.OpenModal
    })
  }

  render() {
    return (
      <Fragment>
        <FitImage clickFunction={() => this._ImageEnlarge()} src={this.props.src} fit={'contain'}/>
        {
          (this.state.OpenModal) ?
          <Motion defaultStyle={{opacity: 0, scale: 1.05}} style={{
            opacity: spring(1, {stiffness: transitions.stiffness_fast, damping: transitions.damping_fast}),
            scale: spring(1, {stiffness: transitions.stiffness_fast, damping: transitions.damping_fast})
          }}>
            {obj => {
              const { opacity, scale } = obj
              let style= {
                opacity: opacity,
                transform: `scale(${scale})`
              }
              return <ImageModal>
                        <Modal BgColor={'#ffffff'} style={style}>
                          <CloseButton onClick={() => this._ImageEnlarge()}>
                            <svg version='1.1' xmlns="http://www.w3.org/2000/svg" x='0px' y='0px' viewBox='0 0 64 64' width='64' height='64'>
                              <g className="nc-icon-wrapper" fill={'black'}>
                                <line fill="none" stroke={'black'} strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="54" y1="10" x2="10" y2="54" strokeLinejoin="miter"></line>
                                <line fill="none" stroke={'black'} strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="54" y1="54" x2="10" y2="10" strokeLinejoin="miter"></line>
                              </g>
                            </svg>
                          </CloseButton>
                          <ModalImageWrapper>
                            <FitImage src={this.props.src} fit={'contain'}/>
                          </ModalImageWrapper>
                        </Modal>
                      </ImageModal>
              }}
            </Motion>
          : null
        }
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

const CloseButton = styled.button`
  ${buttonInit};
  color: white;
  position: fixed;
  top: 1rem;
  right: 1rem;
  svg {
    width: 4rem;
    height: 4rem;
  }
`