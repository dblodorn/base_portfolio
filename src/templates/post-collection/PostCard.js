import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { FitImage } from './../../components'
import { H3, SmallP } from './../../styles/components'
import { defaultLink, bigType } from './../../styles/mixins'
import { spacing, colors, shared } from './../../styles/theme.json'
import Taxonomies from './Taxonomies'

export default (props) => {
  return (
    <CardWrapper>
      <ProjectTitle>{props.cardData.title}</ProjectTitle>
      {(props.cardData.thumbnail) && 
        <ProjectThumb>
          <LazyLoad height='100%'><FitImage src={props.cardData.thumbnail} /></LazyLoad>
        </ProjectThumb>
      }
      <Taxonomies title={`${props.cardData.title} : Taxonomies`} taxonomies={props.cardData.taxonomies}/>
      <ProjectLink to={`/${props.cardData.post_type}/${props.cardData.slug}`}><span>View {props.cardData.post_type} ></span></ProjectLink>
    </CardWrapper>
  )
}

// STYLES
const CardWrapper = styled.li`
  border-bottom: ${shared.border_thick};
  width: 100%;
  position: relative;
  flex-grow: 0;
  padding: 0 0 ${spacing.big_pad};
  margin-bottom: ${spacing.big_pad};
`

const ProjectLink = styled(Link)`
  ${defaultLink};
`

const ProjectTitle = styled.h3`
  ${bigType};
  padding-bottom: ${spacing.double_pad};
`

const ProjectThumb = styled.div`
  width: 100%;
  height: 0;
  overflow-y: visible;
  padding-bottom: 50%;
  position: relative;
`
