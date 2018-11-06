import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../../styles/theme'
import LazyLoad from 'react-lazyload'
import { FitImage } from './../../../components'
import { CardP, ExcerptWrapper, ProjectTitle, PadWrapper, ButtonLink, ProportionWrapper } from './../../../styles/components'
import { flexColumn, media, flexRowWrap } from './../../../styles/mixins'
import { shared, spacing } from './../../../styles/theme.json'
import Taxonomies from './Taxonomies'

/*
  Action Type
  
  popup_grid : Popup Grid
  link_wrapper : Link Wrapper
  link_button : Link Button
  text_link : Text Link


  props.data.content.thumbnail_style

  hover_image : Title with hover Image, tap on mobile
  hover_title : Image with hover caption, tap on mobile
  image_title : Image with caption underneath
  image_only : Image Only
  text_only : Text only link

*/

export default (props) =>
  <CardWrapper className={`${props.data.columns} ${props.data.style}`}>
    {(props.cardData.thumbnail && (props.data.thumbnail_style === 'image_title')) && 
      <ThumbnailWrapper
        className={`${props.data.columns} ${props.data.style}`}
        Desktop={props.data.thumbnail_proportion}
        Mobile={props.data.thumbnail_proportion_mobile}
        Max={props.data.thumbnail_proportion_max}
      >
        <LazyLoad height='100%'>
          <FitImage src={props.cardData.thumbnail} fit={'cover'}/>
        </LazyLoad>
      </ThumbnailWrapper>
    }
    <ThemeProvider theme={themes[props.data.theme] || themeA}>
      <CardInfo className={`${props.data.columns} ${props.data.style}`}>
      <ProjectTitle>{props.cardData.title}</ProjectTitle>
      {(props.cardData.short_description && props.data.show_description) &&
        <ExcerptWrapper>
          <CardP>{props.cardData.short_description}</CardP>
        </ExcerptWrapper>
      }
      {(props.data.show_post_taxonomies) && 
          <Taxonomies title={`${props.cardData.title} : Taxonomies`} taxonomies={props.cardData.taxonomies}/>
        }
        {(props.data.link_style === 'button_link') &&
          <LinkWrapper>
          <ButtonLink to={(props.cardData.post_type === 'page') ? `/${props.slug}` : `/${props.slug}/${props.cardData.slug}`}>
              <span>{props.data.link_cta}</span>
            </ButtonLink>
          </LinkWrapper>
        }
      </CardInfo>
    </ThemeProvider>
  </CardWrapper>

// STYLES
const CardWrapper = styled.li`
  ${flexColumn};
  position: relative;
  padding-bottom: ${spacing.double_pad};
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

const ThumbnailWrapper = styled(ProportionWrapper)`
  &.border {
    border-bottom: ${shared.border_thin};
  }
`

const LinkWrapper = styled(PadWrapper)`
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
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.top_bg_color};
  ${media.desktopNav`
    ${flexRowWrap};
    justify-content: space-between;
  `}
  &.two_col,
  &.three_col,
  &.four_col {
    ${flexColumn};
  }
`