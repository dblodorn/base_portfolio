import React from 'react'
import { Route, Switch } from 'react-router'
import Document from './Document'
import { withStore } from './components'
import { NotFound, Single } from './views'
import { HomeTemplate, PostCollectionTemplate, FlexibleImageGallery, VideoGrid } from './templates'

export default withStore((props) => {
  const templates = {
    'home': HomeTemplate,
    'post-collection': PostCollectionTemplate,
    'flexible-image-gallery': FlexibleImageGallery,
    'video-grid': VideoGrid
  }

  const buildRoutes = (data) => {
    return data.map((page, i) => {
      if (!page.is_home) {
        return(
          <Route exact path={`/${page.slug}`} component={templates[page.template]} key={i}/>
        )
      } else {
        return (
          <Route exact path={'/'} component={templates[page.template]} key={'landing'}/>
        )
      }
    })
  }

  return (
    <Document>
      <Switch>
        {(props.api_data) && buildRoutes(props.api_data.posts.pages)}
        {(props.api_data) && <Route exact path={'/:postType/:id'} component={props => <Single {...props}/>}/>}
        <Route component={NotFound} />
      </Switch>
    </Document>
  )
})
