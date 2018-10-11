import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Section, GridWrapper, PlayButtonWrapper } from './../../../styles/components'
import { Video, PlayButton, FitImage } from './../../../components'
import { absoluteTopFull, flexCenteredAll } from './../../../styles/mixins'
import { colors } from './../../../styles/theme.json'
import VideoCard from './VideoCard'

export default (props) => {
  return (
    <Section>
      <GridWrapper className={`${props.data.content.container_width} ${props.data.content.columns}`}>
        {(!props.data.content.permalink)
          ? props.data.content.video_collection.map((item, i) =>
              <VideoCard item={item} key={item.post_id + 'vg' + i}>
                <Video coverUrl={item.thumbnail} videoUrl={item.video_url}/>
              </VideoCard>
            )
          : props.data.content.video_collection.map((item, i) =>
              <VideoCard item={item} key={item.post_id + 'vg' + i}>
                <VideoLink to={`/video/${item.slug}`}>
                  <PlayButtonWrapper>
                    <PlayButton color={colors.white}/>
                  </PlayButtonWrapper>
                  <FitImage src={item.thumbnail} fit={'cover'}/>
                </VideoLink>
              </VideoCard>
            )
          }
      </GridWrapper>
    </Section>
  )
}

const VideoLink = styled(Link)`
  ${absoluteTopFull};
  ${flexCenteredAll};
`
