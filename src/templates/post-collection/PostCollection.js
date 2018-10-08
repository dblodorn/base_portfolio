import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themeB } from './../../styles/theme'
import { Section, H1, H2, StyledMarkup, PadWrapper } from './../../styles/components'
import { pageData, PostBasics } from './../../components';
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
    <Fragment>
      <PostBasics data={props}/>
      <Section>
        {(props.content.show_taxonomies) && <Taxonomies title={'All Taxonomies'} taxonomies={taxonomies}/>}
        <PostList>
          {props.content.post_collection.map((item, i) =>
            <PostCard 
              columns={props.content.columns}
              thumbnail_proportion={props.content.thumbnail_proportion}
              showTaxonomies={props.content.show_post_taxonomies}
              showThumbnail={props.content.show_thumbnail}
              cardData={item} 
              key={`${item.ID}-post-${i}`}
            />
          )}
        </PostList>
      </Section>
    </Fragment>
  )
})

// STYLES
const PostList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`