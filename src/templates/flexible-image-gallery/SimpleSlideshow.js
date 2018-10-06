import React from 'react'
import { Carousel } from './../../components'
import styled from 'styled-components'

export default (props) =>
  <CarouselWrapper>
    <Carousel slides={props.slides}/>
  </CarouselWrapper>

// STYLES
const CarouselWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`