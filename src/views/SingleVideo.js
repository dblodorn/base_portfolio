import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Video, PostBasics, pageData } from './../components'
import { Section } from './../styles/components'
import { fixedHero, flexCenteredAll } from './../styles/mixins'
import { colors, heights } from './../styles/theme.json'

export default pageData((props) => {
  return (
    <Fragment>
      <PostBasics data={props}/>
      <VideoSection>
        <VideoWrapper>
          <Video coverUrl={props.thumbnail} videoUrl={props.video_url} autoplay={true} single={true}/>
        </VideoWrapper>
      </VideoSection>
    </Fragment>
  )
})

const VideoSection = styled(Section)`
  ${flexCenteredAll};
  ${fixedHero(0, 0, 0)};
  position: fixed;
  top: 0;
  background-color: ${colors.black};
  height: 100vh;
`

const VideoWrapper = styled.div`
  width: 75vw;
`
