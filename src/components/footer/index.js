import React from 'react'
import styled from 'styled-components'
import { flexColumn, mainPadding } from './../../styles/mixins'
import { P } from './../../styles/components'
import { heights, colors } from './../../styles/theme.json'
import withStore from './../HOC/withStore'

export default withStore(() =>
  <FooterWrapper>
    <P>Footer</P>
  </FooterWrapper>
)

// STYLES
const FooterWrapper =  styled.footer`
  ${flexColumn};
  ${mainPadding};
  border-top: 1px solid ${colors.black};
  justify-content: center;
  width: 100vw;
  height: ${heights.footer};
  position: relative;
  z-index: 100;
  background-color: ${colors.footer_bg_color};
  * {
    color: ${colors.footer_type_color}!important;
  }
`
