import React from 'react'
import styled from 'styled-components'
import { Section, H1, H2, StyledMarkup } from './../../styles/components'
import { pageData } from './../../components';
import { spacing, shared } from './../../styles/theme.json'
import PostCard from './PostCard'
import Taxonomies from './Taxonomies'
import { parseTaxonomies } from './../../scripts'

export default pageData((props) => {
  const taxonomies = {
    category: parseTaxonomies(props.content.post_collection, 'taxonomies', 'category'),
    capabilities: parseTaxonomies(props.content.post_collection, 'taxonomies', 'capabilities'),
    client: parseTaxonomies(props.content.post_collection, 'taxonomies', 'client'),
    industry: parseTaxonomies(props.content.post_collection, 'taxonomies', 'industry')
  }
  return (
    <Section>
      <H1>{props.title}</H1>
      <H2>{props.content.short_description}</H2>
      <Taxonomies title={'All Taxonomies'} taxonomies={taxonomies}/>
      <StyledMarkup dangerouslySetInnerHTML={{__html: props.content.description }}/>
      <PostList>
        {props.content.post_collection.map((item, i) =>
          <PostCard cardData={item} key={`${item.ID}-post-${i}`}/>
        )}
      </PostList>
    </Section>
  )
})

// STYLES
const PostList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: ${spacing.big_pad} 0;
  margin-top: ${spacing.double_pad};
  border-top: ${shared.border_thick};
`