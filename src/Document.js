import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import styled, { injectGlobal } from 'styled-components'
import { animationFadeIn, flexColumn, media, mobileMenuTransition } from './styles/mixins'
import { colors, fonts, heights, widths } from './styles/theme.json'
import { routeName } from './scripts'
import { Footer, Header } from './components'
import { LoadingPage } from './views'

const Document = (props) => {
  if (props.api_data) {
    return (
      <Fragment>
        <Header/>
        <Main id={
          routeName(props.router.location.pathname).routeClass}
          className={[
            props.header_style,
            props.menu && `hide`
          ].join(' ')}>
          {props.children}
        </Main>
        <Footer orientation={props.header_style}/>
      </Fragment>
    )
  } else {
    return <LoadingPage/>
  }
}

export default connect(
  state => ({
    api_data: state.api_data,
    header_style: state.header_style,
    router: state.router,
    menu: state.menu
  })
)(Document)

// MAIN STYLING
const Main = styled.main`
  ${animationFadeIn(1000, 150)};
  ${flexColumn};
  ${mobileMenuTransition};
  width: 100vw;
  position: relative;
  margin-top: ${heights.mobile_header};
  min-height: calc(100vh - ${heights.mobile_header});
  transform: translateX(0);
  ${media.desktopNav`
    margin-top: 0;
    min-height: calc(100vh - ${heights.footer});
  `}
  &.hide {
    transform: translateX(100vw);
  }
  &.sidebar {
    ${media.desktopNav`
      padding-left: ${widths.sidebar_desktop};
      padding-bottom: ${heights.footer};
    `}
  }
  &.top-horizontal {
    ${media.desktopNav`
      padding-top: ${heights.header};
      padding-bottom: ${heights.footer};
    `}
  }
`

// NORMALIZE CSS
injectGlobal`
  html {
    font-size: 58%;
  }
  @media screen and (min-width: 960px) {
    html {
      font-size: 62.5%;
    }
  }
  @media screen and (min-width: 1550px) {
    html {
      font-size: 72.5%;
    }
  }
  @media screen and (min-width: 1750px) {
    html {
      font-size: 78.5%;
    }
  }
  body {
    font-family: arial;
    color: ${colors.black};
    font-family: ${fonts.sans};
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
  }
  ::-webkit-input-placeholder,
  ::-moz-placeholder {
    color: white;
    font-size: 15vmin;
    ${fonts.sans};
  }
`
