import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
  componentDidMount() {
    this.refs.vid.play()
  }

  componentWillUnmount() {
    this.refs.vid.pause()
  }
  
  render() {
    return (
      <VideoWrapper>
        <video ref="vid" muted loop="true" playsInline>
          <source src={this.props.src} type="video/mp4"/>
        </video>
      </VideoWrapper>
    )
  }
}

// STYLES
const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`