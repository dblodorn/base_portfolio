import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'
import { ImgFit } from './../../styles/components'
import { opacityTransition, absoluteTopFull } from './../../styles/mixins'
import { colors } from './../../styles/theme.json'

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
      <Wrapper>
        <ImgWrapper Opacity={(this.state.loaded) ? 1 : 0} onClick={this.props.clickFunction} className={(this.props.clickFunction || this.props.hover) && 'hover'}>
          <ImgFit src={this.props.src} onLoad={this.handleImageLoaded.bind(this)} Fit={this.props.fit}/>
        </ImgWrapper>
        {(!this.state.loaded) && <Spinner size={'4rem'} color={colors.spinner_color} stroke={1} /> }
      </Wrapper>
    )
  }
}

// STYLE
const Wrapper = styled.div`
  ${absoluteTopFull};
`

const ImgWrapper = styled.div`
  ${absoluteTopFull};
  ${opacityTransition};
  opacity: ${props => props.Opacity};
  display: block;
  &.hover {
    cursor: pointer;
    &:hover {
      img {
        opacity: .75;
      }
    }
  }
`
