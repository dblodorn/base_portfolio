import React from 'react'
import SingleImageModal from './modals/SingleImageModal'
import SlideshowModal from './modals/SlideshowModal'
import LazyLoad from 'react-lazyload'
import { GridWrapper, ProportionWrapper } from '../styles/components'
import ImageCaption from './ImageCaption'

export default (props) => {
  console.log(props)
  return (
    (props.type === 'single')
      ? <GridWrapper className={`${props.width} ${props.columns}`}>
        {props.images.map((item, i) =>
          <li key={i + 'grid-pop-single'}>
            <ProportionWrapper 
              DeskTop={props.proportion}
              Mobile={props.proportion}
              Maximum={props.proportion}
            >
              <LazyLoad height='100%'>
                <SingleImageModal 
                  src={(props.collectionType === 'post-collection') ? item.thumbnail : item.image.large}
                  description={(props.collectionType !== 'post-collection') && item.image}
                  theme={'b'}
                  fit={props.data.image_style}
                  captions={(props.collectionType !== 'post-collection') ? props.data.captions : false}
                  mobile={props.data.popup_on_mobile}
                />
              </LazyLoad>
            </ProportionWrapper>
            {((props.data.captions === 'grid') || (props.data.captions === 'both') && props.collectionType !== 'post-collection') && <ImageCaption caption={item.image.description}/>}
          </li>
        )}
      </GridWrapper>
    : <SlideshowModal 
        data={props.data}
        theme={'b'}
        fit={props.data.image_style}
        width={props.width}
        columns={props.columns}
        captions={props.data.captions}
        mobile={props.data.popup_on_mobile}
      />
  )
}
