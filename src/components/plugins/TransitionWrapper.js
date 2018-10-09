import React from 'react'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import { transitions } from './../../styles/theme.json'

export default (props) =>
  <Transition
    component={false}
    enter={{
      opacity: spring(1, {stiffness: transitions.stiffness_fast, damping: transitions.damping_fast}),
      scale: spring(1, {stiffness: transitions.stiffness_fast, damping: transitions.damping_fast})
    }}
    leave={{
      opacity: 0,
      scale: 1.05
    }}
  >
    {props.children}
  </Transition>
