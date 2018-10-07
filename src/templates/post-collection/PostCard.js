import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { FitImage } from './../../components'
import { P, PadWrapper } from './../../styles/components'
import { defaultLink, bigType, flexColumn, media, grid } from './../../styles/mixins'
import { spacing, shared } from './../../styles/theme.json'
import Taxonomies from './Taxonomies'

export default (props) => {
  return (
    <CardWrapper className={props.columns}>
      <PadWrapper>
        <ProjectTitle>{props.cardData.title}</ProjectTitle>
      </PadWrapper>
      {(props.cardData.thumbnail && props.showThumbnail) && 
        <ProjectThumb className={props.columns}>
          <LazyLoad height='100%'><FitImage src={props.cardData.thumbnail}/></LazyLoad>
        </ProjectThumb>
      }
      {(props.cardData.short_description) &&
        <ExcerptWrapper>
          <P>{props.cardData.short_description}</P>
        </ExcerptWrapper>
      }
      {(props.showTaxonomies) && <Taxonomies title={`${props.cardData.title} : Taxonomies`} taxonomies={props.cardData.taxonomies}/>}
      <LinkWrapper>
        <ProjectLink to={(props.cardData.post_type === 'page') ? `/${props.cardData.slug}` : `/${props.cardData.post_type}/${props.cardData.slug}`}><span>View {props.cardData.post_type} ></span></ProjectLink>
      </LinkWrapper>
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
  border-top: ${shared.border_thin};
  padding: ${spacing.double_pad};
`

const ProjectLink = styled(Link)`
  ${defaultLink};
`

const ProjectTitle = styled.h3`
  ${bigType};
  padding-bottom: ${spacing.single_pad};
`

const ProjectThumb = styled.div`
  width: 100%;
  height: 0;
  overflow-y: visible;
  padding-bottom: 65%;
  position: relative;
  border-top: ${shared.border_thin};
  &.one_col {
    border-bottom: ${shared.border_thin};
  }
`

const LinkWrapper = styled(PadWrapper)`
  display: flex;
  margin-top: auto;
  justify-content: flex-end;
`
