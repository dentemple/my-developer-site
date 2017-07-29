// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import profile from '../data/profile'
import type { Profile } from '../types'

import Hero from '../component/Hero'
import AboutMe from '../component/AboutMe'
import ContactMe from '../component/ContactMe'

const StyledDiv = styled.div`text-align: center;`

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
        <Hero forHire={profile.forHire} />
        <AboutMe profile={profile} />
        <ContactMe email={profile.email} />
      </StyledDiv>
    )
  }
}

export default Home
