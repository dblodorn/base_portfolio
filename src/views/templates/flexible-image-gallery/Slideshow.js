import React from 'react'
import { Carousel } from './../../../components'
import styled from 'styled-components'
import { fixedHero } from './../../../styles/mixins'

export default (props) =>
  <CarouselWrapper className={(props.data.is_hero) && `fixed-hero ${props.style}`}>
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
  width: 100%;
  height: 56.25vw;
  position: relative;
  max-height: 100vh;
  ${fixedHero(0, 0, 0)}
`