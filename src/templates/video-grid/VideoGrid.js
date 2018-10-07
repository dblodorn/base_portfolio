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
              <Video coverUrl={item.video_cover.large} videoUrl={item.video_url}/>
            </VideoThumb>
          )}
        </VideoList>
      </Section>
    </Fragment>
  )
})

const VideoList = styled.ul`
  ${flexRowWrap};
`

const VideoThumb = styled.li`
  margin-bottom: ${spacing.big_pad};
  ${grid};
`