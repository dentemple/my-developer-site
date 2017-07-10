// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import Hero from '../component/Hero'
import AboutMe from '../component/AboutMe'
import PROFILE from '../data/profile'

const Wrapper = styled.div`text-align: center;`
const AppIntro = styled.p`font-size: large;`

class Home extends Component {
  state = {
    profile: {
      isAvailable: PROFILE.isAvailable,
      location: PROFILE.location,
      year: PROFILE.year,
      clientSkills: PROFILE.clientSkills,
      summary: PROFILE.summary,
      employerSkills: PROFILE.employerSkills
    }
  }
  render() {
    return (
      <Wrapper>
        <Hero isAvailable={this.state.profile.isAvailable} />
        <AboutMe profile={this.state.profile} />
        <AppIntro>
          <span role="img" aria-label="sparkles emoji">
            ✨
          </span>
          &nbsp;&nbsp;Currently rebuilding this website. Please come back
          soon!&nbsp;&nbsp;
          <span role="img" aria-label="sparkles emoji">
            ✨
          </span>
        </AppIntro>
      </Wrapper>
    )
  }
}

export default Home
