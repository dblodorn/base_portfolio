import React from 'react'
import styled from 'styled-components'
import { opacityTransition } from './../styles/mixins'
import { colors } from './../styles/theme.json'

const PlayerButton = styled.div`
  width: 15%;
  height: 15%;
  padding: 1px;
  margin: auto;
  &:hover {
    svg {
      opacity: .35;
    }
  }
  svg,
  img {
    ${opacityTransition};
    opacity: 1;
    width: 100%;
    height: 100%;
    fill: ${colors.overlay};
  }
`

export default (props) =>
  <PlayerButton>
    <svg version="1.1" viewBox="0 0 48 48" width="48" height="48"><title>button play</title><g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" fill="#111111" stroke="#111111"><polygon fill="none" stroke="#111111" strokeMiterlimit="10" points="11,44 11,4 41,24 "></polygon></g></svg>
  </PlayerButton>
