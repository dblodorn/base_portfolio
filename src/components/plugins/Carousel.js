import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import Swiper from 'react-id-swiper/lib/custom'
import Waypoint from 'react-waypoint'
import CarouselSlide from './CarouselSlide'
import SimpleVideo from './../utils/SimpleVideo'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false
    }
    this._wayPointEnter = this._wayPointEnter.bind(this)
    this._wayPointLeft = this._wayPointLeft.bind(this)
    this._slideChange = this._slideChange.bind(this)
  }

  _wayPointEnter() {
    console.log('waypoint enter')
    this.swiper.autoplay.start()
  }

  _wayPointLeft() {
    console.log('waypoint leave')
    this.swiper.autoplay.stop()
    this._stop()
  }

  _slideChange() {
    const slideIndex = this.swiper.realIndex
    const slideType = this.swiper.slides[slideIndex].dataset.slidetype
    console.log(slideType)
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
    this._slideChange()
  }

  render() {
    const swiperParams = {
      on: {
        slideChange: () => {
          this._slideChange()
        }
      },
      autoplay: {
        delay: 1500
      },
      pagination: {
        el: '.hero-swiper-pagination',
        type: 'bullets',
        dynamicBullets: false,
        clickable: true
      },
      navigation: {
        nextEl: null,
        prevEl: null
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 3000
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
)(Carousel)

// STYLES
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
`
