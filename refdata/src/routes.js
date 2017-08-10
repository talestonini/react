import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import RefData from './components/refdata/RefData'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RefData} />
  </Route>
)
