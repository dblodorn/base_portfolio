import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import Swiper from 'react-id-swiper/lib/custom'
import Waypoint from 'react-waypoint'
import CarouselSlide from './CarouselSlide'
import { spacing } from './../../styles/theme.json'
import { buttonInit } from './../../styles/mixins'
import { PrevButton, NextButton } from './../PrevNextButton'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    }
    this._wayPointEnter = this._wayPointEnter.bind(this)
    this._wayPointLeft = this._wayPointLeft.bind(this)
    this._slideChange = this._slideChange.bind(this)
  }

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
    this.setState({
      playing: true
    })
  }

  _stop() {
    if (this.state.playing) {
      setTimeout(() => {
        this.player.seekTo(0)
        this.setState({
          playing: false
        })
      }, 1750)
    }
  }

  componentDidMount() {
    if (this.props.autoplay) {
      this._slideChange()
    } else {
      this.swiper.autoplay.stop()
    }
  }

  render() {
    const swiperParams = {
      on: {
        slideChange: () => {
          this._slideChange()
        }
      },
      autoplay: (this.props.autoplay) ? this.state.autoplay : false,
      pagination: {
        el: (this.props.pagination) ? '.swiper-pagination' : null,
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: (this.props.navigation) ? '.swiper-button-next' : null,
        prevEl: (this.props.navigation) ? '.swiper-button-prev' : null
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 3000,
      renderPrevButton: () => <button className="swiper-button-prev"><PrevButton/></button>,
      renderNextButton: () => <button className="swiper-button-next"><NextButton/></button>,
    }

    const HeroSlides = this.props.slides.map((slide, i) =>
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
        {/*<Waypoint
          onEnter={this._wayPointEnter}
          onLeave={this._wayPointLeft}
          topOffset='50%'
        />*/}
      </HeroSlider>
    )
  }
}

export default connect(
  state => ({
    window_width: state.resize_state.window_width
  })
)(Carousel)

// STYLES
const buttonWrap = css`
  ${buttonInit};
  padding: 0;
  width: 4rem;
  height: 6rem;
`

const HeroSlider = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  .swiper-container {
    height: 100%;
    width: 100%;
  }
  .swiper-wrapper {
    height: 100%;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    ${buttonWrap};
    left: ${spacing.micro_pad};
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    ${buttonWrap};
    right: ${spacing.micro_pad};
  }
  .hero-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5.25rem;
`
