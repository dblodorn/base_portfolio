import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import LazyLoad from 'react-lazyload'
import { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../styles/theme'
import { GridWrapper, ModalWrapper, CarouselWrapper, ProportionWrapper } from './../../styles/components'
import { breakpoints } from './../../styles/theme.json'
import Modal from './Modal'
import FitImage from './../utils/FitImage'
import Close from './../utils/Close'
import SimpleSlider from './../carousel/SimpleSlider'
import ImageCaption from './../ImageCaption'

class SlideshowModal extends Component {
    constructor(props) {
      super(props)
      this.state = {
        modal: false,
        current_slide: 0
      }
      this._ImageEnlarge = this._ImageEnlarge.bind(this)
    }
  
    _ImageEnlarge(index) {
      if ((this.props.resize_state.window_width >= breakpoints.desktop) || this.props.mobile) {
        this.setState({
          modal: !this.state.modal,
          current_slide: index
        })
      }
    }

    render() {
      return (
        <Fragment>
          <GridWrapper className={`${this.props.width} ${this.props.columns}`}>
            {this.props.data.images.map((item, i) =>
              <li key={item.image.id + 'grid-pop-slideshow'}>
                <ProportionWrapper 
                  DeskTop={this.props.data.thumbnail_proportion}
                  Mobile={this.props.data.thumbnail_proportion}
                  Max={this.props.data.thumbnail_proportion}
                >
                  <LazyLoad height='100%'>
                    <FitImage clickFunction={() => this._ImageEnlarge(i + 1)} src={item.image.large} fit={this.props.data.fit || 'cover'}/>
                  </LazyLoad>
                </ProportionWrapper>
                {((this.props.captions === 'grid') || (this.props.captions === 'both')) && <ImageCaption caption={item.image.description}/>}
              </li>
            )}
          </GridWrapper>
          <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
            {this.state.modal && (styles => 
              <Modal>
                <ThemeProvider theme={themes[this.props.theme] || themeA}>
                  <ModalWrapper style={styles}>
                    <Close clickFunction={() => this._ImageEnlarge(0)} color={themes[this.props.theme].popup_close_color || themeA.popup_close_color}/>
                    <CarouselWrapper className={`fixed-hero`}>
                      <SimpleSlider 
                        data={{
                          slides: this.props.data.images,
                          autoplay: false,
                          controls: 'fixed',
                          pagination: 'fraction',
                          controls_color: 'dark',
                          image_style: 'contain',
                          transition_time: 300,
                          has_text_overlay: false,
                          captions: false
                        }}
                        currentSlide={this.state.current_slide}
                        modal={`modal`}
                        captions={this.props.captions}
                      />
                    </CarouselWrapper>
                  </ModalWrapper>
                </ThemeProvider>
              </Modal>
            )}
          </Transition>
        </Fragment>
    )
  }
}

export default connect(
  state => ({
    resize_state: state.resize_state
  })
)(SlideshowModal)
