import React from 'react'
import styled from 'styled-components'
import Section from '../Section'
import ResumeImage from './ResumeImage'
import Profile from './Profile'

const Wrapper = styled.div`
   display: -webkit-flex;
   display: flex;
   -webkit-flex-direction: row;
   flex-direction: row;
`

const AboutMe = ({ profile }) =>
  <Section>
    <Wrapper>
      <ResumeImage />
      <Profile profile={profile} />
    </Wrapper>
  </Section>

export default AboutMe
