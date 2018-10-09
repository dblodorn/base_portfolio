import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import { flexRowCenteredAll, buttonInit, animationFadeIn } from './../../styles/mixins'
import styled from 'styled-components'
import { setModalState } from './../../state/actions'
import { heights, colors } from './../../styles/theme.json'
import ImageModal from './SingleImagePortal'
import FitImage from './../utils/FitImage'
import Close from './../utils/Close'

const SingleImageModal = (props) => {
  return (
    <Fragment>
      <FitImage clickFunction={() => props.modal_toggle(true)} src={props.src} fit={'contain'}/>
      <Transition from={{ opacity: 0, transform: 'scale(1.005)' }} enter={{ opacity: 1, transform: 'scale(1)' }} leave={{ opacity: 0, transform: 'scale(1.005)', pointerEvents: 'none' }}>
        {props.modal && (styles => 
          <ImageModal>
            <Modal BgColor={'#ffffff'} style={styles}>
              <Close clickFunction={() => props.modal_toggle(false)} color={colors.black}/>
              <ModalImageWrapper>
                <FitImage src={props.src} fit={'contain'}/>
              </ModalImageWrapper>
            </Modal>
          </ImageModal>
        )}
      </Transition>
    </Fragment>
  )
}

export default connect(
  state => ({
    modal: state.modal
  }),
  dispatch => ({
    modal_toggle: (bool) => dispatch(setModalState(bool))
  })
)(SingleImageModal)

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