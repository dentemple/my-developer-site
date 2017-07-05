// @flow

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import asyncComponent from './AsyncComponent'
import theme from './util/globalStyle'

const AsyncHome = asyncComponent(() => import('./page/Home'))

const App = ({ childProps }) =>
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/" component={AsyncHome} props={childProps} />
    </Switch>
  </ThemeProvider>

export default App
