import React from 'react'
import { Carousel } from './../../../components'
import styled from 'styled-components'
import { heights, spacing } from './../../../styles/theme.json'
import { media, fixedTopLeft, fixedHero } from './../../../styles/mixins'

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
  max-height: calc(100vh - ${heights.header});
  margin: ${spacing.big_pad} 0 ${spacing.big_pad};
  ${fixedHero(heights.header, heights.footer, 0)}
`