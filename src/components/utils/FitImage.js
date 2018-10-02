import React, { Component } from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'
import { absoluteCentered } from './../../styles/mixins'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  handleImageLoaded() {
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 150)
  }

  render() {
    return (
      <ImgWrapper Opacity={(this.state.loaded) ? 1 : 0}>
        <img src={this.props.src} onLoad={this.handleImageLoaded.bind(this)}/>
        {(!this.state.loaded) && <Spinner/> }
      </ImgWrapper>
    )
  }
}

// STYLE
const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  img {
    ${absoluteCentered};
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1500ms ease;
    opacity: ${props => props.Opacity};
  }
`
