import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Section } from './../../styles/components'
import { flexRowWrap, grid } from './../../styles/mixins'
import { pageData, PostBasics, Video } from './../../components'
import { spacing } from './../../styles/theme.json'

export default pageData((props) => {
  console.log(props)
  return (
    <Fragment>
      <PostBasics data={props}/>
      <Section>
        <VideoList>
          {props.content.video_collection.map((item, i) =>
            <VideoThumb className={props.content.columns} key={item.post_id + 'vg' + i}>
              <Video coverUrl={item.video_cover} videoUrl={item.video_url}/>
            </VideoThumb>
          )}
        </VideoList>
      </Section>
    </Fragment>
  )
})

const VideoList = styled.ul`
  ${flexRowWrap};
  padding: ${spacing.single_pad};
`

const VideoThumb = styled.li`
  padding: ${spacing.single_pad};
  ${grid};
  overflow: hidden;
`