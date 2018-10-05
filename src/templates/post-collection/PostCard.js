import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FitImage } from './../../components'
import { H3 } from './../../styles/components'
import { spacing } from './../../styles/theme.json'

export default (props) => {
  return (
    <Card to={`/${props.cardData.post_type}/${props.cardData.slug}`}>
      <H3>{props.cardData.title}</H3>
      {(props.cardData.thumbnail) && 
        <ProjectThumb>
          <FitImage src={props.cardData.thumbnail} />
        </ProjectThumb>
      }
    </Card>
  )
}

// STYLES
const Card = styled(Link)`
  width: 100%;
  position: relative;
  flex-grow: 0;
  padding: 0 0 ${spacing.double_pad};
`

const ProjectThumb = styled.div`
  width: 100%;
  height: 0;
  overflow-y: visible;
  padding-bottom: 50%;
  position: relative;
`
