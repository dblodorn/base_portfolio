import React from 'react'
import { Route, Switch } from 'react-router'
import Document from './Document'
import { Landing, NotFound } from './views'

export default function () {
  return (
    <Document>
      <Switch>
        <Route exact path={'/'} component={Landing}/>
        <Route component={NotFound} />
      </Switch>
    </Document>
  )
}
