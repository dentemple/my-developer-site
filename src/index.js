// @flow

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import WebFont from 'webfontloader'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

WebFont.load({
  google: {
    families: ['Open Sans', 'Exo:300', 'Cookie']
  }
})

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
