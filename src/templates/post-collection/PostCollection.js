import React, { Fragment } from 'react'
import styled from 'styled-components'
import { wrapperWidths } from './../../styles/mixins'
import { Section } from './../../styles/components'
import { pageData, PostBasics } from './../../components'
import PostCard from './PostCard'
import Taxonomies from './Taxonomies'
import { parseTaxonomies } from './../../scripts'

const returnTaxonomies = (props) => {
  return {
    category: parseTaxonomies(props.post_collection, 'taxonomies', 'category'),
    capabilities: parseTaxonomies(props.post_collection, 'taxonomies', 'capabilities'),
    client: parseTaxonomies(props.post_collection, 'taxonomies', 'client'),
    industry: parseTaxonomies(props.post_collection, 'taxonomies', 'industry')
  }
}

export default pageData((props) => {
  return (
    <Fragment>
      <PostBasics data={props}/>
      <Section>
        {(props.content.show_taxonomies) && <Taxonomies title={'All Taxonomies'} taxonomies={returnTaxonomies(props.content)}/>}
        <PostList className={props.content.container_width}>
          {props.content.post_collection.map((item, i) =>
            <PostCard 
              theme={props.theme}
              style={props.content.style}
              showTitle={props.content.show_title}
              linkButton={props.content.link_button}
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
  ${wrapperWidths};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`