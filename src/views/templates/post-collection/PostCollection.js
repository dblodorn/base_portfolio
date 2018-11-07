import React from 'react'
import { connect } from 'react-redux'
import { Section, GridWrapper } from './../../../styles/components'
import { PopupGrid } from './../../../components'
import PostCard from './PostCard'
import PostLink from './PostLink'
import ImageCard from './ImageCard'
import HoverCard from './HoverCard'
import Taxonomies from './Taxonomies'
import { returnTaxonomies } from './../../../scripts'
import shuffle from 'lodash/shuffle'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
  shuffle: shuffle
})

const LinkSwitch = (props) => {
  if (props.data.thumbnail_style === 'text_only') {
    return (
      <PostLink data={props.data} slug={props.slug} cardData={props.item}/>
    )
  } else if (props.data.thumbnail_style === 'hover_image') {
    return (
      <HoverCard data={props.data} slug={props.slug} linkStyle={props.data.insert_action} cardData={props.item}/>
    )
  } else if (props.data.thumbnail_style === 'hover_title') {
    return (
      <HoverCard data={props.data} slug={props.slug} linkStyle={props.data.insert_action} cardData={props.item} />
    )
  } else if (props.data.thumbnail_style === 'image_title') {
    return (
      <PostCard data={props.data} slug={props.slug} linkStyle={props.data.insert_action} cardData={props.item} />
    )
  } else if ((props.data.thumbnail_style === 'image_only') && props.item.thumbnail) {
    return (
      <ImageCard data={props.data} slug={props.slug} cardData={props.item} />
    )
  } else {
    return false
  }
}


const PostCollection = (props) => {

  console.log(props.data.content.insert_action, props.data.content.thumbnail_style)

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
        ?  <PopupGrid 
              data={props.data.content}
              images={imageGrid()}
              width={props.data.content.container_width}
              columns={props.data.content.columns}
              proportion={props.data.content.thumbnail_proportion}
              collectionType={'post-collection'}
              type={'single'}
            />
        : <GridWrapper className={`${props.data.content.container_width} ${props.data.content.columns}`}>
            {props.data.content.insert_type === 'curated'
            ? randomOrNot(props.data.content.post_collection).map((item, i) => (
                <LinkSwitch
                  item={item}
                  slug={item.post_type}
                  data={props.data.content}
                  key={`${item.ID}-post-${i}`}
                />
              ))
            : props.api_data && randomOrNot(props.api_data.posts[props.data.content.post_type]).map((item, i) => (
                <LinkSwitch
                  item={item}
                  slug={props.data.content.post_type}
                  data={props.data.content}
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