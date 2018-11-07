import React from 'react'
import styled from 'styled-components'
import { fullWindow } from './../styles/mixins'
import { Spinner, Logo } from './../components'
import { colors } from './../styles/theme.json'

export default () =>
  <LoadingWrapper>
    <Logo/>
    <Spinner size={'40vmin'} color={colors.black} stroke={1} />
  </LoadingWrapper>

// STYLES
const LoadingWrapper = styled.div`
  ${fullWindow};
  background-color: ${colors.white};
`