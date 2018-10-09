import React from 'react'
import { Carousel } from './../../components'
import styled from 'styled-components'
import { heights, spacing } from './../../styles/theme.json'
import { media, fixedTopLeft } from './../../styles/mixins'

export default (props) =>
  <CarouselWrapper className={(props.data.is_hero) && 'fixed-hero'}>
    <Carousel 
      slides={props.data.slides}
      navigation={props.data.controls}
      pagination={props.data.pagination}
      captions={props.data.captions}
      autoplay={props.data.autoplay}
    />
  </CarouselWrapper>

// STYLES
const CarouselWrapper = styled.div`
  display: block;
  width: 100vw;
  height: 56.25vw;
  position: relative;
  max-height: calc(100vh - (${heights.header} * 3));
  margin-bottom: ${spacing.big_pad};
  &.fixed-hero {
    ${fixedTopLeft};
    height: 100vh;
    max-height: 100vh;
    padding-bottom: ${heights.footer};
    ${media.desktopNav`
      padding-top: ${heights.header};
    `}
  }
`