import React, { Component } from 'react'
import { connect } from 'react-redux'
import find from 'lodash/find'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
  find: find
})

const filterProject = (data, route) => {
  if (route !== '/') {
    const splitRoute = route.split('/')
    const splitLength = splitRoute.length - 1
    return _.find(data, {slug: splitRoute[splitLength]})
  } else {
    return _.find(data, {is_home: true})
  }
}

export default (InnerComponent) => {
  class ProjectWrapper extends Component {
    constructor(props){
      super(props)
      this.state = {
        project: null
      }
    }
    componentWillMount(){
      this.setState({
        project: filterProject(
          this.props.data.pages,
          this.props.slug
        )
      })
    }
    render(){
      return (
        <InnerComponent
          {...this.state.project}
        />
      )
    }
  }
  return connect(
    state => ({
      data: state.api_data,
      slug: state.router.location.pathname
    })
  )(ProjectWrapper)
}
