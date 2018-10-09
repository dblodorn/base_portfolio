import React from 'react'
import { SimpleVideo, FitImage } from './../../components'
import styled from 'styled-components'
import { heights, spacing } from './../../styles/theme.json'
import { media } from './../../styles/mixins'
import TextOverlay from './TextOverlay'

export default (props) => {
  return (
    <VideoWrapper className={(props.data.is_hero) && 'fixed-hero'}>
      {(props.data.has_text_overlay) && <TextOverlay content={props.data} theme={props.theme}/>}
      {(props.data.media_type !== 'photo')
        ? <SimpleVideo src={props.data.video_file}/> : 
        (props.data.video_cover_image.large !== null)
        ? <FitImage src={props.data.video_cover_image.large} fit={'cover'}/>
        : null
      }
    </VideoWrapper>
  )
}

// STYLES
const VideoWrapper = styled.div`
  display: block;
  width: 100vw;
  height: 56.25vw;
  position: relative;
  max-height: calc(100vh - ${heights.header});
  margin-bottom: ${spacing.big_pad};
  &.fixed-hero {
    padding-bottom: ${heights.footer};
    ${media.desktopNav`
      padding-top: ${heights.header};
    `}
  }
`