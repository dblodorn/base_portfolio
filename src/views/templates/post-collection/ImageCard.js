import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'
import { FitImage } from './../../../components'
import { opacityTransition, absoluteTopFull } from './../../../styles/mixins'
import { ProportionWrapper } from './../../../styles/components'

export default props => (
  <CardWrapper className={`${props.data.columns} ${props.data.style}`}>
    <ProportionWrapper
      className={`${props.data.columns}`}
      Desktop={props.data.thumbnail_proportion}
      Mobile={props.data.thumbnail_proportion_mobile}
      Maximum={props.data.thumbnail_proportion_max}
    >
      <ImageLink to={props.cardData.post_type === "page" ? `/${props.cardData.slug}` : `/${props.slug}/${props.cardData.slug}`}>
        <LazyLoad height='100%'>
          <FitImage src={props.cardData.thumbnail} fit={'cover'} hover={true}/>
        </LazyLoad>
      </ImageLink>
    </ProportionWrapper>
  </CardWrapper>
)

// STYLES
const CardWrapper = styled.li`
  position: relative;
`;

const ImageLink = styled(Link)`
  ${opacityTransition};
  ${absoluteTopFull};
`;
