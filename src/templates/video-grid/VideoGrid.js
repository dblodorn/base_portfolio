import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Section, GridWrapper } from './../../styles/components'
import { Video } from './../../components'

export default (props) => 
  <Section>
    <GridWrapper className={`${props.data.content.container_width} ${props.data.content.columns}`}>
      {props.data.content.video_collection.map((item, i) =>
        <VideoThumb key={item.post_id + 'vg' + i}>
          <Video coverUrl={item.video_cover} videoUrl={item.video_url}/>
        </VideoThumb>
      )}
    </GridWrapper>
  </Section>

const VideoThumb = styled.li`
  overflow: hidden;
`