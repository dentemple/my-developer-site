// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import Hero from '../component/Hero'
import AboutMe from '../component/AboutMe'
import profile from '../data/profile'
import type { Profile } from '../types'

const StyledDiv = styled.div`text-align: center;`
const StyledText = styled.p`font-size: large;`

type State = {|
  profile: Profile
|}

class Home extends Component {
  state: State = {
    profile: {}
  }
  componentDidMount() {
    this.setState({ profile })
  }
  render() {
    const { profile } = this.state
    return (
      <StyledDiv>
        <Hero profile={profile} />
        <AboutMe profile={profile} />
        <StyledText>
          <span role="img" aria-label="sparkles emoji">
            ✨
          </span>
          &nbsp;&nbsp;Currently rebuilding this website. Please come back
          soon!&nbsp;&nbsp;
          <span role="img" aria-label="sparkles emoji">
            ✨
          </span>
        </StyledText>
      </StyledDiv>
    )
  }
}

export default Home
