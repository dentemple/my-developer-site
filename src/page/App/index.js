// @flow

import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Home from '../Home'

injectGlobal`
  @font-face {
    font-family: 'Open Sans';
    src: url('https://fonts.googleapis.com/css?family=Open+Sans');
  }

  @font-face {
    font-family: 'Exo';
    src: url('https://fonts.googleapis.com/css?family=Exo');
  }

  body {
    margin: 0;
    padding: 0;
  }
`

const Wrapper = styled.div`
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Home />
      </Wrapper>
    )
  }
}

export default App
