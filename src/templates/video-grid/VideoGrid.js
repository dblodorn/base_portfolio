import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Section, GridWrapper } from './../../styles/components'
import { flexRowWrap, grid, wrapperWidths } from './../../styles/mixins'
import { pageData, PostBasics, Video } from './../../components'
import { spacing } from './../../styles/theme.json'

export default pageData((props) => {
  console.log(props)
  return (
    <Fragment>
      <PostBasics data={props}/>
      <Section>
        <GridWrapper className={`${props.content.container_width} ${props.content.columns}`}>
          {props.content.video_collection.map((item, i) =>
            <VideoThumb key={item.post_id + 'vg' + i}>
              <Video coverUrl={item.video_cover} videoUrl={item.video_url}/>
            </VideoThumb>
          )}
        </GridWrapper>
      </Section>
    </Fragment>
  )
})

const VideoThumb = styled.li`
  padding: ${spacing.single_pad};
  overflow: hidden;
`