import React, { Fragment } from 'react'
import { Section, GridWrapper } from './../../styles/components'
import { pageData, PostBasics, PopupGrid } from './../../components'
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
        {(props.content.show_taxonomies) && 
          <Taxonomies class={'top'} title={'All Taxonomies'} taxonomies={returnTaxonomies(props.content)}/>
        }
        {(props.content.popup_grid)
          ? <PopupGrid
              images={props.content.post_collection}
              width={props.content.container_width}
              columns={props.content.columns}
              proportion={props.content.thumbnail_proportion}
              collectionType={'post-collection'}
            />
          : <GridWrapper className={`${props.content.container_width} ${props.content.columns}`}>
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
            </GridWrapper>
        }
      </Section>
    </Fragment>
  )
})
