import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../../styles/theme'
import LazyLoad from 'react-lazyload'
import { FitImage } from './../../../components'
import { CardP, ExcerptWrapper, ProjectTitle, PadWrapper, ButtonLink, ProportionWrapper } from './../../../styles/components'
import { flexColumn, media, flexRowWrap, absoluteTopFull, opacityTransition } from './../../../styles/mixins'
import { shared, spacing, colors } from './../../../styles/theme.json'
import Taxonomies from './Taxonomies'

export default (props) => {
  
  const CardText = () =>
    <CardInfo className={`${props.data.columns} ${props.data.style} ${props.data.thumbnail_style}`}>
      <ProjectTitle>{props.cardData.title}</ProjectTitle>
      {(props.cardData.short_description && props.data.show_description) &&
        <ExcerptWrapper className={'excerpt'}>
          <CardP>{props.cardData.short_description}</CardP>
        </ExcerptWrapper>
      }
      {(props.data.show_post_taxonomies) &&
        <Taxonomies title={`${props.cardData.title} : Taxonomies`} taxonomies={props.cardData.taxonomies} />
      }
      {(props.data.link_style === 'button_link') &&
        <LinkWrapper className={'cta'}>
          <ButtonLink to={(props.cardData.post_type === 'page') ? `/${props.slug}` : `/${props.slug}/${props.cardData.slug}`}>
            <span>{props.data.link_cta}</span>
          </ButtonLink>
        </LinkWrapper>
      }
    </CardInfo>

  const CardInner = () =>
    <Fragment>
      <CardText/>
      <HoverImageWrapper className={`${props.data.thumbnail_style} image`}>
        <LazyLoad height='100%'>
          <FitImage src={props.cardData.thumbnail} fit={'cover'} />
        </LazyLoad>
      </HoverImageWrapper>
    </Fragment>
  
  return (
    <ThemeProvider theme={themes[props.data.theme] || themeA}>
      <CardWrapper className={`${props.data.columns} ${props.data.style} ${props.data.thumbnail_style}`}>
        <ProportionWrapper
          className={`${props.data.columns} ${props.data.style}`}
          Desktop={props.data.thumbnail_proportion}
          Mobile={props.data.thumbnail_proportion_mobile}
          Maximum={props.data.thumbnail_proportion_max}
        >
          {(props.data.link_style === 'full_link')
            ? <Link to={props.cardData.post_type === "page" ? `/${props.cardData.slug}` : `/${props.slug}/${props.cardData.slug}`}>
                <CardInner/>
              </Link>
            : <CardInner/>
          }
        </ProportionWrapper>
      </CardWrapper>
    </ThemeProvider>
  )
}

// STYLES
const CardWrapper = styled.li`
  ${flexColumn};
  position: relative;
  background-color: ${props => props.theme.top_bg_color};
  z-index: 20;
  &.hover_title {
    &:hover {
      .hover_title,
      .cta {
        opacity: 1;
      }
      .image {
        opacity: .25;
      }
    }
  }
  &.hover_image {
    &:hover {
      .image,
      .cta {
        opacity: 1;
      }
      h3 {
        color: ${colors.white}!important;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${colors.black};
      }
      .excerpt {
        opacity: 0;
      }
    }
  }
  &.border {
    border-bottom: ${shared.border_thin};
    ${media.desktopNav`
    &.two_col {
      &:nth-child(odd) {
        border-right: ${shared.border_thin};
      }
    }
    &:last-child {
      border-bottom: 0;
    }
  `}
  }
`

const HoverImageWrapper = styled.div`
  ${absoluteTopFull};
  ${opacityTransition};
  opacity: 1;
  z-index: 0;
  &.hover_image {
    opacity: 0;
  }
`

const LinkWrapper = styled(PadWrapper)`
  ${opacityTransition};
  opacity: 0;
  display: flex;
  margin-top: auto;
  justify-content: flex-end;
  ${media.desktopNav`
    &.one_col {
      height: 100%;
      align-items: center;
    }
  `}
  &.two_col,
  &.three_col,
  &.four_col {
    justify-content: flex-end;
  }
`

const CardInfo = styled.div`
  ${absoluteTopFull};
  ${opacityTransition};
  ${flexColumn};
  z-index: 10;
  opacity: 1;
  &.hover_title {
    opacity: 0;
  }
`