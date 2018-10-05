import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { heights, spacing } from './theme.json'
import * as _ from './mixins'

// DOM NODES
const Main = styled.main`
  ${_.animationFadeIn(1000, 150)};
  ${_.flexColumn};
  width: 100%;
  padding-top: ${heights.header};
  min-height: calc(100vh - ${heights.footer});
  position: relative;
  z-index: 100;
  z-index: 0;
`

const Section = styled.section`
  width: 100%;
  ${_.mainPadding};
  ${_.flexColumn};
`

const Article = styled.article`
  ${_.flexColumn};
  width: 100%;
  max-width: 96rem;
  z-index: 100;
  position: relative;
  p {
    ${_.bodyType};
    color: ${props => props.color};
  }
`

// TYPE
const H1 = styled.h1`
  ${_.bigType};
  padding-bottom: ${spacing.single_pad};
`

const H2 = styled.h2`
  ${_.mediumType};
  padding-bottom: ${spacing.double_pad};
`

const H3 = styled.h3`
  ${_.bodyType};
`

const P = styled.p`
  ${_.bodyType};
`

// UI

const StyledLink = styled(Link)`
  ${_.defaultLink};
  &.active {
    pointer-events: none;
    &:after {
      opacity: 1;
      transform: scale(1);
    }
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
  H1,
  H2,
  H3,
  P,
  SocialLink,
  StyledLink,
  LogoWrapperFixedTopRight,
  FullPageBgWrapper
}