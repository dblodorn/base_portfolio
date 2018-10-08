import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themeB } from './../../styles/theme'
import { Section, H2, StyledMarkup } from './../../styles/components'
import { pageData, PostBasics } from './../../components'
import { fullWindow, positionClasses } from './../../styles/mixins'
import { heights, spacing, shared } from './../../styles/theme.json'
import SimpleSlideShow from './SimpleSlideshow'

const themes = {
  'a': themeA,
  'b': themeB
}

export default pageData((props) => {
  console.log(props)
  return (
    <Fragment>
      <PostBasics data={props}/>
      {(props.content.has_text_overlay) &&
        <ThemeProvider theme={themes[props.theme]}>
          <TextOverlay className={props.content.text_overlay_postion}>
            <OverlayWrapper>
              <StyledMarkup dangerouslySetInnerHTML={{__html: props.content.text_overlay_content }}/>
            </OverlayWrapper>
          </TextOverlay>
        </ThemeProvider>
      }
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
const TextOverlay = styled.div`
  ${fullWindow};
  ${positionClasses};
  padding-left: ${spacing.double_pad};
  padding-right: ${spacing.double_pad};
  padding-top: calc(${spacing.double_pad} + ${heights.header});
  padding-bottom: calc(${spacing.double_pad} + ${heights.footer});
  z-index: 100;
`

const OverlayWrapper = styled.div`
  width: 100%;
  max-width: ${shared.max_width};
`

const LayoutSection = styled(Section)`
  &.hero {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
`