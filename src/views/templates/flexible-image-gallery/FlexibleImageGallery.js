import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../../styles/theme'
import { Section, H2, StyledMarkup, Article, CarouselWrapper } from './../../../styles/components'
import { fixedHero } from './../../../styles/mixins'
import { PopupGrid, SimpleSlider, MultimediaSlider } from './../../../components'
import { spacing } from './../../../styles/theme.json'
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
                  data={item}
                  images={item.images}
                  width={item.ig_width}
                  columns={item.ig_columns}
                  proportion={item.thumbnail_proportion}
                  collectionType={null}
                  type={item.popup_type}
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
    ${fixedHero(0, 0, 0)}
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
