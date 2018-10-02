import React, { Component } from 'react'
import styled from 'styled-components'

export default class BgImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Loaded: false
    }
  }

  _ImageLoaded() {
    this.setState({
      Loaded: true
    })
  }

  render() {
    return (
      <BgImageContainer className={'bg-img'} BgImage={this.props.Source} BgSize={this.props.BgSize} Opacity={(this.state.Loaded) ? 1 : 0}>
        <Image src={this.props.Source} onLoad={this._ImageLoaded.bind(this)}/>
      </BgImageContainer>
    )
  }
}

// STYLES
const BgImageContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: all 1500ms ease;
  background-size: ${props => (props.BgSize)};
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  backface-visibility: hidden;
  opacity: 0;
  position: relative;
  background-image: url('${props => props.BgImage}');
  opacity: ${props => props.Opacity};
`

const Image = styled.img`
  width: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`
