import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { media, flexRowCenteredAll, buttonInit } from './../../styles'
import styled from 'styled-components'
import ImageModal from './SingleImagePortal'
import BgImage from '../utils/BgImage'

class RegImage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      Loaded: false,
      OpenModal: false
    }
  }

  _ImageLoaded() {
    this.setState({
      Loaded: true
    })
  }

  _ImageEnlarge() {
    this.setState({
      OpenModal: !this.state.OpenModal
    })
  }

  render() {
    return (
      <Fragment>
        <Image onClick={() => this._ImageEnlarge()} src={this.props.Source} onLoad={this._ImageLoaded.bind(this)} Opacity={(this.state.Loaded) ? 1 : 0}/>
        {(this.state.OpenModal) &&
          <ImageModal>
            <Modal BgColor={this.props.bg_color}>
              <CloseButton onClick={() => this._ImageEnlarge()}>
                <svg version='1.1' xmlns="http://www.w3.org/2000/svg" x='0px' y='0px' viewBox='0 0 64 64' width='64' height='64'>
                  <g class="nc-icon-wrapper" fill={this.props.close_color}><line fill="none" stroke={this.props.close_color} stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="54" y1="10" x2="10" y2="54" stroke-linejoin="miter"></line> <line fill="none" stroke={this.props.close_color} stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="54" y1="54" x2="10" y2="10" stroke-linejoin="miter"></line></g>
                </svg>
              </CloseButton>
              <ModalImageWrapper>
                <BgImage Source={this.props.Popup} BgSize={'contain'} Color={this.props.close_color}/>
              </ModalImageWrapper>
            </Modal>
          </ImageModal>
        }
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    bg_color: state.color_theme.type_color,
    close_color: state.color_theme.bg_color
  }),
  dispatch => ({})
)(RegImage)

// STYLES

const Image = styled.img`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  transition: all 500ms ease;
  opacity: ${props => props.Opacity};
  cursor: pointer;
  ${media.desktop`
    width: auto;
    height: 100%;
  `}
  &:hover {
    opacity: .85;
  }
`

const Modal = styled.div`
  ${flexRowCenteredAll};
  position: fixed;
  z-index: 12000;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.BgColor};
`

const ModalImageWrapper = styled.div`
  width: 90vw;
  height: 90vh;
  max-width: 120rem;
  max-height: 70rem;
  display: block;
  position: relative;
`

const CloseButton = styled.button`
  ${buttonInit};
  color: white;
  position: fixed;
  top: 2rem;
  right: 2rem;
  svg {
    width: 4rem;
    height: 4rem;
  }
`