import React from 'react'
import styled from 'styled-components'
import { Section, H1, H2, P } from './../../styles/components'
import { pageData } from './../../components';
import { spacing } from './../../styles/theme.json'
import PostCard from './PostCard'

export default pageData((props) => {
  console.log(props)
  return (
    <Section>
      <H1>{props.title}</H1>
      <H2>{props.content.short_description}</H2>
      <P>{props.content.description}</P>
      <PostList>
        {props.content.post_collection.map((item, i) =>
          <PostCard cardData={item} key={`${item.ID}-post-${i}`}/>
        )}
      </PostList>
    </Section>
  )
})

// STYLES
const PostList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
`