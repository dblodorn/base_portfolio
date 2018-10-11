import React from 'react'
import { Section, GridWrapper } from './../../../styles/components'
import { Video } from './../../../components'
import VideoCard from './VideoCard'

export default (props) => {
  return (
    <Section>
      <GridWrapper className={`${props.data.content.container_width} ${props.data.content.columns}`}>
        {props.data.content.video_collection.map((item, i) =>
          <VideoCard item={item} key={item.post_id + 'vg' + i}>
            <Video coverUrl={item.thumbnail} videoUrl={item.video_url}/>
          </VideoCard>
        )}
      </GridWrapper>
    </Section>
  )
}
