import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { injectGlobal } from 'styled-components'
import { Main } from './styles/components'
import { colors, fonts } from './styles/theme.json'
import { routeName } from './scripts'
import { Head, Footer, Header } from './components'
import { LoadingPage } from './views'

class Document extends Component {
  render() {
    if (this.props.api_data) {
      return (
        <Fragment>
          <Head Title={routeName(this.props.router.location.pathname).routeTitle}/>
          <Header/>
          <Main id={routeName(this.props.router.location.pathname).routeClass}>
            {this.props.children}
          </Main>
          <Footer/>
        </Fragment>
      )
    } else {
      return <LoadingPage/>
    }
  }
}

export default connect(
  state => ({
    api_data: state.api_data,
    router: state.router
  })
)(Document)

// NORMALIZE CSS
injectGlobal`
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
  ol, ul {
    list-style: none;
  }
  html {
    font-size: 58%;
    -webkit-font-smoothing: antialiased;
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
    font-size: 16px;
    overflow-x: hidden;
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    font-family: arial;
    color: ${colors.black};
    font-family: ${fonts.sans};
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    outline: 0;
  }
  ::-webkit-input-placeholder,
  ::-moz-placeholder {
    color: white;
    font-size: 15vmin;
    ${fonts.sans};
  }
  ::-webkit-scrollbar {
    width: 2px;
  }
  *::-webkit-scrollbar-track {
    background: ${colors.dk_blue};
  }
  *::-webkit-scrollbar-thumb {
    background: ${colors.lt_blue};
  }
  *::-webkit-scrollbar-thumb:hover {
    background: ${colors.mint};
  }
`
