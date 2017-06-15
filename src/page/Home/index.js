// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import Hero from '../../component/Hero'

const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`

const AppIntro = styled.p`
  font-size: large;
`

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Hero />
        <AppIntro>
          Currently rebuilding :)
        </AppIntro>
      </Wrapper>
    )
  }
}

export default Home
