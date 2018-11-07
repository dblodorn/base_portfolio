import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../../styles/theme'
import { fixedHero } from './../../../styles/mixins'
import { Section, H2, StyledMarkup, Article } from './../../../styles/components'
import { PopupGrid, SimpleSlider, MultimediaSlider } from './../../../components'
import { spacing, widths } from './../../../styles/theme.json'
import VideoEmbed from './VideoEmbed'
import VideoGrid from './video-grid/VideoGrid'

export default (props) => {
  return (
    <Fragment>
      {(props.data.content.layout) && props.data.content.layout.map((item, i) =>
        <LayoutSection className={(item.is_hero) && `hero ${props.style}`} key={`${i}-${item.module}`}>
          { (item.module === 'simple_slideshow')
            ? <CarouselWrapper className={(item.is_hero) && `fixed-hero ${props.style}`}>
                <SimpleSlider data={item}/>
              </CarouselWrapper> :
            (item.module === 'slideshow')
            ? <CarouselWrapper className={(item.is_hero) && `fixed-hero ${props.style}`}>
                <MultimediaSlider data={item}/>
              </CarouselWrapper> :
            (item.module === 'image_grid_popup')
            ? <PopupGridWrapper>
                <PopupGrid
                  images={item.images}
                  width={item.ig_width}
                  columns={item.ig_columns}
                  proportion={item.thumbnail_proportion}
                  collectionType={null}
                />
              </PopupGridWrapper> :
            (item.module === 'wysiwig_content') 
            ? <ThemeProvider theme={themes[props.data.theme] || themeA}>
                <WsyWrapper className={item.wysiwig_width}>
                  <StyledMarkup dangerouslySetInnerHTML={{__html: item.wysiwig }}/>
                </WsyWrapper>
              </ThemeProvider> :
            (item.module === 'single_video_photo')
            ? <VideoEmbed data={item} theme={props.data.theme} style={props.style}/> :
            (item.module === 'video_grid')
            ? <VideoGrid data={item} theme={props.data.theme} style={props.style}/> :
            (item.module === 'details_popup')
            ? <H2>{item.module}</H2>
            : null
          }
        </LayoutSection>
      )}
    </Fragment>
  )
}

// STYLES
const LayoutSection = styled(Section)`
  &.hero {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100vh;
  }
  &:last-child {
    margin-bottom: 0;
  }
`

const WsyWrapper = styled(Article)`
  margin: ${spacing.double_pad} auto;
`

const PopupGridWrapper = styled.div`
  padding: ${spacing.double_pad} 0;
`

const CarouselWrapper = styled.div`
  display: block;
  width: 100vw;
  height: 56.25vw;
  position: relative;
  max-height: 100vh;
  ${fixedHero(0, 0, 0)}
  &.sidebar {
    padding-left: ${widths.sidebar_desktop};
  }
`