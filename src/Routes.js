import React from 'react'
import { Route, Switch } from 'react-router'
import Document from './Document'
import { withStore } from './components'
import { NotFound } from './views'
import { HomeTemplate, PostCollectionTemplate } from './templates'

export default withStore((props) => {
  const templates = {
    'home': HomeTemplate,
    'post-collection': PostCollectionTemplate
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
        {(props.api_data) && buildRoutes(props.api_data.pages)}
        <Route component={NotFound} />
      </Switch>
    </Document>
  )
})
