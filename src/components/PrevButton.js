import React from 'react'
import styled from 'styled-components'
import { opacityTransition, buttonInit } from '../styles/mixins'
import { colors } from './../styles/theme.json'

const Button = styled.div`
  ${buttonInit};
  width: 4rem;
  height: 4rem;
  &:hover {
    svg {
      opacity: .75;
    }
  }
  svg {
    ${opacityTransition};
    opacity: 1;
    width: 100%;
    height: 100%;
    fill: ${colors.overlay};
  }
`

export default (props) =>
  <Button>
    <svg version="1.1" viewBox="0 0 48 48" width="48" height="48"><title>minimal left</title><g fill="#111111"><path fill="#111111" d="M34,46.829L12.586,25.414c-0.781-0.781-0.781-2.047,0-2.828L34,1.171L36.829,4l-20,20l20,20L34,46.829z"></path></g></svg>
  </Button>
