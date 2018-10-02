import React from 'react'
import { Motion, spring } from 'react-motion'

export default (props) =>
  <Motion defaultStyle={{opacity: 0, scale: 0.85}} style={{opacity: spring(1, {stiffness: 60, damping: 8}), scale: spring(1, {stiffness: 120, damping: 10})}}>
    {obj => {
      const { opacity, scale } = obj
      let style= {
        opacity: opacity,
        transform: `scale(${scale})`
      }
      return <Wrapper style={style}>
        {props.children}
      </Wrapper>
    }}
  </Motion>

const Wrapper = styled.div`
  transform-origin: 50% 0%;
`
