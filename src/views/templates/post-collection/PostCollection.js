import React from 'react'
import { connect } from 'react-redux'
import { Section, GridWrapper } from './../../../styles/components'
import { PopupGrid } from './../../../components'
import PostCard from './PostCard'
import Taxonomies from './Taxonomies'
import { parseTaxonomies } from './../../../scripts'
import shuffle from 'lodash/shuffle'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
  shuffle: shuffle
})

/*
  props.data.content.insert_action
  
  popup_grid : Popup Grid
  link_wrapper : Link Wrapper
  link_button : Link Button
  text_link : Text Link
*/

/*
  props.data.content.thumbnail_style
  
  hover_image : Title with hover Image, tap on mobile
  hover_title : Image with hover caption, tap on mobile
  image_title : Image with caption underneath
  image_only : Image Only
  text_only : Text only link
*/


const returnTaxonomies = (props) => {
  return {
    category: parseTaxonomies(props.post_collection, 'taxonomies', 'category'),
    capabilities: parseTaxonomies(props.post_collection, 'taxonomies', 'capabilities'),
    client: parseTaxonomies(props.post_collection, 'taxonomies', 'client'),
    industry: parseTaxonomies(props.post_collection, 'taxonomies', 'industry')
  }
}

const PostCollection = (props) => {

  console.log(props.data.content.insert_action)

  const randomOrNot = (list) => {
    return (props.data.content.random) ? _.shuffle(list) : list
  }

  const imageGrid = () => {
    return (props.data.content.insert_type === 'curated') 
      ? props.data.content.post_collection
      : randomOrNot(props.api_data.posts[props.data.content.post_type])
  }

  return (
    <Section>
      {(props.data.content.show_taxonomies) && 
        <Taxonomies class={'top'} title={'All Taxonomies'} taxonomies={returnTaxonomies(props.data.content)}/>
      }
      {(props.data.content.insert_action === 'popup_grid')
        ? <PopupGrid
            images={imageGrid()}
            width={props.data.content.container_width}
            columns={props.data.content.columns}
            proportion={props.data.content.thumbnail_proportion}
            collectionType={'post-collection'}
          />
        : <GridWrapper className={`${props.data.content.container_width} ${props.data.content.columns}`}>
            {props.data.content.insert_type === 'curated'
            ? randomOrNot(props.data.content.post_collection).map((item, i) => (
                <PostCard
                  theme={props.data.theme}
                  style={props.data.content.style}
                  slug={item.post_type}
                  showTitle={props.data.content.show_title}
                  linkButton={props.data.content.link_button}
                  columns={props.data.content.columns}
                  proportion={props.data.content}
                  showTaxonomies={props.data.content.show_post_taxonomies}
                  showThumbnail={props.data.content.show_thumbnail}
                  cardData={item}
                  key={`${item.ID}-post-${i}`}
                />
              ))
            : props.api_data && randomOrNot(props.api_data.posts[props.data.content.post_type]).map((item, i) => (
                <PostCard
                  theme={props.data.theme}
                  style={props.data.content.style}
                  slug={'project'}
                  showTitle={props.data.content.show_title}
                  linkButton={props.data.content.link_button}
                  columns={props.data.content.columns}
                  proportion={props.data.content}
                  showTaxonomies={props.data.content.show_post_taxonomies}
                  showThumbnail={props.data.content.show_thumbnail}
                  cardData={item}
                  key={`${item.ID}-post-${i}`}
                />
              ))
            }
          </GridWrapper>
      }
    </Section>
  )  
}

export default connect(
  state => ({
    api_data: state.api_data
  })
)(PostCollection)