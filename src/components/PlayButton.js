import React from 'react'
import styled from 'styled-components'
import { colors } from './../styles/theme.json'

const PlayerButton = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  padding: 1px;
  margin: auto;
  svg,
  img {
    width: 100%;
    height: 100%;
    fill: ${colors.overlay};
  }
`

export default (props) =>
  <PlayerButton>
    <h1>PLAY</h1>
  </PlayerButton>
