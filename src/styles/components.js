import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { heights, spacing, shared, colors, breakpoints } from './theme.json'
import * as _ from './mixins'

// DOM NODES
const Main = styled.main`
  ${_.animationFadeIn(1000, 150)};
  ${_.flexColumn};
  width: 100%;
  position: relative;
  min-height: calc(100vh - ${heights.footer});
  ${_.media.desktopNav`
    padding-top: ${heights.header};
  `}
`

const Section = styled.section`
  width: 100%;
  ${_.flexColumn};
`

const Article = styled.article`
  ${_.wrapperWidths};
  padding-left: ${spacing.double_pad};
  padding-right: ${spacing.double_pad};
`

const PadWrapper = styled.div`
  ${_.mainPadding};
  &.add-top-border {
    border-top: ${shared.border_thin};
  }
`

const GridWrapper = styled.ul`
  ${_.wrapperWidths};
  ${_.flexRowWrap};
  ${_.grid};
`

const ProportionWrapper = styled.div`
  height: 0;
  overflow-y: visible;
  position: relative;
  width: 100%;
  padding-bottom: ${props => props.Mobile};
  ${_.media.medium`
    padding-bottom: ${props => props.Proportion};
  `}
  ${_.media.big`
    padding-bottom: ${props => props.Max};
  `}
`

// TYPE
const H1 = styled.h1`
  ${_.bigType};
  padding-bottom: ${spacing.single_pad};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${props => props.theme.display_font};
  text-transform: ${props => props.theme.display_case};
`

const H2 = styled.h2`
  ${_.mediumType};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${props => props.theme.display_font};
`

const H3 = styled.h3`
  ${_.bodyType};
  padding-bottom: ${spacing.double_pad};
  font-family: ${props => props.theme.display_font};
`

const P = styled.p`
  ${_.bodyType};
  font-family: ${props => props.theme.body_copy_font};
`

const SmallP = styled.p`
  ${_.smallType};
  font-family: ${props => props.theme.body_copy_font};
`

const StyledButton = styled.button`
  ${_.buttonStyle};
`

const ButtonLink = styled(Link)`
  ${_.buttonStyle};
`

const StyledMarkup = styled.div`
  &.pad-top {
    padding-top: ${spacing.double_pad};
  }
  h1 {
    ${_.bigType};
  }
  h2 {
    ${_.mediumType};
  }
  h3 {
    ${_.bodyType};
  }
  h4 {
    ${_.bodyType};
  }
  h5 {
    ${_.bodyType};
  }
  p {
    ${_.bodyType};
  }
  a {
    ${_.defaultLink};
  }
  * {
    color: ${props => props.theme.body_copy_color}!important;
    font-family: ${props => props.theme.body_copy_font}!important;
  }
`

// UI
const StyledLink = styled(Link)`
  ${_.defaultLink};
`

const NavItem = styled.li`
  padding-bottom: ${spacing.double_pad};
  &:last-child {
    padding-bottom: 0;
  }
  ${_.media.medium`
    padding-right: ${spacing.double_pad};
    padding-bottom: 0;
    &:last-child {
      padding-right: 0;
    }
  `}
  &.active {
    pointer-events: none!important;
    text-decoration: underline;
    * { color: ${colors.active_color}; }
  }
`

const SocialLink = styled.a`
  display: block;
  width: 3rem;
  height: 3rem;
  svg {
    width: 100%;
    height: auto;
  }
`

// WRAPPERS
const LogoWrapperFixedTopRight = styled.div`
  position: fixed;
  top: ${props => props.position_sm};
  right: ${props => props.position_sm};
  z-index: 9000;
  ${_.media.medium`
    top: ${props => props.position_med};
    right: ${props => props.position_med};
  `}
`

const FullPageBgWrapper = styled.aside`
  ${_.fixedTopLeft};
  width: 100%;
  height: 100vh;
  z-index: 0;
`

export {
  Main,
  Section,
  Article,
  PadWrapper,
  H1,
  H2,
  H3,
  P,
  SmallP,
  StyledMarkup,
  SocialLink,
  StyledLink,
  LogoWrapperFixedTopRight,
  FullPageBgWrapper,
  NavItem,
  ButtonLink,
  StyledButton,
  GridWrapper,
  ProportionWrapper
}