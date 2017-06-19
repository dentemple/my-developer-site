// @flow

import React from 'react'
import Container from './Container'
import GithubRibbon from './GithubRibbon'
import TextWrapper from './TextWrapper'
import MyName from './MyName'
import MyTagline from './MyTagline'

const Hero = () =>
  <Container>
    <GithubRibbon />
    <TextWrapper>
      <MyName />
      <hr />
      <MyTagline />
    </TextWrapper>
  </Container>

export default Hero
