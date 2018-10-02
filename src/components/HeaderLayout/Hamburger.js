
import React from 'react'
import styled from 'styled-components'
import { buttonInit } from './../styles'

export default (props) =>
  <HamburgerButton onClick={props.ClickFunction}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32" width="50" height="50">
      <g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" fill={props.color} stroke={props.color} >
        <line data-color="color-2" fill="none" strokeMiterlimit="10" x1="2" y1="16" x2="30" y2="16"/>
        <line fill="none" stroke={props.color}  strokeMiterlimit="10" x1="2" y1="7" x2="30" y2="7"/>
        <line fill="none" stroke={props.color}  strokeMiterlimit="10" x1="2" y1="25" x2="30" y2="25"/>
      </g>
    </svg>
  </HamburgerButton>

// STYLES
const HamburgerButton = styled.button`
  ${buttonInit};
  position: absolute;
  right: 0;
  top: 1.5rem;
  width: 6vmin;
  height: 6vmin;
  svg {
    width: 100%;
  }
`