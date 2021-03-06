import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import Document from './Document'
import { NotFound, Templates, SingleVideo, Shop } from './views'

class Routes extends Component {
  constructor(props) {
    super(props);
    this._buildRoutes = this._buildRoutes.bind(this)
  }

  _buildRoutes = (routes) => {
    if(!this.routes) {
      return routes.map((page, i) => {
        if (!page.is_home) {
          return(
            <Route exact path={`/${page.slug}`} component={Templates} key={'page' + page.slug + i}/>
          )
        } else {
          return (
            <Route exact path={'/'} component={Templates} key={'home'}/>
          )
        }
      })
    }
  }

  render() {
    return (
      <Document>
        <Switch>
          {(this.props.api_data) && this._buildRoutes(this.props.api_data.posts.pages)}
          {(this.props.api_data) && <Route exact path={'/project/:id'} component={Templates}/>}
          {(this.props.api_data) && <Route exact path={'/video/:id'} component={SingleVideo}/>}
          <Route component={NotFound}/>
        </Switch>
      </Document>
    )
  }
}

export default connect(
  state => ({
    api_data: state.api_data,
    router: state.router
  })
)(Routes)
