import React from 'react'
import { Carousel } from './../../components'
import styled from 'styled-components'
import { heights } from './../../styles/theme.json'

export default (props) =>
  <CarouselWrapper className={(props.data.is_hero) && 'fixed-hero'}>
    <Carousel slides={props.data.slides}/>
  </CarouselWrapper>

// STYLES
const CarouselWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  &.fixed-hero {
    padding-top: ${heights.header};
    padding-bottom: ${heights.footer};
  }
`