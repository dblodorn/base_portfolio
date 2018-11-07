import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import Swiper from 'react-id-swiper/lib/custom'
import { ImgFit } from './../../styles/components'
import { spacing, colors, shared, heights } from './../../styles/theme.json'
import { buttonInit, absoluteTopFull, microType, media } from './../../styles/mixins'
import { PrevButton, NextButton } from './../utils/PrevNextButton'
import TextOverlay from './../TextOverlay'

class SimpleSlider extends Component {
  constructor(props) {
    super(props)
    const autoplay = () => {
      if (!this.props.data.autoplay) {
        return false
      } else {
        return {
          delay: 1500,
          disableOnInteraction: false
        }
      }
    }
    this.state = {
      revealSlider: false,
      autoplay: autoplay(),
      transitionTime: this.props.data.transition_time || 500
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        revealSlider: true
      });
      if (this.props.currentSlide) {
        this.swiper.slideTo(this.props.currentSlide)
        console.log(this.props.currentSlide)
      }
      if (!this.props.data.autoplay) {
        this.swiper.autoplay.stop()
      }
    }, 250);
  };

  render() {
    const swiperParams = {
      autoplay: this.state.autoplay,
      pagination: {
        el: (this.props.data.pagination === 'none' || !this.props.data.pagination) ? null : `.swiper-pagination`,
        type: this.props.data.pagination,
        clickable: true
      },
      navigation: {
        nextEl: (this.props.data.controls) ? `.swiper-button-next` : null,
        prevEl: (this.props.data.controls) ? `.swiper-button-prev` : null
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplayDisableOnInteraction: false,
      speed: this.props.data.transition_time || 1000,
      loop: true,
      renderPrevButton: () => 
        <button className={`swiper-button-prev ${this.props.data.controls}`}>
          {(this.props.data.controls === 'fixed') && <PrevButton color={this.props.data.controls_color}/>}
        </button>,
      renderNextButton: () => 
        <button className={`swiper-button-next ${this.props.data.controls}`}>
          {(this.props.data.controls === 'fixed') && <NextButton color={this.props.data.controls_color}/>}
        </button>,
    }

    return (
      (this.state.revealSlider) &&
        <HeroSlider className={`${this.props.data.controls_color} ${this.props.modal}`}>
          <Swiper {...swiperParams} ref={node => { if (node) this.swiper = node.swiper }}>
            {this.props.data.slides.map((item) =>
              <HeroSlide key={item.image.id + 'simple-slideshow'} className={this.props.data.image_style}>
                {(this.props.data.captions && !this.props.data.has_text_overlay) &&
                  <TextOverlay content={`<h2>${item.image.description.title}</h2><br><p>${item.image.description.caption}</p>`}/>
                }
                {(this.props.data.has_text_overlay) &&
                  <TextOverlay content={`${this.props.data.text_overlay_content}`}/>
                }
                <SlideShowImg src={item.image.large} Fit={this.props.data.image_style} className={`${this.props.modal}`}/>
              </HeroSlide>
            )}
          </Swiper>
        </HeroSlider>
    )
  }
}

export default connect(
  state => ({
    window_width: state.resize_state.window_width
  })
)(SimpleSlider)

// STYLES
const buttonWrap = css`
  ${buttonInit};
  padding: 0;
  width: 5rem;
  height: 8rem;
`

const HeroSlide = styled.div`
  ${absoluteTopFull};
  position: relative;
  width: 100%;
  height: 100%;
`

const SlideShowImg = styled(ImgFit)`
  ${media.desktopNav`
    padding: ${props => 
      (props.Fit === 'contain') 
      ? `calc(${heights.header} * 2) ${heights.header}`
      : `${heights.header} 0 ${heights.footer}`
    };
  `}
  &.modal {
    padding: ${props => 
      (props.Fit === 'contain') 
      ? spacing.double_pad
      : spacing.double_pad
    };
  }
`

const HeroSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &.light {
    .swiper-pagination-bullet {
      background: ${colors.white};
      opacity: 0.25;
      &:hover {
        opacity: 1;
      }
    }
    .swiper-pagination-bullet-active {
      background: ${colors.white};
      opacity: 1;
    }
    .swiper-pagination-fraction {
      color: ${colors.white};
    }
    .swiper-button-next.hover {
      cursor: ${shared.next_white} 12 12, auto!important;
    }
    .swiper-button-prev.hover {
      cursor: ${shared.prev_white} 12 12, auto!important;
    }
  }
  &.dark {
    .swiper-pagination-bullet {
      background: ${colors.black};
      opacity: 0.25;
      &:hover {
        opacity: 1;
      }
    }
    .swiper-pagination-bullet-active {
      background: ${colors.black};
      opacity: 1;
    }
    .swiper-pagination-fraction {
      color: ${colors.black};
    }
    .swiper-button-next.hover {
      cursor: ${shared.next_black} 12 12, auto!important;
    }
    .swiper-button-prev.hover {
      cursor: ${shared.prev_black} 12 12, auto!important;
    }
  }
  &.modal {
    .swiper-pagination {
      bottom: 1rem!important;
      right: 1rem!important;
    }
  }
  .swiper-container {
    height: 100%;
    width: 100%;
  }
  .swiper-wrapper {
    height: 100%;
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-next,
  .swiper-button-prev {
    &.fixed {
      ${buttonWrap};
      opacity: 1;
    }
    &.hover {
      ${buttonInit};
      width: 25vw;
      height: 100%;
      position: fixed;
      display: block;
      opacity: 1;
      z-index: 1000;
      top: 0;
    }
  }
  .hero-player {
    ${absoluteTopFull};
    z-index: 100;
  }
  .swiper-pagination {
    bottom: calc(${heights.footer} + ${spacing.single_pad});
    padding: 0 ${spacing.single_pad};
    text-align: right;
  }
  .swiper-pagination-fraction {
    right: ${spacing.single_pad};
    ${microType};
    text-align: right;
    padding-right: ${spacing.single_pad};
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 100%;
    background: ${colors.white};
    opacity: 0.25;
    &:hover {
      opacity: 1;
    }
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: ${colors.black};
  }
`
