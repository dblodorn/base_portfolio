import React from 'react'
import styled from 'styled-components'
import { opacityTransition, absoluteCentered, media } from '../../styles/mixins'
import { colors } from './../../styles/theme.json'

const Button = styled.div`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &:hover {
    svg {
      opacity: .75;
    }
  }
  svg {
    ${opacityTransition};
    ${absoluteCentered};
    opacity: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: ${colors.overlay};
    transform: translateY(-1rem);
  }
  ${media.desktopNav`
    display: block;
  `}
`
const returnColor = (color) => {
  return (color === 'dark') ? colors.black : colors.white
}

const NextButton = (props) =>
  <Button>
    <svg version="1.1" viewBox="0 0 64 64" width="64" height="64">
      <title>Next</title>
      <g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" transform="translate(0.5 0.5)" fill={returnColor(props.color)} stroke={returnColor(props.color)}>
        <polyline fill="none" stroke={returnColor(props.color)} strokeMiterlimit="10" points="18,4 46,32 18,60 "></polyline>
      </g>
    </svg>
  </Button>

const PrevButton = (props) =>
  <Button>
    <svg version="1.1" viewBox="0 0 64 64" width="64" height="64">
      <title>Previous</title>
      <g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" transform="translate(0.5 0.5)" fill={returnColor(props.color)} stroke={returnColor(props.color)}>
        <polyline fill="none" stroke={returnColor(props.color)} strokeMiterlimit="10" points="46,60 18,32 46,4 "></polyline>
      </g>
    </svg>
  </Button>

export {
  NextButton,
  PrevButton
}