import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { FitImage } from './../../components'
import { P, PadWrapper } from './../../styles/components'
import { defaultLink, bigType, flexColumn, media, grid, flexRow } from './../../styles/mixins'
import { spacing, shared } from './../../styles/theme.json'
import Taxonomies from './Taxonomies'

export default (props) => {
  return (
    <CardWrapper className={props.columns}>
      <PadWrapper>
        <ProjectTitle>{props.cardData.title}</ProjectTitle>
      </PadWrapper>
      {(props.cardData.thumbnail && props.showThumbnail) && 
        <ProjectThumb className={props.columns} Proportion={`${props.thumbnail_proportion}%`}>
          <LazyLoad height='100%'><FitImage src={props.cardData.thumbnail}/></LazyLoad>
        </ProjectThumb>
      }
      <CardInfo className={props.columns}>
        {(props.cardData.short_description) &&
          <ExcerptWrapper>
            <P>{props.cardData.short_description}</P>
          </ExcerptWrapper>
        }
        {(props.showTaxonomies) && <Taxonomies title={`${props.cardData.title} : Taxonomies`} taxonomies={props.cardData.taxonomies}/>}
        <LinkWrapper>
          <ProjectLink to={(props.cardData.post_type === 'page') ? `/${props.cardData.slug}` : `/${props.cardData.post_type}/${props.cardData.slug}`}><span>View {props.cardData.post_type} ></span></ProjectLink>
        </LinkWrapper>
      </CardInfo>
    </CardWrapper>
  )
}

// STYLES
const CardWrapper = styled.li`
  ${flexColumn};
  border-bottom: ${shared.border_thin};
  position: relative;
  ${grid};
  ${media.desktopNav`
    &.two_col {
      &:nth-child(odd) {
        border-right: ${shared.border_thin};
      }
    }
  `}
`

const ExcerptWrapper = styled.div`
  padding: ${spacing.double_pad};
`

const ProjectLink = styled(Link)`
  ${defaultLink};
`

const ProjectTitle = styled.h3`
  ${bigType};
`

const ProjectThumb = styled.div`
  width: 100%;
  height: 0;
  overflow-y: visible;
  padding-bottom: ${props => props.Proportion};
  position: relative;
  border-top: ${shared.border_thin};
`

const LinkWrapper = styled(PadWrapper)`
  display: flex;
  margin-top: auto;
  justify-content: flex-end;
`

const CardInfo = styled.div`
  border-top: ${shared.border_thin};
  width: 100%;
  height: 100%;
  ${media.desktopNav`
    ${flexRow};
    justify-content: space-between;
  `}
  &.two_col,
  &.three_col,
  &.four_col {
    ${media.desktopNav`
      ${flexColumn};
      justify-content: ;
    `}
  }
`