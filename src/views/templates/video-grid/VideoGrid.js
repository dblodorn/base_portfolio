import React from 'react'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../../styles/theme'
import LazyLoad from 'react-lazyload'
import { Section, GridWrapper, ProportionWrapper, H3, SmallP } from './../../../styles/components'
import { absoluteTopFull, opacityTransition, mainPadding, textShadow  } from './../../../styles/mixins'
import { Video } from './../../../components'
import { colors } from './../../../styles/theme.json'

const VideoCaption = (props) =>
  <VideoCaptionWrapper className={'hover-reveal'}>                 
    <H3>{props.item.title}</H3>
    <SmallP>{props.item.title}</SmallP>
  </VideoCaptionWrapper>

const VideoGrid = (props) => {
  return (
    <Section>
      <GridWrapper className={`${props.data.content.container_width} ${props.data.content.columns}`}>
        {props.data.content.video_collection.map((item, i) =>
          <VideoThumb className={(!props.playing) && 'video-playing'} key={item.post_id + 'vg' + i}>
            <ProportionWrapper
              DeskTop={props.proportion || 56.25}
              Mobile={props.proportion || 56.25}
              Max={props.proportion || 56.25}
            >
              <LazyLoad height='100%'>
                {((props.video_state == 'stopped') || (props.video_state == 'paused')) &&
                  <ThemeProvider theme={themes[props.theme] || themeA}>
                    <VideoCaption item={item}/>
                  </ThemeProvider>
                }
                <VideoWrapper>
                  <Video coverUrl={item.thumbnail} videoUrl={item.video_url}/>
                </VideoWrapper>
              </LazyLoad>
            </ProportionWrapper>
          </VideoThumb>
        )}
      </GridWrapper>
    </Section>
  )
}

export default connect(
  state => ({
    video_playing: state.video_playing,
    video_state: state.video_state
  })
)(VideoGrid)

const VideoCaptionWrapper = styled.div`
  ${opacityTransition};
  opacity: 0;
  .playing {
    opacity: 0!important;
  }
  pointer-events: none;
  ${mainPadding};  
  ${absoluteTopFull};
  z-index: 1;
  * {
    ${textShadow(0, colors.blue)};
    color: ${colors.white}!important;
  }
`

const VideoThumb = styled.li`
  .hover-reveal {
    
  }
  &:hover {
    .hover-reveal {
      opacity: 1;
    }
  }
`

const VideoWrapper = styled.div`
  ${absoluteTopFull};
  z-index: 0;
`
