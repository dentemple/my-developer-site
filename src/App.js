// @flow

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import asyncComponent from './util/AsyncComponent'
import theme from './util/globalStyle'

const AsyncHome = asyncComponent(() => import('./page/Home'))

const App = () =>
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/" component={AsyncHome} />
    </Switch>
  </ThemeProvider>

export default App
