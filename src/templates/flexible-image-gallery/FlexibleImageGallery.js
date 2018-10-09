import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themeB } from './../../styles/theme'
import { Section, H2, StyledMarkup, Article } from './../../styles/components'
import { pageData, PostBasics, PopupGrid } from './../../components'
import { fullWindow, positionClasses } from './../../styles/mixins'
import { heights, spacing, shared } from './../../styles/theme.json'
import SimpleSlideShow from './SimpleSlideshow'
import VideoEmbed from './VideoEmbed'

const themes = {
  'a': themeA,
  'b': themeB
}

export default pageData((props) => {
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
      {(props.content.layout) && props.content.layout.map((item, i) =>
        <LayoutSection className={(item.is_hero) && 'hero'} key={`${i}-${item.module}`}>
          { (item.module === 'simple_slideshow')
            ? <SimpleSlideShow data={item}/> :
            (item.module === 'slideshow')
            ? <SimpleSlideShow data={item}/> :
            (item.module === 'image_grid_popup')
            ? <PopupGrid
                images={item.images}
                width={item.ig_width}
                columns={item.ig_columns}
                proportion={item.thumbnail_proportion}
                collectionType={null}
              /> :
            (item.module === 'wysiwig_content') 
            ? <ThemeProvider theme={themes[props.theme]}>
                <Article className={item.wysiwig_width}>
                  <StyledMarkup dangerouslySetInnerHTML={{__html: item.wysiwig }}/>
                </Article>
              </ThemeProvider> :
            (item.module === 'single_video_photo')
            ? <VideoEmbed data={item}/> :
            (item.module === 'details_popup')
            ? <H2>{item.module}</H2>
            : null
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