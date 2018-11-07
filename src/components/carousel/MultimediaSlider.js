import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import Swiper from 'react-id-swiper/lib/custom'
import Waypoint from 'react-waypoint'
import { setFooterState } from './../../state/actions'
import CarouselSlide from './CarouselSlide'
import { spacing, colors } from './../../styles/theme.json'
import { buttonInit, absoluteTopFull, absoluteCentered } from './../../styles/mixins'
import { PrevButton, NextButton } from './../utils/PrevNextButton'

class MultimediaSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      transitionTime: this.props.transition_time || 1500
    }
    this._wayPointEnter = this._wayPointEnter.bind(this)
    this._wayPointLeft = this._wayPointLeft.bind(this)
    this._slideChange = this._slideChange.bind(this)
    this._onPlay = this._onPlay.bind(this)
    this._stop = this._stop.bind(this)
  }

  componentWillUnmount() {
    if (this.state.playing) {
      this.setState({
        playing: false
      })
      this.player.seekTo(0)
    }
  }

  // METHODS
  _wayPointEnter() {
    this.swiper.autoplay.start()
  }

  _wayPointLeft() {
    this.swiper.autoplay.stop()
    this._stop()
  }

  _slideChange() {
    const slideIndex = this.swiper.realIndex
    const slideType = this.swiper.slides[slideIndex].dataset.slidetype
    if (slideType === 'video' && (this.player != undefined)) {
      this._onPlay()
    } else {
      this._stop()
    }
  }

  _onPlay() {
    this.player.seekTo(0)
    this.setState({ playing: true })
  }

  _stop() {
    if (this.state.playing) {
      setTimeout(() => {
        this.player.seekTo(0)
        this.setState({ playing: false })
      }, 3000)
    }
  }

  render() {
    const swiperParams = {
      on: {
        slideChange: () => {
          this._slideChange()
        }
      },
      autoplay: true,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplayDisableOnInteraction: false,
      speed: this.props.data.transition_time || 1500,
    }

    const HeroSlides = this.props.data.slides.map((slide, i) =>
      <HeroSlide key={i} data-slidetype={slide.slide_type}>
        <CarouselSlide slideData={slide}>
          {(slide.slide_type === 'video') &&
            <ReactPlayer
              ref={node => { if (node) this.player = node.player }}
              url={slide.video}
              className='hero-player'
              width={'100%'}
              height={'100%'}
              muted={true}
              loop={true}
              playsinline={true}
              playing={this.state.playing}
            />
          }
        </CarouselSlide>
      </HeroSlide>
    )
    return (
      <HeroSlider>
        <Swiper {...swiperParams} ref={node => { if (node) this.swiper = node.swiper }}>
          {HeroSlides}
        </Swiper>
        <Waypoint
          onEnter={this._wayPointEnter}
          onLeave={this._wayPointLeft}
          topOffset='50%'
        />
      </HeroSlider>
    )
  }
}

export default connect(
  state => ({
    window_width: state.resize_state.window_width
  })
)(MultimediaSlider)

// STYLES
const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  &.nav {
    padding: 0 5.25rem;
  }
`

const HeroSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .swiper-container {
    height: 100%;
    width: 100%;
  }
  .swiper-wrapper {
    height: 100%;
  }
  .hero-player {
    ${absoluteTopFull};
    z-index: 100;
  }
  .swiper-pagination {
    bottom: 7rem;
    padding: 0 7rem;
    text-align: center;
  }
  video {
    ${absoluteCentered};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
