import React from 'react'
import styled from 'styled-components'
import { flexCenteredAll, opacityTransition, menuTransition } from './../../styles/mixins'

const Dots = (props) =>
  <svg height={props.height || '32px'} width={props.width || '32px'} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <title>menu dots</title>
    <g fill={props.color}>
      <circle cx="16" cy="4" fill={props.color} r="3" />
      <circle cx="16" cy="16" r="3" />
      <circle cx="16" cy="28" fill={props.color} r="3" />
    </g>
  </svg>

export default () =>
  <SidebarDots className={`nav-dots`} color={`rgba(0,0,0,.25)`}>
    <Dots/>
  </SidebarDots>

//STYLES
const SidebarDots = styled.div`
  ${flexCenteredAll};
  ${menuTransition};
  position: fixed;
  right: 0;
  width: 3rem;
  height: 4rem;
  top: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 1000;
  transform: translateX(3rem);
  svg {
    opacity: .85;
  }
`

