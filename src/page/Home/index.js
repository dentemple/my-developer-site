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
  constructor(props: any, children: any) {
    super()
    this.state = {
      isAvailable: true
    }
  }
  render() {
    return (
      <Wrapper>
        <Hero />
        <AppIntro>
          ✨ Currently rebuilding ✨
        </AppIntro>
      </Wrapper>
    )
  }
}

export default Home
