import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import LazyLoad from 'react-lazyload'
import { themeA, themeB } from './../../styles/theme'
import { FitImage } from './../../components'
import { P, PadWrapper, ButtonLink } from './../../styles/components'
import { bigType, flexColumn, media, grid, flexRow } from './../../styles/mixins'
import { spacing, shared } from './../../styles/theme.json'
import Taxonomies from './Taxonomies'

const themes = {
  'a': themeA,
  'b': themeB
}

export default (props) => {
  return (
    <CardWrapper className={`${props.columns} ${props.style}`}>
      {(props.showTitle) &&
        <ThemeProvider theme={themes[props.theme]}>
          <ProjectTitle>{props.cardData.title}</ProjectTitle>
        </ThemeProvider>
      }
      {(props.cardData.thumbnail && props.showThumbnail) && 
        <ProjectThumb className={(props.showTitle) && props.style} Proportion={`${props.thumbnail_proportion}%`}>
          <LazyLoad height='100%'><FitImage src={props.cardData.thumbnail}/></LazyLoad>
        </ProjectThumb>
      }
      <ThemeProvider theme={themes[props.theme]}>
        <CardInfo className={props.columns} className={props.style}>
          {(props.cardData.short_description) &&
            <ExcerptWrapper>
              <CardP>{props.cardData.short_description}</CardP>
            </ExcerptWrapper>
          }
          {(props.showTaxonomies) && <Taxonomies title={`${props.cardData.title} : Taxonomies`} taxonomies={props.cardData.taxonomies}/>}
          {(props.linkButton) &&
            <LinkWrapper>
              <ButtonLink to={(props.cardData.post_type === 'page') ? `/${props.cardData.slug}` : `/${props.cardData.post_type}/${props.cardData.slug}`}>
                <span>More Info</span>
              </ButtonLink>
            </LinkWrapper>
          }
        </CardInfo>
      </ThemeProvider>
    </CardWrapper>
  )
}

// STYLES
const CardWrapper = styled.li`
  ${flexColumn};
  position: relative;
  ${grid};
  &.border {
    border-bottom: ${shared.border_thin};
    ${media.desktopNav`
    &.two_col {
      &:nth-child(odd) {
        border-right: ${shared.border_thin};
      }
    }
  `}
  }
`

const ExcerptWrapper = styled.div`
  padding: ${spacing.double_pad};
  background-color: ${props => props.theme.top_bg_color};
`

const ProjectTitle = styled.h3`
  ${bigType};
  color: ${props => props.theme.header_color}!important;
  font-family: ${props => props.theme.display_font};
  text-transform: ${props => props.theme.display_case};
  background-color: ${props => props.theme.top_bg_color};
  padding: ${spacing.double_pad};
  display: block;
`

const ProjectThumb = styled.div`
  width: 100%;
  height: 0;
  overflow-y: visible;
  padding-bottom: ${props => props.Proportion};
  position: relative;
  &.border {
    border-top: ${shared.border_thin};
  }
`

const LinkWrapper = styled(PadWrapper)`
  display: flex;
  margin-top: auto;
  justify-content: flex-end;
  ${media.desktopNav`
    height: 100%;
    align-items: center;
  `}
`

const CardP = styled(P)`
  color: ${props => props.theme.header_color}!important;
  font-family: ${props => props.theme.display_font};
`

const CardInfo = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.top_bg_color};
  &.border {
    border-top: ${shared.border_thin}; 
  }
  ${media.desktopNav`
    ${flexRow};
    justify-content: space-between;
  `}
  &.two_col,
  &.three_col,
  &.four_col {
    ${media.desktopNav`
      ${flexColumn};
    `}
  }
`