import React from 'react'
import ReactPlayer from 'react-player'
import { SimpleVideo } from './../../components'
import styled from 'styled-components'
import { heights, spacing } from './../../styles/theme.json'
import { media } from './../../styles/mixins'

export default (props) =>
  <VideoWrapper className={(props.data.is_hero) && 'fixed-hero'}>
    <SimpleVideo src={props.data.video_file}/>
  </VideoWrapper>

// STYLES
const VideoWrapper = styled.div`
  display: block;
  width: 100vw;
  height: 56.25vw;
  position: relative;
  max-height: calc(100vh - (${heights.header} * 3));
  margin-bottom: ${spacing.big_pad};
  &.fixed-hero {
    padding-bottom: ${heights.footer};
    ${media.desktopNav`
      padding-top: ${heights.header};
    `}
  }
`