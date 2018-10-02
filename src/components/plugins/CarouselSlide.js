import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import BgImage from '../utils/BgImage'
import { breakpoints } from './../styles/theme.json'

const CarouselSlide = (props) => {
  return (
    <InnerSlide className={`${props.slideData.slide_type}-slide`}>
      <SlideWrapper>
        {(props.slideData.slide_type == 'image')
          ? (props.window_width >= breakpoints.desktop)
            ? <BgImage Source={props.slideData.image.large} BgSize={props.slideData.style}/>
            : <BgImage Source={props.slideData.image.large} BgSize={props.slideData.style}/>
          : null
        }
        {props.children}
      </SlideWrapper>
    </InnerSlide>
  )
}

export default connect(
  state => ({
    window_width: state.resize_state.window_width
  })
)(CarouselSlide)

// STYLES
const InnerSlide = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  transform: translateZ(0);
`

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  transform: translateZ(0);
`
