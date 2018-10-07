import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import ReactPlayer from 'react-player'
import { setVideoPlaying } from './../state/actions'
import { media, buttonInit, flexRowCenteredAll } from './../styles/mixins'
import { colors } from './../styles/theme.json'
import ErrorBoundary from './utils/ErrorBoundary'
import BgImage from './utils/BgImage'
import PlayButton from './PlayButton'

class Video extends PureComponent {
  state = {
    url: null,
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    started: false,
    buffering: false
  }
  // LIFECYCLE
  componentWillUnmount() {
    this.setState({
      playing: false,
      started: true
    })
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.url != this.props.current_video) {
      this.setState({
        url: null,
        playing: false,
        started: false
      })
      this.player.seekTo(0)
    }
  }
  // VIDEO CONTROL HANDLERS
  playPause = () => {
    this.setState({
      playing: !this.state.playing
    })
  }
  stop = () => {
    this.setState({
      url: null,
      playing: false
    })
    this.props.video_playing(null)
  }
  onPlay = () => {
    setTimeout(() => {
      this.setState({
        playing: true,
        buffering: false,
        started: true
      })
      this.props.video_playing(this.props.videoUrl)
    }, 1)
  }
  onPause = () => {
    this.setState({
      playing: false
    })
  }
  onEnded = () => {
    this.setState({
      playing: false,
      started: false
    })
    this.props.video_playing(null)
  }
  onStart = () => {
    this.setState({
      started: true,
      playing: true
    })
  }
  onBuffer = () => {
    this.setState({
      buffering: true
    })
  }
  ref = player => {
    this.player = player
  }
  render () {
    return (
      <VideoContainer>
        <ErrorBoundary>
          <VideoWrapper>
            <VideoThumbnail Opacity={(this.state.started) ? 0 : 1} className={(this.state.started) && 'playing'}>
              <PlayButtonWrapper onClick={this.onPlay}><PlayButton/></PlayButtonWrapper>
              {(this.props.coverUrl != null) && <BgImage Source={this.props.coverUrl} BgSize={'cover'}/>}
            </VideoThumbnail>
            <ReactPlayer
              url={this.props.videoUrl}
              className='player'
              width={'100%'}
              height={'100%'}
              ref={this.ref}
              volume={this.state.volume}
              playing={this.state.playing}
              onStart={this.onStart}
              onPlay={this.onPlay}
              onBuffer={this.onBuffer}
              onPause={this.onPause}
              onEnded={this.onEnded}
              config={{
                youtube: {
                  playerVars: {showinfo: 0, controls: 1, modestbranding: 1, rel: 0, playsinline: 1}
                },
                vimeo: {
                  playerVars: {
                    showinfo: 0,
                    controls: 1
                  }
                }
              }}
            />
          </VideoWrapper>
        </ErrorBoundary>
      </VideoContainer>
    )
  }
}

export default connect(
  state => ({
    window_width: state.resize_state.window_width,
    current_video: state.video_playing
  }),
  dispatch => ({
    video_playing: (url) => dispatch(setVideoPlaying(url))
  })
)(Video)

// STYLES
const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow-y: visible;
  position: relative;
`

const VideoWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
`

const VideoThumbnail = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  opacity: ${props => props.Opacity};
  transition: opacity 350ms ease 350ms;
  background-color: ${colors.lt_grey};
  &.playing {
    pointer-events: none;
  }
`

const LoadingPlayingCommon = css`
  ${flexRowCenteredAll};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9000;
`

const PlayButtonWrapper = styled.button`
  ${buttonInit};
  ${LoadingPlayingCommon};
  cursor: pointer;
`
