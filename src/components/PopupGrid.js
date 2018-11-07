import React from 'react'
import SingleImageModal from './modals/SingleImageModal'
import SlideshowModal from './modals/SlideshowModal'
import LazyLoad from 'react-lazyload'
import { GridWrapper, ProportionWrapper } from '../styles/components'

export default (props) => {
  return (
    (props.type === 'single')
      ? <GridWrapper className={`${props.width} ${props.columns}`}>
        {props.images.map((item, i) =>
          <li key={i + 'grid-pop-single'}>
            <ProportionWrapper 
              DeskTop={props.proportion}
              Mobile={props.proportion}
              Max={props.proportion}
            >
              <LazyLoad height='100%'>
                <SingleImageModal 
                  src={(props.collectionType === 'post-collection') ? item.thumbnail : item.image.large}
                  theme={'b'}
                  fit={props.data.image_style}
                />
              </LazyLoad>
            </ProportionWrapper>
          </li>
        )}
      </GridWrapper>
    : <SlideshowModal 
        data={props.data}
        theme={'b'}
        fit={props.data.image_style}
        width={props.width}
        columns={props.columns}
      />
  )
}
