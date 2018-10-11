import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Section, GridWrapper, PlayButtonWrapper } from './../../../styles/components'
import { Video, PlayButton, FitImage, VideoModal } from './../../../components'
import { absoluteTopFull, flexCenteredAll, halfFixed } from './../../../styles/mixins'
import { colors } from './../../../styles/theme.json'
import VideoCard from './VideoCard'

export default (props) =>
  <VideoGridSection className={((props.data.content.container_width === 'fixed_left') || (props.data.content.container_width === 'fixed_right')) ? props.data.content.container_width : false }>
    <GridWrapper className={`${props.data.content.container_width} ${props.data.content.columns}`}>
      {(props.data.content.display_method === 'inline')
        ? props.data.content.video_collection.map((item, i) =>
            <VideoCard item={item} overflow={((props.data.content.container_width === 'fixed_left') || (props.data.content.container_width === 'fixed_right'))  ? true : false} key={item.post_id + 'vg' + i}>
              <Video coverUrl={item.thumbnail} videoUrl={item.video_url}/>
            </VideoCard>
          )
        : (props.data.content.display_method === 'permalink')
        ? props.data.content.video_collection.map((item, i) =>
            <VideoCard item={item} overflow={((props.data.content.container_width === 'fixed_left') || (props.data.content.container_width === 'fixed_right')) ? true : false} key={item.post_id + 'vg' + i}>
              <VideoLink to={`/video/${item.slug}`}>
                <PlayButton color={colors.white}/>
                <FitImage src={item.thumbnail} fit={'cover'}/>
              </VideoLink>
            </VideoCard>
          )
        : (props.data.content.display_method === 'popup')
        ?  props.data.content.video_collection.map((item, i) =>
            <VideoCard item={item} overflow={((props.data.content.container_width === 'fixed_left') || (props.data.content.container_width === 'fixed_right'))  ? true : false} key={item.post_id + 'vg' + i}>
              <VideoModal thumbnail={item.thumbnail} video_url={item.video_url} theme={'a'}/>
            </VideoCard>
          )
        : null
      }
    </GridWrapper>
  </VideoGridSection>

const VideoGridSection = styled(Section)`
  background-color: ${colors.white};
  ${halfFixed};
`

const VideoLink = styled(Link)`
  ${absoluteTopFull};
  ${flexCenteredAll};
`
