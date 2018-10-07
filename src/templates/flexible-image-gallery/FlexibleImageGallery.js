import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themeB } from './../../styles/theme'
import { Section, H2 } from './../../styles/components'
import { pageData, PostBasics } from './../../components';
import { heights } from './../../styles/theme.json'
import SimpleSlideShow from './SimpleSlideshow'

export default pageData((props) => {
  console.log(props)
  return (
    <Fragment>
      <PostBasics data={props}/>
      {props.content.layout.map((item, i) =>
        <LayoutSection className={(item.is_hero) && 'hero'} key={props.content.slug + i + item.module}>
          { (item.module === 'simple_slideshow')
            ? <SimpleSlideShow data={item}/> :
            (item.module === 'slideshow')
            ? <SimpleSlideShow data={item}/>
            : <H2>{item.module}</H2>
          }
        </LayoutSection>
      )}
    </Fragment>
  )
})

// STYLES
const LayoutSection = styled(Section)`
  &.hero {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
`