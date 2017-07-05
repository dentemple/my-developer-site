// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import Hero from '../component/Hero'
import AboutMe from '../component/AboutMe'

const Wrapper = styled.div`text-align: center;`
const AppIntro = styled.p`font-size: large;`

class Home extends Component {
  state = {
    isAvailable: true,
    profile: {
      location: 'Scranton, PA',
      year: '2017',
      clientSkills: [
        'Cross-Platform',
        'UI/UX',
        'SEO',
        'Social Media APIs',
        'Payment APIs',
        'Based in U.S.'
      ],
      summary: `Den Temple is a Javascript Developer, who specializes in Web and Mobile Design. He has additional expertise with API integration, SEO consulting, and Machine Learning analytics.`,
      employerSkills: [
        'React',
        'Node.js',
        'REST/GraphQL',
        'Agile/Scrum',
        'Git/Github'
      ]
    }
  }
  render() {
    return (
      <Wrapper>
        <Hero isAvailable={this.state.isAvailable} />
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
