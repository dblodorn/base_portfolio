import { css, keyframes } from 'styled-components'
import { spacing, fonts, shared, breakpoints, colors } from './theme.json'

// Media Queries
const media = {
  small: (...args) => css`
    @media (max-width: 500px) {
      ${ css(...args) }
    }
  `,
  medium: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${ css(...args) }
    }
  `,
  desktopNav: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${ css(...args) }
    }
  `,
  touch: (...args) => css`
    @media (hover: none) {
      ${ css(...args) }
    }
  `
}

// Layout & Positioning UTILS
const maxWidth = css`
  width: 100%;
  max-width: ${shared.max_width};
`

const absoluteCentered = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`

const fixedTopLeft = css`
  position: fixed;
  top: 0;
  left: 0;
`

const mainPadding = css`
  padding: ${spacing.double_pad};
`

const scrollPanel = css`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

const grid = css`
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  ${media.desktopNav`
    &.one_col {
      width: 100%;
    }
    &.three_col {
      width: calc(100% / 3);
    }
    &.four_col {
      width: 25%;
    }
    &.two_col {
      width: 50%;
    }
  `}
`

// TYPOGRAPHY
const sansFont = css`
  font-family: ${fonts.sans};
  font-weight: 400;
`

const bigType = css`
  ${sansFont};
  font-size: ${fonts.sizes.giant_sm};
  line-height: 1;
  ${media.medium`
    font-size: ${fonts.sizes.giant};
  `}
`

const mediumType = css`
  ${sansFont};  
  font-size: ${fonts.sizes.medium_sm};
  line-height: 1;
  ${media.medium`
    font-size: ${fonts.sizes.medium};
  `}
`

const bodyType = css`
  ${sansFont};
  font-size: ${fonts.sizes.body_sm};
  line-height: 1.35;
  ${media.medium`
    font-size: ${fonts.sizes.body};
  `}
`

const smallType = css`
  ${sansFont};
  font-size: ${fonts.sizes.small_sm};
  line-height: 1.25;
  ${media.medium`
    font-size: ${fonts.sizes.small};
  `}
`

const microType = css`
  ${sansFont};
  font-size: ${fonts.sizes.micro_sm};
  line-height: 1.25;
  ${media.medium`
    font-size: ${fonts.sizes.micro};
  `}
`

const defaultLink = css`
  ${sansFont};
  ${bodyType};
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  text-decoration: none;
  color: ${colors.black};
  cursor: pointer;
  span {
    position: relative;
    z-index: 10;
    display: block;
  }
  &:hover {
    text-decoration: underline;
    color: ${colors.hover_color};
  }
`

// STYLE UTILS
const buttonInit = css`
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  border: 0;
  background-color: rgba(255,255,255,0);
  border-radius: 0;
  appearance: none;
  cursor: pointer;
  display: block;
`

const transitionAll = (time) => {
  return css`
    transition-property: all;
    transition-duration: ${time}ms;
    transition-timing-function: ease;
  `
}

const shadow = css`
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.33);
`

// Flex Layout
const flexColumn = css`
  display: flex;
  flex-direction: column;
`
const flexColumnCentered = css`
  ${flexColumn};
  align-items: center;
`

const flexRow = css`
  display: flex;
  flex-direction: row;
`

const flexRowWrap = css`
  ${flexRow};
  flex-wrap: wrap;
`

const flexRowCenteredVert = css`
  ${flexRow};
  align-items: center;
`

const flexRowCenteredAll = css`
  ${flexRowCenteredVert};
  justify-content: center;
`

const flexRowSpaceBetween = css`
  ${flexRow};
  justify-content: space-between;
`

// Animation
const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const animationRotate = css`
  animation: ${spin} 700ms linear 0s infinite normal;
  animation-fill-mode: forwards;
`

const simpleFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const pulseAnimation = css`
  animation: 350ms linear ${pulse} infinite;
`

const animationFadeIn = (time, delay) => {
  return css`
    animation: ${simpleFade} ${time}ms ease normal;
    animation-delay: ${delay}ms;
    animation-fill-mode: both;
  `
}

const borderRadius = (radius) => {
  return css`
    border-radius: ${radius}!important;
  `
}

const fullBg = `
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export {
  media,
  maxWidth,
  absoluteCentered,
  fixedTopLeft,
  mainPadding,
  scrollPanel,
  bigType,
  mediumType,
  bodyType,
  smallType,
  microType,
  defaultLink,
  transitionAll,
  buttonInit,
  shadow,
  animationRotate,
  animationFadeIn,
  flexColumn,
  flexColumnCentered,
  flexRow,
  flexRowWrap,
  flexRowCenteredVert,
  flexRowSpaceBetween,
  flexRowCenteredAll,
  borderRadius,
  pulseAnimation,
  fullBg,
  grid
}