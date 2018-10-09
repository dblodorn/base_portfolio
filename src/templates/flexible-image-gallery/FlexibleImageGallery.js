import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themeB } from './../../styles/theme'
import { Section, H2, StyledMarkup, Article } from './../../styles/components'
import { pageData, PostBasics, PopupGrid } from './../../components'
import SimpleSlideShow from './SimpleSlideshow'
import VideoEmbed from './VideoEmbed'
import { spacing } from './../../styles/theme.json'

const themes = {
  'a': themeA,
  'b': themeB
}

export default pageData((props) => {
  console.log(props)
  return (
    <Fragment>
      <PostBasics data={props}/>
      {(props.content.layout) && props.content.layout.map((item, i) =>
        <LayoutSection className={(item.is_hero) && 'hero'} key={`${i}-${item.module}`}>
          { (item.module === 'simple_slideshow')
            ? <SimpleSlideShow data={item}/> :
            (item.module === 'slideshow')
            ? <SimpleSlideShow data={item}/> :
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
            ? <ThemeProvider theme={themes[props.theme]}>
                <WsyWrapper className={item.wysiwig_width}>
                  <StyledMarkup dangerouslySetInnerHTML={{__html: item.wysiwig }}/>
                </WsyWrapper>
              </ThemeProvider> :
            (item.module === 'single_video_photo')
            ? <VideoEmbed data={item} theme={props.theme}/> :
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
const LayoutSection = styled(Section)`
  &.hero {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  &:last-child {
    margin-bottom: ${spacing.double_pad};
  }
`

const WsyWrapper = styled(Article)`
  margin: ${spacing.double_pad} auto;
`

const PopupGridWrapper = styled.div`
  padding: ${spacing.double_pad} 0;
`