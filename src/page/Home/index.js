import React, { Component } from 'react'
import styled from 'styled-components'
import Hero from '../../component/Hero'
import AboutMe from '../../component/AboutMe'

const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  text-align: center;
`

const AppIntro = styled.p`
  font-size: large;
`

class Home extends Component {
  constructor(props: any, children: any) {
    super()
    this.state = {
      isAvailable: true,
      profile: {
        location: 'Scranton, PA',
        year: '2017',
        clientSkills: [
          'Static Pages',
          'Full Service Websites',
          'Native Web Apps',
          'UX Design',
          'SEO Consulting',
          'API Integration'
        ],
        employerSkills: [
          'React',
          'JavaScript ES6',
          'Agile/Scrum',
          'Continuous Integration',
          'API/Microservices'
        ],
        summary: `Den Temple is a Javascript Developer with over three years in the industry. He specializes in Front End Design for web and mobile applications, and has additional expertise with full stack development and business analytics.`
      }
    }
  }
  render() {
    return (
      <Wrapper>
        <Hero isAvailable={this.state.isAvailable} />
        <AboutMe profile={this.state.profile} />
        <AppIntro>
          <span role="img" aria-label="sparkles emoji">✨</span>
          &nbsp;&nbsp;Currently rebuilding this website. Please come back
          soon!&nbsp;&nbsp;
          <span role="img" aria-label="sparkles emoji">✨</span>
        </AppIntro>
      </Wrapper>
    )
  }
}

export default Home
