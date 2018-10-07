import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Section, H1, H2, StyledMarkup, PadWrapper } from './../../styles/components'
import { themeA, themeB } from './../../styles/theme'
import { pageData, PostBasics } from './../../components'

export default pageData((props) => {
  return (
    <PostBasics data={props}/>
  )
})