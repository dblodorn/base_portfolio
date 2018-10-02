import React from 'react'
import { Helmet } from 'react-helmet'
import config from './../../config.json'

export default(props) =>
  <Helmet>
    <meta charSet="utf-8" />
    <title>{`${config.meta_defaults.title} | ${props.Title}`}</title>
    {(props.Description) && <meta name="description" content={props.Description} />}
  </Helmet>