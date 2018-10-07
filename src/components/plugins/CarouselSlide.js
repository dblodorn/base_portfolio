import React from 'react'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themeB } from './../../styles/theme'
import { flexRowCenteredAll, mainPadding } from './../../styles/mixins'
import { H1 } from './../../styles/components'
import BgImage from '../utils/BgImage'
import { breakpoints } from './../../styles/theme.json'



const themes = {
  'a': themeA,
  'b': themeB
}

const CarouselSlide = (props) => {
  return (
    <InnerSlide className={`${props.slideData.slide_type}-slide`}>
      <SlideWrapper>
        {(props.slideData.slide_type == 'image')
          ? <BgImage Source={(props.window_width >= breakpoints.desktop) ? props.slideData.image.large : props.slideData.image.medium} BgSize={props.slideData.style}/> :
          (props.slideData.slide_type == 'text')
          ? <ThemeProvider theme={themes[props.slideData.theme]}>
              <TextCard bg_color={props.slideData.bg_color} text_color={props.slideData.text_color}>
                <H1>{props.slideData.text}</H1>
              </TextCard>
            </ThemeProvider>
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
const TextCard = styled.div`
  background-color: ${props => props.bg_color};
  ${flexRowCenteredAll};
  ${mainPadding};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  * {
    color: ${props => props.text_color}!important;
  }
`

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
  pointer-events: none;
`
