// @flow

import React from 'react'
import Container from './Container'
import GithubRibbon from './GithubRibbon'
import TextWrapper from './TextWrapper'
import MyName from './MyName'
import MyTagline from './MyTagline'
import HorizontalLine from './HorizontalLine'

const Hero = () =>
  <Container>
    <GithubRibbon />
    <TextWrapper>
      <MyName />
      <HorizontalLine />
      <MyTagline />
    </TextWrapper>
  </Container>

export default Hero
