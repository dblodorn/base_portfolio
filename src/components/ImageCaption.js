import React from 'react'
import styled from 'styled-components'
import { microType } from './../styles/mixins'
import { spacing } from './../styles/theme.json'

export default (props) =>
  <CaptionWrapper>
    <h5>{props.caption.title}</h5>
  </CaptionWrapper>

const CaptionWrapper = styled.div`
  width: 100%;
  padding: ${spacing.single_pad} 0 ${spacing.single_pad};
  position: relative;
  text-align: center;
  h5 {
    ${microType};
  }
`