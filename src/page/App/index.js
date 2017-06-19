// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import Home from '../Home'

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
