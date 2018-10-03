import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FitImage } from './../../components'
import { H3 } from './../../styles/components'
import { spacing } from './../../styles/theme.json'

export default (props) => {
  return (
    <Card to={`/posts/${props.cardData.slug}`}>
      <ProjectThumb>
        <FitImage src={props.cardData.thumbnail.large} />
      </ProjectThumb>
      <H3>{props.cardData.title}</H3>
    </Card>
  )
}

// STYLES
const Card = styled(Link)`
  width: calc(100% / 3);
  position: relative;
  flex-grow: 0;
  padding: 0 ${spacing.single_pad} ${spacing.double_pad};
`

const ProjectThumb = styled.div`
  width: 100%;
  height: 0;
  overflow-y: visible;
  padding-bottom: 100%;
  position: relative;
  top: 0;
  left: 0;
`
